let a=100
// const b=20
// var c=30

if(true){
    let a=10
    const b=20
    var c=30
   // console.log("INNER:", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="Hitesh"

    function two(){
        const website="Youtube"
        console.log(username);
    }
   // console.log(website);
    two()
}
//one()

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website=" youtube"
       // console.log(username + website);
        
    }
    //console.log(website);
    
}

//console.log(username);


//++++++++++++++++++++++   interesting 


function addone(num){
    return num+1;
}
console.log(addone(2))

const addTwo=function(num){
    return num+2
}

console.log(addTwo(5));
