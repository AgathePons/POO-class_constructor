# MLD de O'Quizz

Modèle Logique de Données

## Le MCD

![](image.png)

## Le MLD

- User (<ins>id</ins>, firstname, lastname, mail, password)
  
- Quiz (<ins>id</ins>, title, description, isvalid, #user(id))
  
- Category (<ins>id</ins>, name)

- Question (<ins>id</ins>, description, wiki, quote, #level(id), #answer(id), #quiz(id))

- Level (<ins>id</ins>, name)

- Answer (<ins>id</ins>, description, #question(id))

- Quiz HAS Category (#quizz(id), #category(id))
