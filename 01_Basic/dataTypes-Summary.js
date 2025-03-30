//  Primitive data types are 7 => String,number, boollean ,null(Empty), undefined, Symbol, bigInt 

const score="100"
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

const bigNumber=1234564465464646684n




// Refernce data type (Non primitive) => Array, objects, Functions

const heroes=["Shaktiman", "naagraj", "Snjaysir"]
let myObj={
    name:"Hello",
    age:22,
}

const myFunction=function(){
    console.log("hello World");
    
}


//Kissi ka bhi dataTpe pata karne ke liye console.log(typeof ....)
console.log(typeof outsideTemp);


// study => https://tc39.es/ecma262/#sec-typeof-operator




