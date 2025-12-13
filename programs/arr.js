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
//marks.pop();
//marks.pop();
console.log(marks);


marks.unshift(99);
console.log(marks);
let sum=0;
for(let i=0;i<marks.length;i++){
    console.log("Marks at index "+i+" is "+marks[i]);
    sum+=marks[i];//sum=sum+marks[i];
}
console.log("Total Marks using for loop: "+sum);




let totalMarksReduce=marks.reduce((total,mark)=>total+mark,0);
console.log("Total Marks using reduce methods: "+totalMarksReduce);

let avg=sum/marks.length;
console.log("Average Marks: "+avg);

console.log(marks.includes(90))

console.log(marks.includes(91))

console.log(marks.indexOf(70))