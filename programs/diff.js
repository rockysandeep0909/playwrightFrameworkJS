// var - can be re-assigned and re-declared

function varExample(){
    var x=20;
    console.log(x); //20
    
        var x=30; // re-declared and re-assigned
        console.log(x); //30


        if(true){
            var x=40;
            console.log(x); //40
        }
    console.log(x); // 20,30,40,40
}

function letExample(){
    let y=20;
    console.log(y); //20
    
        y=30;
        console.log(y);
        
        y=50;
        console.log(y); //50

        if(true){
            let y=40;
            console.log(y); //40
        }
    console.log(y); //20,30,50,40,50
    
}

function constExample(){
    const z=3.14;
    console.log(z); //3.14
    // z=60; // re-assigned not allowed
    // console.log(z); 



    if(true){
            const z=40;
            console.log(z); //40
        }
        console.log(z); 
}

//varExample();
//letExample();
constExample();


