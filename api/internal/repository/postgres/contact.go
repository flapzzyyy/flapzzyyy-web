package postgres

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"

	"github.com/kevin/flapzzyyy-api/internal/domain"
)

type ContactRepository struct {
	pool *pgxpool.Pool
}

func NewContactRepository(pool *pgxpool.Pool) *ContactRepository {
	return &ContactRepository{pool: pool}
}

func (r *ContactRepository) Create(ctx context.Context, msg domain.ContactMessage) (string, error) {
	var id string
	err := r.pool.QueryRow(ctx,
		`INSERT INTO contact_messages (name, email, subject, message)
		 VALUES ($1, $2, NULLIF($3, ''), $4)
		 RETURNING id`,
		msg.Name, msg.Email, msg.Subject, msg.Message,
	).Scan(&id)
	if err != nil {
		return "", fmt.Errorf("failed to insert contact message: %w", err)
	}
	return id, nil
}
