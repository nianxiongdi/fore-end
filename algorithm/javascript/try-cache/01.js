

function fun1(i){
    console.log(i) 
}
function test3 (){
    try {
        return fun1(1)
    } finally {
        return fun1(2)
    }
}

test3() // 1

/*
    1
    2
*/


