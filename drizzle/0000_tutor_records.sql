CREATE TABLE `students` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`subject` text DEFAULT '' NOT NULL,
	`fee` integer DEFAULT 0 NOT NULL,
	`progress` text DEFAULT '' NOT NULL,
	`next_class` text DEFAULT '' NOT NULL,
	`notes` text DEFAULT '' NOT NULL,
	`token_hash` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `students_token_hash_idx` ON `students` (`token_hash`);
--> statement-breakpoint
CREATE TABLE `lessons` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`student_id` integer NOT NULL,
	`session_number` integer NOT NULL,
	`held_at` text NOT NULL,
	`topic` text NOT NULL,
	`summary` text DEFAULT '' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`student_id`) REFERENCES `students`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE UNIQUE INDEX `lessons_student_session_idx` ON `lessons` (`student_id`,`session_number`);
--> statement-breakpoint
CREATE INDEX `lessons_student_id_idx` ON `lessons` (`student_id`);
