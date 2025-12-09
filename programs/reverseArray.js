let originalAr = [1, 2, 3, 4, 5];
//using inbuild array reverse method
//originalAr.reverse();
//console.log(originalAr); 

// //function to reverse an array without using inbuild reverse method
// for(let i=originalAr.length-1;i>=0;i--){
//     console.log(originalAr[i]);
// }


//even numbers in an array
let arr=[1,2,3,4,5,6,7,8,9,10];
let evenNumbers=[];
for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 === 0){
        evenNumbers.push(arr[i]);
    }
}
console.log(evenNumbers);

// odd numbers in an array
let oddNumbers=[];
for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 !== 0){
        oddNumbers.push(arr[i]);
    }   
}
console.log(oddNumbers);