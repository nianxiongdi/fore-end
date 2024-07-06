
// 知道是不是支持严格模式，还不够，我们还要知道我们是不是处于严格模式下。
var isStrict = function(){
  console.log(this)
  return this === undefined;
}


function fun () {
  "use strict";
  console.log(this);
  console.log(isStrict());
}


fun()
