const user={
    username:"Hitesh",
    price:999,
    welcome: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcome()
// user.username="Rahul"
// user.welcome()

// console.log(this);

// function chai(){
//     let username="satya"
//     console.log(this);
    
// }

// chai()

// const chai= function () {
//     let username="Hitesh"
//     console.log(this.username);
// }

// const chai= function () {
//     let username="Hitesh"
//     console.log(this.username);
// }
// chai()



// const chai = () => {  //this is known s arrow function
//     let username="Hitesh"
//     console.log(this);
// }
// chai()

const chai = () => {  //this is known s arrow function
    let username="Hitesh"
    console.log(this);
}
//chai()

// const addTwo=(num1, num2) => {
//     return num1+num2
// }

const addTwo=(num1, num2) => num1+num2

console.log(addTwo(3,5));







