ALTER TABLE "altas_users" ADD COLUMN "email" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "altas_users" ADD CONSTRAINT "altas_users_email_unique" UNIQUE("email");