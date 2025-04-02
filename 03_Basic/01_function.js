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

// function addTwoNumber(number1, number2){
//         let result=number1+number2
//         return result
//     }

function addTwoNumber(number1, number2){
        return number1+number2
    }


const result= addTwoNumber(3,5)
//console.log(result);

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage());




