package domain

import "time"

type ContactMessage struct {
	ID        string
	Name      string
	Email     string
	Subject   string
	Message   string
	CreatedAt time.Time
	UpdatedAt time.Time
	DeletedAt *time.Time
}
