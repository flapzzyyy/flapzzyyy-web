package router

import (
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"golang.org/x/time/rate"

	"github.com/kevin/flapzzyyy-api/internal/handler"
	"github.com/kevin/flapzzyyy-api/internal/middleware"
	"github.com/kevin/flapzzyyy-api/internal/repository/postgres"
	"github.com/kevin/flapzzyyy-api/internal/service"
)

const contactBurst = 3

func New(pool *pgxpool.Pool, allowedOrigins []string, rateLimitRPM int) *gin.Engine {
	r := gin.Default()

	r.Use(middleware.SecureHeaders())

	corsConfig := cors.DefaultConfig()
	corsConfig.AllowOrigins = allowedOrigins
	corsConfig.AllowHeaders = append(corsConfig.AllowHeaders, "Authorization")
	r.Use(cors.New(corsConfig))

	healthHandler := func(c *gin.Context) {
		if err := pool.Ping(c.Request.Context()); err != nil {
			c.JSON(http.StatusServiceUnavailable, gin.H{
				"status": "unhealthy",
				"time":   time.Now().UTC().Format(time.RFC3339),
			})
			return
		}
		c.JSON(http.StatusOK, gin.H{
			"status": "ok",
			"time":   time.Now().UTC().Format(time.RFC3339),
		})
	}

	r.GET("/health", healthHandler)

	contactRepo := postgres.NewContactRepository(pool)
	contactService := service.NewContactService(contactRepo)
	contactHandler := handler.NewContactHandler(contactService)

	contactRate := rate.Limit(float64(rateLimitRPM) / 60.0)

	v1 := r.Group("/api/v1")
	v1.GET("/health", healthHandler)
	v1.POST(
		"/contact",
		middleware.RateLimit(contactRate, contactBurst),
		contactHandler.Submit,
	)

	return r
}
