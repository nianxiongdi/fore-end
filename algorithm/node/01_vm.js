let a = 1;
// _this = eval
function f() {
  let a = 2;

  eval('console.log(a)'); // 2
}

f();
