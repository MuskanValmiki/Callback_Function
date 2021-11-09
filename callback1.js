function Gurukul(){
    console.log("I am Navgurukul");
} 
function Nav(callback){
    console.log("I am Nav");
    callback();
}
Nav(Gurukul);
// here we call first function in second function as a argument

let calc= function (num1,num2,calcType){ 
    if (calcType=="add"){
        return num1+num2;
    }
    else if(calcType =="multiply"){
        return num1*num2;
    }
}
console.log(calc(2,3,"add"));
// here we made calculater 

let add = function(num1,num2){
    return num1+num2;
}
let multiply= function(num1,num2){
    return num1*num2;
}
let calc_= function (num1,num2,callback){
    console.log(callback(num1,num2));
}
calc_(2,3,add);
calc_(2,3,multiply);
// here also we create a calculater 