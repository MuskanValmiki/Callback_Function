function callback(){
    console.log("hi from callback after 1 second")
}
setTimeout(callback, 1000)
// it is a asynchronous callback function

const tenSecondsLater = () => console.log('10 seconds passed!')
setTimeout(tenSecondsLater, 10000)
console.log('Start!')
// it work like asynchronous because of setTimeout