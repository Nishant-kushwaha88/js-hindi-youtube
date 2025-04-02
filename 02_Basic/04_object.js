//const tinderUser=new Object() this is a singleton object
//const tinderUser={}   this is non singleton object

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false 

//console.log(tinderUser);

const regularUser={
    email:"Some@gmail.com",
    fullname:{
        userfullname: {
        firstname:"hitesh",    
        lastname:"choudhary",
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}

//const obj3={obj1, obj2}
const obj3=Object.assign({}, obj1, obj2)
//console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLogged'));


// +++++++++++++++++++++++++++++


const course={
    coursename:"Js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: Instructor}=course
console.log(Instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price":"free",
// }

[
    {},
    {},
    {},
]





