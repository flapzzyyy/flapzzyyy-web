package service

import (
	"context"
	"fmt"
	"strings"

	"github.com/kevin/flapzzyyy-api/internal/domain"
)

type ContactRepository interface {
	Create(ctx context.Context, msg domain.ContactMessage) (string, error)
}

type ContactService struct {
	repo ContactRepository
}

func NewContactService(repo ContactRepository) *ContactService {
	return &ContactService{repo: repo}
}

func (s *ContactService) Submit(ctx context.Context, name, email, subject, message string) (string, error) {
	msg := domain.ContactMessage{
		Name:    strings.TrimSpace(name),
		Email:   strings.TrimSpace(email),
		Subject: strings.TrimSpace(subject),
		Message: strings.TrimSpace(message),
	}

	id, err := s.repo.Create(ctx, msg)
	if err != nil {
		return "", fmt.Errorf("failed to submit contact message: %w", err)
	}
	return id, nil
}
