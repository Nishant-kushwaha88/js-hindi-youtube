// singleton (ye apne tarah ka ek parkar ka object hai)
//Object.create (ye apne tarah ka ek parkar ka object hai)

// object literals
const mySym=Symbol("key1")
const Jsuser={
    "full name":"Hitesh Choudhary", // isko hamlog console.log(JsUser.full name) se access nahi kar payenge 
    // isko kewal hamlog console.log(Jsuser["full name"]); aise acces kar payenege

    [mySym] : "mykey1",
    name: "Hitesh",
    age: 18,
    location: "Jaipur",
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "sunday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);


Jsuser.email="Hitesh@chatgpr.com"
//Object.freeze(Jsuser)
Jsuser.email="Hitesh@micro.com"
//console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello Js User");
}

Jsuser.greetingTwo=function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());




