class Dog{

    age=25;
    name="scobby";
    breed="doberman";

    //constructor - is a method that gets called when an object is created
    constructor(){
        console.log("Dog object created");
    }

    activity(){
        console.log(this.name+" is barking");
    }

    activity1(){
        console.log(this.name+" is playing");
    }

}

let scobby=new Dog();
for(let key in scobby){
    console.log(scobby[key]);


}
scobby.activity();
scobby.activity1();

let tommy=new Dog();
for(let key in tommy){
    console.log(tommy[key]);    
}

module.exports={Dog};