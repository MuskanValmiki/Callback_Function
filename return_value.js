// Create a function that accepts another function as an argument
const callbackWaalaFunction = (fn) => {
    return fn("kumar", 24, "chocolates")
  }
 const callback = (arg1, arg2, arg3) => {
    return "My name is "+arg1+" and I am "+arg2+"years old"+". I like "+arg3
  }

 const result = callbackWaalaFunction(callback)
 console.log(result) 