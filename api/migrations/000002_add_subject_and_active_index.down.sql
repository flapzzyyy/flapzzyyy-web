DROP INDEX IF EXISTS idx_contact_active;

ALTER TABLE contact_messages DROP COLUMN IF EXISTS subject;
