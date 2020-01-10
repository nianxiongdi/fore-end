
/*
    回调形式
*/

function Promise(fn) {
    var callback = null;
    this.then = function(cb) {
        callback = cb;
    }

    function resolve(val) {
         // 将 callback 打出当前执行线程，使之可以被 then 函数设定
        // callback(val);  callback is not a function
        setTimeout(function() {
            callback(val);
        }, 1);
    }
    fn(resolve);
}
function doSomething() {
    return new Promise(function(resolve) {
      var value = 42;
      resolve(value);
    }).then(e=>console.log(e));
}

  
// doSomething().then(function(resolve) {
//     var val = 10;
//     resolve(val);
// });
  
doSomething()

