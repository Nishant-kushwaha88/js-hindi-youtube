// for of

const arr=[1,2,3,4,5]

for (const val of arr) {
   // console.log(val);
    
}

const greetings="Hello world!"
for (const num of greetings) {
    //console.log(greetings);
    //console.log(`Each char is ${num}`);
    
    
}


// Maps

const map=new Map()
map.set('IN', "india")
map.set('USA', "America")

console.log(map);

// for (const [key, value] of map) {
//    // console.log(key, ':-', value);
    
// }

const obj={
    'game1': 'NFS',
    'game2': 'Spiderman'

}

for (const [key, value] of obj) {
    console.log(key, ':-', value);
    
}