const sum_ = ()=>{
    a = 6
    b = 9
    res = a+b
    console.log(`${res} Is a total of ${2} and ${b}`)
    // return `The sum of ${a} and ${b} is ${res}`
}

const multi = (value) =>{
    var mul = 5*2
    console.log(`Its a multiply ${mul}`)
    value()
}
multi(sum_)

// call back asynchrounous


const sum_ = ()=>{
    a = 6
    b = 9
    res = a+b
    console.log(`${res} Is a total of ${2} and ${b}`)
    // return `The sum of ${a} and ${b} is ${res}`
}

const multi = (value) =>{
    var mul = 5*2
    value()
    console.log(`Its a multiply ${mul}`)
}
 
multi(sum_)

// synchrounous