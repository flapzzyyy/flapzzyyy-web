package config

import (
	"fmt"
	"os"
	"strconv"
	"strings"

	"github.com/joho/godotenv"
)

const defaultRateLimitRPM = 5

type Config struct {
	Port               string
	DatabaseURL        string
	SupabaseURL        string
	SupabaseServiceKey string
	JWTSecret          string
	CORSAllowedOrigins []string
	RateLimitRPM       int
}

func Load() (*Config, error) {
	_ = godotenv.Load()

	rateLimitRPM, err := strconv.Atoi(getEnv("RATE_LIMIT_RPM", strconv.Itoa(defaultRateLimitRPM)))
	if err != nil || rateLimitRPM < 1 {
		return nil, fmt.Errorf("RATE_LIMIT_RPM must be a positive integer")
	}

	cfg := &Config{
		Port:               getEnv("PORT", "8080"),
		DatabaseURL:        os.Getenv("DATABASE_URL"),
		SupabaseURL:        os.Getenv("SUPABASE_URL"),
		SupabaseServiceKey: os.Getenv("SUPABASE_SERVICE_ROLE_KEY"),
		JWTSecret:          os.Getenv("JWT_SECRET"),
		CORSAllowedOrigins: splitAndTrim(getEnv("CORS_ALLOWED_ORIGINS", "http://localhost:3000")),
		RateLimitRPM:       rateLimitRPM,
	}

	var missing []string
	if cfg.DatabaseURL == "" {
		missing = append(missing, "DATABASE_URL")
	}
	if cfg.JWTSecret == "" {
		missing = append(missing, "JWT_SECRET")
	}
	if len(missing) > 0 {
		return nil, fmt.Errorf("missing required environment variables: %s", strings.Join(missing, ", "))
	}

	return cfg, nil
}

func getEnv(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}

func splitAndTrim(value string) []string {
	parts := strings.Split(value, ",")
	result := make([]string, 0, len(parts))
	for _, part := range parts {
		if trimmed := strings.TrimSpace(part); trimmed != "" {
			result = append(result, trimmed)
		}
	}
	return result
}
