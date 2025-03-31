const name="Satyam"// 1st method hai string ko declare karne ka
const repoCount=50

console.log(name + repoCount +" Value");

console.log(`Hello my name is ${name} and my repo is ${repoCount}`);


const gameName=new String('Rahul-Bh')
console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toLowerCase());

console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf('h'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-6,4)
console.log(anotherString);

const twoString="   satya    "
console.log(twoString);
console.log(twoString.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('name'));
console.log(gameName.split());










