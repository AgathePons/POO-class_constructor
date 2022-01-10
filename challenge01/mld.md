# MLD de O'Quizz

Modèle Logique de Données

## Le MCD

![](image.png)

## Le MLD

- User (<ins>code user</ins>, login, password)
  
- Quizz (<ins>code quizz</ins>, title, description, is valid, #code user)
  
- Category (<ins>code category</ins>, name)

- Question (<ins>code question</ins>, question, #code level, #code reponse)

- Level (<ins>code level</ins>, name)

- Response (<ins>code response</ins>, response, #code question)

- HAS CATEGORY (<ins>code quizz</ins>, <ins>code category</ins>)
