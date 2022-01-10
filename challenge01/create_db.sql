DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS "quizz";
DROP TABLE IF EXISTS "category";
DROP TABLE IF EXISTS "question";
DROP TABLE IF EXISTS "level";
DROP TABLE IF EXISTS "response";
DROP TABLE IF EXISTS "has_category";

CREATE TABLE IF NOT EXISTS "user" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "login" VARCHAR(100) NOT NULL,
  "password" VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS "quizz" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "title" VARCHAR(100) NOT NULL,
  "description" VARCHAR(400),
  "is_valid" BOOLEAN NOT NULL,
  "author" INT REFERENCES "user"("id") NOT NULL
);

CREATE TABLE IF NOT EXISTS "category" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS "level" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS "question" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "question" VARCHAR(400) NOT NULL,
  "level" INT REFERENCES "level"("id") NOT NULL
  --"response" INT REFERENCES "response"("id")
);

CREATE TABLE IF NOT EXISTS "response" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "response" VARCHAR(400) NOT NULL,
  "question" INT REFERENCES "question"("id") NOT NULL
);

CREATE TABLE IF NOT EXISTS "has_category" (
  "quizz" INT REFERENCES "quizz"("id") NOT NULL,
  "category" INT REFERENCES "category"("id") NOT NULL
);

ALTER TABLE "question" ADD COLUMN "response" INT REFERENCES "response"("id");
