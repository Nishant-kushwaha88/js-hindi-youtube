function sayMyName(){
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
    console.log("E")
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1+number2)
// }

    //addTwoNumber(3,4)

// function addTwoNumber(number1, number2){
//         let result=number1+number2
//         return result
//     }

// function addTwoNumber(number1, number2){
//         return number1+number2
//     }


//const result= addTwoNumber(3,5)
//console.log(result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage());


//++++++++++++++++++++++++

function calculateCartPrice(val1,val2,  ...nums1){
    return nums1
}
//console.log(calculateCartPrice(100,200,400,600));

const user={
    username: "hitesh",
    price:199
}


function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user)

handleObject({
    userName:"sam",
    price: 369
})

const myNewArray=[100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));





