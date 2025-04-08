const coding=["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val) {
//     console.log(val);
    
// })

// coding.forEach( (val) => {
//     console.log(val);
    
// })

// function printMe(val){
//     console.log(val);
    
// }

// coding.forEach(printMe)

// coding.forEach( (val,index, arr)=> {
//     console.log(val,index, arr);
    
// } )

const myCoding=[
    {
        language:"javaScript",
        languageFileName:"js"
    },
    {
        language:"java",
        languageFileName:"java"
    },
    {
        language:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((val) =>{

    console.log(val.language);
    
})