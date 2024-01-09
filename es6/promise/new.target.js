


function fun () {
    if (!new.target) {
        throw new Error('必须使用new调用')
    }
    console.log('new call')
}


new fun()