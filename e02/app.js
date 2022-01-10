const express = require("express");

// J'importe ce que nous allons appeler des Model (M de MVC)
const Helper = require("./Helper.js");
const Student = require("./Student.js");

const app = express();


const maurice = new Helper("Maurice","Norris",24);
const michel = new Helper('Michel', 'pacompry', 55);
//maurice.save(); // je sauvegarde dans ma table User

// Je veux avoir le nombre de helpers
Helper.helperCount();

const chuck = new Student("Chuck","Norris",23);

chuck.firstname = "Toto";
//console.log(chuck.firstname);
// console.log(chuck.age);

chuck.status = "helper";
console.log(chuck);

console.log(Student.studentNumber);

const gilbert = new Student("Gilbert","Norris",12);

console.log(Student.studentNumber);

//chuck.save(); // je sauvegarde dans ma table User

app.listen(8000);