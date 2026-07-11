package handler

import (
	"errors"
	"log"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"

	"github.com/kevin/flapzzyyy-api/internal/service"
)

type contactRequest struct {
	Name    string `json:"name" binding:"required,min=2,max=100"`
	Email   string `json:"email" binding:"required,email,max=254"`
	Subject string `json:"subject" binding:"omitempty,max=150"`
	Message string `json:"message" binding:"required,min=10,max=5000"`
}

type ContactHandler struct {
	service *service.ContactService
}

func NewContactHandler(service *service.ContactService) *ContactHandler {
	return &ContactHandler{service: service}
}

func (h *ContactHandler) Submit(c *gin.Context) {
	var req contactRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   "validation_failed",
			"details": validationDetails(err),
		})
		return
	}

	id, err := h.service.Submit(c.Request.Context(), req.Name, req.Email, req.Subject, req.Message)
	if err != nil {
		log.Printf("contact submit failed: %v", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "internal_error",
		})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"id": id, "status": "received"})
}

func validationDetails(err error) map[string]string {
	details := make(map[string]string)

	var validationErrs validator.ValidationErrors
	if !errors.As(err, &validationErrs) {
		details["body"] = "invalid request body"
		return details
	}

	for _, fieldErr := range validationErrs {
		field := strings.ToLower(fieldErr.Field())
		switch fieldErr.Tag() {
		case "required":
			details[field] = "required"
		case "email":
			details[field] = "invalid email"
		case "min":
			details[field] = "too short (min " + fieldErr.Param() + " characters)"
		case "max":
			details[field] = "too long (max " + fieldErr.Param() + " characters)"
		default:
			details[field] = "invalid value"
		}
	}
	return details
}
