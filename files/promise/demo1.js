
/*
    回调形式
*/

function doSomething() {
    return {
        then: function(callback) {
            var val = 21;
            callback(val);
        }
    }
}

doSomething().then(function(value) {
    console.log('Got a value:' + value);
});
  


