function fibonacci(){
let a=0;
let b=1;
let n=9;

console.log(a);
console.log(b);

for(let i=1;i<=n-2;i++){
    let c=a+b;
    console.log(c);
    a=b;
    b=c;
}
}

fibonacci();
fibonacci();






