const test = require("node:test");

function addition(a,b){
    console.log(a+b);
    subtraction(a,b);
    division(a,b);
    console.log(a*b);
    console.log(a%b);
    
    
}

function subtraction(a,b){
    console.log(a-b);

    
}

function division(a,b){
    console.log(a/b);
}

function stringconcat(str1,str2){
    console.log(str1+" "+str2);
}

function testboolean(flag){
    if(flag){
        console.log("Boolean is true"); 
    }else{
        console.log("Boolean is false");
    }   
}






addition(10,5);
subtraction(20,10);
division(500,5);
division(1000,4);
stringconcat("Hello","World");
stringconcat("Good","Morning");
testboolean(true);
testboolean(false);
