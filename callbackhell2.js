const rollno=()=>{
    setTimeout(()=>{
        console.log("api getting roll no")
        let roll=[1,2,3,4]
        console.log(roll)
        setTimeout(()=>{
        },2000)
    },2000)
}
rollno();
// callback hell

function mail(){
    console.log("mail in your gmail check once.")
}
function msg(){
    console.log("msg send you in your whatsapp.")
}
function allFunction(){
    mail();
    setTimeout(()=>{
        msg();
    },1000)
}
allFunction();
//callback hell 