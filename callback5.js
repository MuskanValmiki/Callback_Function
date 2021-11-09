async function fun(){
    let a=await("i win go kanpur");
    return a
}
console.log(fun())
//it will wait becuase we use await

async function fun(){
    let a=("i win go kanpur");
    return a

}
console.log(fun())
//it gave output 'i will go kanpur'
