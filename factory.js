/* Cette façon de procéder pour générer des objets s'appelle le Design Pattern
   C'est une fabrique à objet */

   const wilfried = {
    firstname:"Wilfried",
    age:64,
    passions:["furet"]
};

const paul = {
    firstname:"Paul",
    age:25,
    passions:["poney","voile"]
};

const PersonFactory = {
    makePerson:(firstname,age,passions)=>{
        const newPerson = {};

        newPerson.firstname = firstname;
        newPerson.age = age;
        newPerson.passions = passions;

        return newPerson;
    }
};

const ines = PersonFactory.makePerson("Ines",23,["Final Fantasy"]);

console.log(ines);

// ----------------------------------------------------
// On va faire des class

class Person {
  // la class a des propriétés :
  // dans un objet, les clés ne sont pas ordonnées, donc les propriétés non plus
  // les propriétés ne sont pas obligatoires
  firstname;
  age;
  passions;

  constructor(firstname, age, passion) {
    this.#firstname = firstname;
    this.age = age;
    this.passions = this.passions;

    // pas besoin de return, l'obj est automatiquement retourné
  }

  getAge() {
    return this.firstname + ' a ' + this.age + ' ans.';
  }
  setFirstname(firstname) {
    if(typeof firstname === 'string') {
      this.#firstname = firstname;
    } else {
      throw Error("Person.firstname must be a string.");
    }
  }
}

// on génère une instance d'objet à partir de la class
const ines = new Person('Inès', 24, 'FF');

ines.setFirstname('Highness');

console.log(ines);

// la POO va permettre d'avoir des méthodes globales à la classe
await Person.find('Ines');
// la POO va permettre de gérer objet par objet notre application
//await ines.save();