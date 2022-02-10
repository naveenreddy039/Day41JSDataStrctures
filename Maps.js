let  keyString='a string';
let keyObj={};
let keyFunc=function() {}

//Setting the values
let myMap=new Map()
myMap.set(keyString,"Value assosiated with 'a string");
myMap.set(keyObj,"value assosicated with keyObj");
myMap.set(keyFunc,"value assossiated with key FUNC");

// getting the values
let size=myMap.size;
let valstr=myMap.get(keyString);
let isKeyExist=myMap.get('a string');
console.log(size);
console.log(valstr);
console.log(isKeyExist);

for(let [key,value]of myMap)
console.log("Loops :"+key);

//UC1
let die=Math.floor(Math.random()*100)%7;
let die1=Math.floor(Math.random()*100)%7;
let die2=Math.floor(Math.random()*100)%7;
let die3=Math.floor(Math.random()*100)%7;
let die4=Math.floor(Math.random()*100)%7;
let die5=Math.floor(Math.random()*100)%7;
console.log(die);
console.log(die1);
console.log(die2);
console.log(die3);
console.log(die4);
console.log(die5);