// array to find even numbers
var marks=[90,95,85,98,92,70]

// using reduce methods

let sum=0;
for(let i=0;i<marks.length;i++){
    console.log("Marks at index "+i+" is "+marks[i]);
    sum+=marks[i];//sum=sum+marks[i];
}
console.log("Total Marks using for loop: "+sum);

let totalMarksReduce=marks.reduce((total,mark)=>total+mark,0);
console.log("Total Marks using reduce methods: "+totalMarksReduce);



console.log("numbers which are even are ");
for(let i=0;i<marks.length;i++){
    if(marks[i]%2==0){
        console.log(marks[i]);
    }
}

// using filter method to find even numbers
console.log("print value based on filter method")
console.log(marks.filter((marks)=>marks%2!=0));