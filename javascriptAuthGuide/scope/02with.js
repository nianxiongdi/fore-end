


var obj = {
    name: 1
}


with (obj) {

    console.log(name)
    b = 1 // 

}


console.log(b) //1 不会添加到obj中
console.log(obj.b) // undefined
