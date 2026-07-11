ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS subject text;

CREATE INDEX IF NOT EXISTS idx_contact_active
    ON contact_messages (created_at)
    WHERE deleted_at IS NULL;
