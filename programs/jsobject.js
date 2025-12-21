// javascript object is a collection of properties
//ES5 -- objects 
//ES6 -- classes

let person={
    firstname:"Varadamn",
    lastname:"Patil",
    age:28

}

console.log(person.firstname);
console.log(person.lastname);
person.gender='male';

console.log(person);

for(let key in person){
  console.log(person[key]);  
} 