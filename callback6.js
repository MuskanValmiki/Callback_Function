//callback
function fun1(){
    console.log("I am from utter pradesh");
}
function fun2(callback){
    console.log("Hii i am muskan valmikee");
    callback()
}
fun2(fun1)
