/* Classe étudiant avec les propriétés :

- firstname
- lastname
- age
- status : "étudiant" est la valeur par défaut

+

constructeur(firstname,lastname,age,status)

*/


const Person = require("./Person.js");

class Student extends Person{
    // les propriétés statiques sont des propriétés globales à la classe (non présente dans les instances d'objet)
    static studentNumber = 0;



    constructor(firstname,lastname,age){
        // j'appelle le constructeur du parent (Person)
        super(firstname,lastname,age);

        // console.log("avant"+Student.studentNumber);
        // j'incrémente ma variable globale à la classe Student
        Student.studentNumber++;
        // console.log("apres"+Student.studentNumber);
    }

    // je crèe une surcharge, la méthode toString du parent ne sera pas appelée
    toString(){
        return "L'étudiant : "+this.#firstname+" "+this.#lastname;
    }   
}

module.exports = Student;