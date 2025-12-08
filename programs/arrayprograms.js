var marks=[85,98,94,70];
//let a=true;
console.log("Array Programs at start");
//console.log(typeof(a));
console.log(marks);
console.log(marks[0]);

console.log(marks.length);

marks.push(99);
console.log("Array Programs after push");
console.log(marks);
console.log(marks.length);

marks.pop();
console.log("Array Programs after pop");
console.log(marks);

marks.unshift(56);
console.log("Array Programs after unshift");
console.log(marks);
let sum=0;
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
    sum=sum+marks[i];
}
console.log("Sum is "+sum);
console.log("Average is "+sum/marks.length);
console.log(Math.round(sum/marks.length));

///console.log(marks[1]);
//console.log(marks[2]);
//console.log(marks[3]);

console.log("Array Programs at end");