const addOne = (name) => name + ' friend'
console.log(addOne('somi'));
console.log(addOne('muskan'));
console.log(addOne('samridhhi'));
console.log(addOne('ruchi'));
// this is synchorouns callback function

let numbers=[1,2,4,7,3,5,6];
function isodd(number){
    return number%2;
}
const oddnumbers=numbers.filter(isodd);
console.log(oddnumbers);
// it gave us odd numbers and it synchorouns callback function

function fun1(){
    console.log("i am from up")
}
function fun2(callback){
    console.log("hii")
    callback()
}
fun2(fun1);
//callback asyncronous 