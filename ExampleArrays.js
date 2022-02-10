//slice
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var sliceCheck = fruits.slice(1, 4); 
console.log(sliceCheck);

//Splice
var fruits1 = ["Banana", "Orange", "Apple", "Mango"];

var spliceCheck=fruits1.splice(2, 1, "Lemon", "Kiwi");
console.log(spliceCheck);

//push and pop
var pushandpop = ["a", "b", "c", "d"];
pushandpop.push("e") 
var popdata=pushandpop.pop()
console.log(popdata);
//unshift and shift
var pushandpop = ["b", "c", "d"];
pushandpop.unshift("a")
var popdata1=pushandpop.shift()
console.log(popdata1);

//foreach loop
var foreachloop = ["a", "b", "c", "d"];

console.log("foreach loop-------------")

foreachloop.forEach(myfun)

function myfun(value,index) 
{
    console.log("value: "+value+" index: "+index)
}
//reduce
let emparr=[0,1,1,1] 

 let sum=0;

 for(let a of emparr){
     sum=sum+a;
 }


console.log("---reduce function-------")
var data=emparr.reduce(reducefunction) 

 function reducefunction(previousNumber,currentNumber){
     return previousNumber+currentNumber
 }

var data1=emparr.reduce((a,sum)=> a+sum,0)

console.log("Sum of array: "+data1);

//spread
var checkspred = ["Banana", "Orange", "Apple", "Mango"];

var newArray=[...checkspred]


function method1([first,second]){ 
    console.log(first,second)
}

function method2(...checkspred){ 
    console.log(checkspred[0])
}

method2(checkspred)

