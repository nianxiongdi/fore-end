function test() {
    var num = [];
    var i;
    for (i = 0; i < 10; i++) {
      num[i] = function() {
        console.log(i);
      };
    }
    return num[9];
  }


  console.log(test()());
  