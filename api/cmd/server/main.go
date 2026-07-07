package main

import (
	"context"
	"log"

	"github.com/kevin/flapzzyyy-api/internal/config"
	"github.com/kevin/flapzzyyy-api/internal/database"
	"github.com/kevin/flapzzyyy-api/internal/router"
)

func main() {
	cfg, err := config.Load()
	if err != nil {
		log.Fatalf("failed to load config: %v", err)
	}

	pool, err := database.NewPool(context.Background(), cfg.DatabaseURL)
	if err != nil {
		log.Fatalf("failed to connect to database: %v", err)
	}
	defer pool.Close()
	log.Println("connected to database")

	r := router.New(pool, cfg.CORSAllowedOrigins)
	if err := r.Run(":" + cfg.Port); err != nil {
		log.Fatalf("server exited: %v", err)
	}
}
