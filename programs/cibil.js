
const prompt = require('prompt-sync')();

const cibilscore =prompt("enter your cibil score  ");
if(cibilscore >=750){
    console.log("YOu should get car loan");
}
else if(cibilscore>=700 && cibilscore<750){
console.log("You have chances of getting car loan");
} 
else if(cibilscore>=600 && cibilscore<700){
    console.log("You have less chances of getting car loan");
}
else{
    console.log("You should not get car loan");
}