DO $$ BEGIN
 CREATE TYPE "user_role" AS ENUM('admin', 'user');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "altas_users" ALTER COLUMN "email" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "altas_users" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "altas_users" ADD COLUMN "password" text NOT NULL;--> statement-breakpoint
ALTER TABLE "altas_users" ADD COLUMN "role" "user_role" NOT NULL;--> statement-breakpoint
ALTER TABLE "altas_users" ADD COLUMN "created_at" date DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "altas_users" ADD COLUMN "updated_at" date DEFAULT now() NOT NULL;