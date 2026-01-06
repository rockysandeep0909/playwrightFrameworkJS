// ES5 -javascript objects
// ES6 - Class / Constructor

//object is collection of properties 


let person = {

    name:'Reena',
    lastname:'Behra',

}

console.log(person.name);
console.log(person.lastname);
person.profession='AutomationTester'
console.log(person.profession);
console.log(person);

for(let key in person){
    console.log(key +': '+ person[key]);
}