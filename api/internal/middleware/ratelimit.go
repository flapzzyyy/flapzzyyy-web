package middleware

import (
	"math"
	"net/http"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
	"golang.org/x/time/rate"
)

const (
	visitorTTL      = 10 * time.Minute
	cleanupInterval = 3 * time.Minute
)

type visitor struct {
	limiter  *rate.Limiter
	lastSeen time.Time
}

func RateLimit(limit rate.Limit, burst int) gin.HandlerFunc {
	var (
		mu       sync.Mutex
		visitors = make(map[string]*visitor)
	)

	go func() {
		for {
			time.Sleep(cleanupInterval)
			mu.Lock()
			for ip, v := range visitors {
				if time.Since(v.lastSeen) > visitorTTL {
					delete(visitors, ip)
				}
			}
			mu.Unlock()
		}
	}()

	return func(c *gin.Context) {
		ip := c.ClientIP()

		mu.Lock()
		v, ok := visitors[ip]
		if !ok {
			v = &visitor{limiter: rate.NewLimiter(limit, burst)}
			visitors[ip] = v
		}
		v.lastSeen = time.Now()
		allowed := v.limiter.Allow()
		var retryAfter int
		if !allowed {
			reservation := v.limiter.Reserve()
			retryAfter = int(math.Ceil(reservation.Delay().Seconds()))
			reservation.Cancel()
			if retryAfter < 1 {
				retryAfter = 1
			}
		}
		mu.Unlock()

		if !allowed {
			c.AbortWithStatusJSON(http.StatusTooManyRequests, gin.H{
				"error":      "rate_limited",
				"retryAfter": retryAfter,
			})
			return
		}
		c.Next()
	}
}
