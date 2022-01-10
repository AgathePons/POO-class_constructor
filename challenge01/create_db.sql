-- on écrit une transaction entre BEGIN et COMMIT
-- une trasaction est une suite d'instructions SQL
-- en cas de soucis, tout ce qui a été fait est supprimé

BEGIN

-- tabula rasa
DROP TABLE IF EXISTS "user", "quiz", "category", "level", "question", "answer", "quizz_has_category";

DROP TABLE IF EXISTS "response", "quizz", "has_category";

-- On crée les tables
CREATE TABLE IF NOT EXISTS "user" (
  "id" SERIAL AS IDENTITY PRIMARY KEY,
  "firstname" TEXT NOT NULL,
  "lastname" TEXT NOT NULL,
  "mail" TEXT NOT NULL UNIQUE,
  "password" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "quiz" (
  "id" SERIAL AS IDENTITY PRIMARY KEY,
  "title"  TEXT NOT NULL,
  "description" TEXT,
  "is_valid" BOOLEAN DEFAULT false,
  "user_id" INT NOT NULL REFERENCES "user"("id")
);

CREATE TABLE IF NOT EXISTS "category" (
  "id" SERIAL AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "level" (
  "id" SERIAL AS IDENTITY PRIMARY KEY,
  "name" TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS "question" (
  "id" SERIAL AS IDENTITY PRIMARY KEY,
  "description" TEXT NOT NULL,
  "wiki" TEXT,
  "quote" TEXT,
  "level_id" INT REFERENCES "level"("id") NOT NULL,
  "quiz_id" INT REFERENCES "quiz"("id") NOT NULL
  --"response" INT REFERENCES "response"("id")
);

CREATE TABLE IF NOT EXISTS "answer" (
  "id" SERIAL AS IDENTITY PRIMARY KEY,
  "description" TEXT NOT NULL,
  "question_id" INT REFERENCES "question"("id") NOT NULL
);

-- table d'association
CREATE TABLE IF NOT EXISTS "quizz_has_category" (
  "id" SERIAL AS IDENTITY PRIMARY KEY,
  "quiz_id" INT REFERENCES "quiz"("id") NOT NULL,
  "category_id" INT REFERENCES "category"("id") NOT NULL
);

-- on modifie question après avoir créé réponse
-- pour régler le paradoxe de l'oeuf et dela poule
ALTER TABLE "question" 
ADD FOREIGN KEY ("answer_id") REFERENCES "answer"("id");

COMMIT