const Person = require("./Person.js");

class Helper extends Person{
    static helperNumber = 0;

    constructor(firstname,lastname,age){
        super(firstname,lastname,age);

        this.status = "helper"; // je regenseigne la valeur par défaut

        // j'incrémente le nombre de helper
        Helper.helperNumber++;
    }


    static helperCount(){
        console.log(`Il y a ${Helper.helperNumber} helpers`);
    }

    // j'ai le droit d'avoir plusieurs constructeurs
    // constructor(firstname,lastname,age,status){
    //     this.firstname = firstname;
    //     this.lastname = lastname;
    //     this.age = age;
    //     this.status
    // }
}

module.exports = Helper;