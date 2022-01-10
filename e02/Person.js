
/*
Une classe va nous permettre de créer des objets suivant un modèle
Par convention, le nom de la classe commence par une majuscule
*/

class Person {
  // Notre classe a des propriétés :
  // Dans un objet, les clefs ne sont pas ordonnées donc les propriétés non plus
  // les propriétés ne sont pas obligatoires
  #firstname; // le # précise que la propriété est privée, inaccessible en dehors de la classe
  #lastname;
  #age;
  #passions;
  #status = "étudiant"; // je regenseigne la valeur par défaut

  // Le constructeur est appelé lorsqu'on utilise le mot "new"
  constructor(firstname, lastname, age) {
      this.#firstname = firstname;
      this.#lastname = lastname;
      this.#age = age;

      // pas besoin de return, l'objet est automatiquement retourné
  }

  // Le constructeur est appelé lorsqu'on utilise le mot "new"
  /*constructor(firstname, lastname, age, passions) {
      this.#firstname = firstname;
      this.#lastname = lastname;
      this.#age = age;
      this.#passions = passions;

      // pas besoin de return, l'objet est automatiquement retourné
  }*/

  //#region GETTER-SETTER
  /* GETTER / SETTER
  le mot clef "get" va être employé pour informer de la récupération de la donnée (valeur de la propriété)
  
  le mot clef "set" va permettre la mise à jour de la valeur de la propriété
  */
  get firstname() {
      console.log("firstname is " + this.#firstname);
      return this.#firstname;
  }

  set firstname(value) {
      if (typeof value == "string") {
          console.log("new firstname is " + value);
          this.#firstname = value;
      }
      else {
          throw Error("Person.firstname must be a string.");
      }
  }

  get lastname() {
      return this.#lastname;
  }

  set lastname(value) {
      if (typeof value == "string") {
          console.log("new lastname is " + value);
          this.#lastname = value;
      }
      else {
          throw Error("Person.lastname must be a string.");
      }
  }

  get age() {
      return `${this.#firstname} a ${this.#age}ans.`
  }

  set age(value) {
      this.#age = value;
  }

  get status() {
      return this.#status;
  }

  set status(value) {
      this.#status = value;
  }

  //#endregion

  toString(){
      return this.#firstname+" "+this.#lastname;
  }


  getAge() {
      return this.firstname + " a " + this.age + " ans.";
  }

  getFirstname() {
      return this.#firstname;
  }

  setFirstName(firstname) {
      if (typeof firstname == "string") {
          this.#firstname = firstname;
      }
      else {
          throw Error("Person.firstname must be a string.");
      }

  }

}

// Je génère une INSTANCE d'objet à partir de ma classe
//const ines = new Person("Ines",23,["Final Fantasy"]);

//console.log(ines);
//ines.firstname = "Highness"; // je veux bloquer cette ligne
//ines.setFirstName("Highness");

//console.log(ines.getFirstname());

// /* la POO va permettre d'avoir des méthodes globales à la classe */
// await Person.find("Ines");
// /* la POO va permettre de gérer objet par objet notre application */
// await ines.save();

module.exports = Person;