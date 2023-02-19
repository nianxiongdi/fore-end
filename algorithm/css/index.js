






async function fun(){
    return Promise.reject('1213')
}


fun()


console.log(123)


setTimeout(()=>{
    console.log('aa')
}, 10000)