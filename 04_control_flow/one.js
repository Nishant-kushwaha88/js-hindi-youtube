//if first control flow

const isUserloggedIn=true;
const temperature=40;

// if(temperature===40){
//     console.log("Less then 50"); 
// }else{
// console.log("Greater then 50");
// }


// <, >, <=, >=, ==, !=, ===, !==

// const score=200

// if(score>100){
//     let power="fly"
//     console.log(`User power: ${power}`);   
// }

// console.log(`user power: ${power}`);

//const balance=1000
// if(balance>500) console.log("test"), console.log("test2");  yee likh skate hai but yee galat tarika hai

// if(balance<500){
//     console.log("Less than 500");
// }else if(balance<750){
//     console.log("Less than 750");
// }else if(balance<900){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
    
// }

const userLoggedIn=true
const debitCard=true
const loggedInGoogle=true
const loggedInEmail=false

if(userLoggedIn && debitCard && loggedInGoogle){
    console.log("Allow to buy cources");
    
}

if(loggedInEmail || loggedInGoogle){
    console.log("User log in");
}

