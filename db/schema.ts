import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const students = sqliteTable(
  "students",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    subject: text("subject").notNull().default(""),
    fee: integer("fee").notNull().default(0),
    progress: text("progress").notNull().default(""),
    nextClass: text("next_class").notNull().default(""),
    notes: text("notes").notNull().default(""),
    tokenHash: text("token_hash").notNull(),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
    updatedAt: text("updated_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({ tokenHashIndex: uniqueIndex("students_token_hash_idx").on(table.tokenHash) }),
);

export const lessons = sqliteTable(
  "lessons",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    studentId: integer("student_id")
      .notNull()
      .references(() => students.id, { onDelete: "cascade" }),
    sessionNumber: integer("session_number").notNull(),
    heldAt: text("held_at").notNull(),
    topic: text("topic").notNull(),
    summary: text("summary").notNull().default(""),
    createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    studentSessionIndex: uniqueIndex("lessons_student_session_idx").on(
      table.studentId,
      table.sessionNumber,
    ),
    studentIdIndex: index("lessons_student_id_idx").on(table.studentId),
  }),
);
