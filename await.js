function fun(){
    return "Muskan";
}
let variable=fun()
console.log(variable)//Muskan
// this is a normal function

async function fun(){
    return "Muskan";
}
let a=fun()
console.log(a);//Promise{"Muskan"}
// here it gave promise

async function fun(){
    return "Muskan";
}
console.log("before calling");
let b=fun()
console.log("after calling");
console.log(b);
console.log("last line of this js file");
// by using async ,it run like sync so it will gave output line by line 
// before calling
// after calling
// Promise { 'Muskan' }
// last line of this js file

async function fun(){
    console.log("inside the function");
    return "Muskan";
}
console.log("before calling");
let c=fun()
console.log("after calling");
console.log(c);
console.log("last line of this js file");
// if we console something inside the function body so it will gave output like this first it go and check ouside body any statement is there or not if there it will execute this then we check where we are calling the function after that it will go to function body and execute.
// before calling
// inside the function
// after calling
// Promise { 'Muskan' }
// last line of this js file

async function fun(){
    console.log("inside the function")
    const response=await fetch("https://api.github.com/users")
    console.log("before response")
    const users=await response.json()
    console.log("users resolved")
    return users;
}
console.log("before calling");
let d=fun()
console.log("after calling");
console.log(d);
d.then(data=>console.log(data))
console.log("last line of this js file");


async function getdata(){
    let str="I will go to Goa";
    return str;
}
console.log(getdata());
// async gave us promise in s function


function myfun(){
    console.log("inside function body")
}
console.log("start")
myfun()
console.log("end")
// this is a function flow howw it will work 

console.log("start")
setTimeout(()=>{
    console.log("inside the function body");
},2000);
console.log("end");
// it work like asynchronous

console.log("start");
const roll=[1,2,3,4,5,6];
roll.forEach((r)=>{
    console.log(r)
})
console.log("end");
// it is synchronous work