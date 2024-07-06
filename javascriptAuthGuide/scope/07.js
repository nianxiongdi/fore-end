
var test = (function() {
    var num = 0;
    return () => {
      return num++;
    };
  })();
  for (var i = 0; i < 10; i++) {
    test();
  }
  console.log(test());
  

  // https://segmentfault.com/u/guizimo
  // https://medium.com/@mohdtalib.dev/execution-context-in-javascript-ca6b0eca15ab
  // 

  // https://medium.com/@adarshrai3011/53-javascript-frontend-interview-questions-e6013116eaa0