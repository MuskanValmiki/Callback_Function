function greeting(name) {
    console.log('Hello ' + name);
  }
  
function processUserInput(callback) {
    var user = require("readline-sync");
    var name = user.question('Please enter your name.');
    callback(name);
  }
  
processUserInput(greeting);




const perOne =(frnd,callfrnd) =>{
    console.log(`I am busy rigth now. I am talking to ${frnd} .I will call you back`);

}
const perTwo = ()=>{
    console.log(`Hey whatsapp .I will call you back`);
    callfrnd()

}
perOne ("Megha",perTwo);


const add = (value)=>{
    console.log("Hey i am busy")
    value() 
}

const sub =()=>{
    console.log("Now we can talk")

}
add(sub)


const demo =()=>{
    console.log("nope")
   
}
const fun = (arg)=>{
    console.log("wiggle out")
    arg()

}
fun(demo)