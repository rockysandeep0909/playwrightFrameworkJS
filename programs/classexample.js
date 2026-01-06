class DogExample
{

    age=25;
    name='scobby';
    color='brown';
    breed='Dalmation';


    //constructor -is a method which executes by default when an object is created
    constructor(){
        console.log('Constructor executed');
        console.log("inside constructor");
        console.log("mutliple lines of code can be written here");
    }
    
    

    bark(){
        console.log('Woof Woof');
    }

}
// let objectname=new classname();
let tommy=new Dog();
console.log(tommy.age);
console.log(tommy.name);
console.log(tommy.breed);
console.log("-------------------");

let scobby=new Dog();
console.log(scobby.color);
scobby.bark();

module.exports={DogExample};