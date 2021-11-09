let add = function(num1,num2){
    return num1+num2;
}  
let multiply= function(num1,num2){
    return num1*num2;
}  
let calc= function (num1,num2,callback){
    console.log(callback(num1,num2));
}  
calc(2,3,add);
calc(2,3,multiply);

//callback syncronous
function Gurukul(){
    console.log("I am from Navgurukul");
}  
function Nav(callback){
    console.log("I am muskan valmikee");
    callback();
}
Gurukul(Nav); 

//callback asyncronous
function Gurukul(){
    console.log("I am from Navgurukul");
}
function Nav(callback){
    console.log("I am muskan valmikee");
    callback();
}
Nav(Gurukul);

//by using setTimeout asyncronous callback
function callback(){
    console.log("hi from callback after 1 second")
}
setTimeout(callback, 1000)
  
const tenSecondsLater = () => console.log('10 seconds passed!')
setTimeout(tenSecondsLater, 10000)
console.log('Start!')