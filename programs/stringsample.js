let str=' this is last friday session for this year '
let email='sandeepkumar@gmail.com@yahoo.com'
let password ='Sandeep_12345'

console.log(str);
console.log(typeof(str));

//length of string
console.log("Length of string is: "+str.length);

//trim
let trimmedStr=str.trim();
console.log(trimmedStr.length);

let emailParts=email.split('@');
console.log(emailParts[0])
console.log(emailParts[1])
console.log(emailParts[2]) //['sandeepkumar','gmail.com','yahoo.com']

let passwordChars=password.split('_');
console.log(passwordChars[0])
console.log(passwordChars[1])

let newpassword='sandeep2026'
console.log(newpassword.slice(2,7))
console.log(newpassword.slice(5))


let msg ="Hello Sandeep, welcome to the JavaScript world. JavaScript is very popular language. Enjoy learning JavaScript!"
console.log(msg.slice(14));
let msgIndex=msg.indexOf('JavaScript')
console.log(msg.slice(msgIndex));
console.log("Index of JavaScript is: "+msgIndex);
let msgaddition=" Have a great day!"
console.log(msg.concat(msgaddition));
let msg2= msg.replaceAll('JavaScript','JS')
console.log(msg2);
msg.toLowerCase()
console.log(msg.toLowerCase());
msg.toUpperCase()
console.log(msg.toUpperCase());

let namme="veeresh is learning playwright";
let value1=namme.indexOf("prashanth");
console.log("output of index not present"+value1);


let programmessage="Hello Sandeep, welcome to the JavaScript world. JavaScript is very popular language. Enjoy learning JavaScript! JavaScript"
let count=0
let value=programmessage.indexOf("JavaScript");
while(value!==-1){
    count++
    value=programmessage.indexOf("JavaScript",value+1)

}

console.log("Count of Javascript in the message is: "+count);






