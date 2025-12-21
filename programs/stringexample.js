let student="All students are doing good ";

let studenemailid="allstudents@gmail.com@yahoo.com@apple.com";

console.log(typeof(student));

console.log("Length of the string is: "+student.length);

console.log(student.trim().length);

student.slice(4);
console.log("Slice method output: "+student.slice(4,16));

let fin=studenemailid.split("@");
console.log(fin[0]);
console.log(fin[1]);
console.log(fin[2]);
console.log(fin[3]);

let statement="JavaScript is the most popular language, JavaScript is used for web development, backend development, mobile app development, game development etc.";
console.log(statement.indexOf("JavaScript"));

// to find occurence of JavaScript in above statement

let count =0;
let value=statement.indexOf("JavaScript")

while(value!==-1){
    count++;
    value=statement.indexOf("JavaScript",value+1);
}

console.log("JavaScript occured "+count+" times");
//aeiou - vowels 
let str="javascript";

console.log(str.charAt(4));
let vowelcount=0;
for(let i=0;i<str.length;i++){
    let ch=str.charAt(i);
    if(ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'){
        vowelcount++;
    }
}
console.log("Vowel count is: "+vowelcount);

let vo=0;
for(let ch of str){
  if ("aeiou".includes(ch)){
    vo++;
  }
  
}
console.log("Vowel count using includes shortcut method: "+vo);

let someString="Hello World";
console.log(someString.length);
let spacecount=0;
if(someString.includes(" ")){
 spacecount++;
}
let actualcharactesrs=someString.length-=spacecount;
console.log("Actual characters without spaces: "+actualcharactesrs);
let counter=0;
for(let ch of someString){
    if(ch!=' '){
        counter++;
    }
}
console.log("Actual characters without spaces using loop: "+counter);