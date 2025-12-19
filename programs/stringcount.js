let programmessage="Hello Sandeep, welcome to the JavaScript world. JavaScript is very popular language. Enjoy learning JavaScript! JavaScript"
let count=0
let value=programmessage.indexOf("JavaScript");
while(value!==-1){
    count++
    value=programmessage.indexOf("JavaScript",value+1)

}

console.log("Count of Javascript in the message is: "+count);