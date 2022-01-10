# POO

POO pour programmation orientée objet.

## Philosophie

La programmation orientée objet est une organisation autour d'**instances**.

Chaque instance a son propre cycle de vie :

1. Création de l'objet (new)
2. Modification de l'objet
3. Suppression de l'objet

Cette méthode peut être pratique notamment pour tout ce qui concerne la base de données.

Une instance d'objet aura des méthodes :

1. Pour s'insérer
2. Pour se mettre à jour
3. Pour se supprimer

### RAPPEL

CRUD :

Create
Read
Update
Delete

## Propriétés publiques/privées

Les propriétés privées et publiquent permettent de gérer l'accès ou non à une propriété.

Dans le cas d'une propriété publique, on est dans ce qu'on connait.


```js

class Person{
    firstname;

    constructor(firstname){
        this.firstname = firstname;
    }
}

const chuck = new Person("Chuck");

chuck.firstname = "Toto";
// la valeur se met directement à jour
```

Dans le cas d'une propriété privée, la mise à jour de la propriété en dehors de la classe, va passer par le setter :

```js

class Person{
    #firstname; // en passant la propriété en privée, je force l'utilisation du SETTER

    constructor(firstname){
        this.#firstname = firstname;
    }

    set firstname(value){
        this.#firstname = value;
    }
}

const chuck = new Person("Chuck");

chuck.firstname = "Toto";
// la valeur est mise à jour dans le setter
```

**Pourquoi travailler avec des propriétés privées plutôt que publique ?**

En utilisant des propriétés privées, on oblige l'accès à la propriété ou la modification de sa valeur à passer dans les GETTER/SETTER.

Dans ceux-ci nous pouvons effectuer différentes opérations pour s'assurer de l'intégrité des données.

L'intégrité des données, c'est s'assurer que le format de la donnée est conforme à ce qui est attendu.


## Static

Static nous permet de définir des propriétés et des méthodes propres à la classe et non aux instances générées par celle-ci.

Par exemple, une personne à un prénom, c'est propre à elle.
L'ensemble des habitants d'un pays n'est pas une information propre à une personne.

Pour faire simple, tout ce qui est propre à une instance (objet généré par la classe avec new) n'est pas statique !

## Héritage

Une classe peut hériter d'une autre classe.

L'héritage permet à un enfant d'avoir les propriétés et les méthodes de son parent.

On peut **surcharger** des méthodes pour en créer des spécifiques. Pour faire une surcharge, on reécrit la méthode dans l'enfant.

Pour indiquer qu'une classe hérite d'une autre classe, on utilise le mot `extends`.