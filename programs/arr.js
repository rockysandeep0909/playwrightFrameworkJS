let a=true;

console.log(typeof(a));

var marks=[90,95,85,98,90,70]

console.log(marks);
console.log(marks[2]);
console.log(marks.length);

marks.push(88);
console.log(marks);

marks.pop();
console.log(marks);
marks.pop();
marks.pop();
console.log(marks);


marks.unshift(99);
console.log(marks);

for(let i=0;i<marks.length;i++){
    console.log("Marks at index "+i+" is "+marks[i]);
}

marks[1]=35;
console.log(marks);