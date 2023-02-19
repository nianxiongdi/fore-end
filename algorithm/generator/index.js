// var g = function* () {
//     const a = yield 1;
//     console.log(a)
//     yield 2;
//   };


//   g1 = g()
   


// console.log(  g1.next())
// console.log(g1.next(111))
// console.log(g1.next())

// yield后面的语句也会执行
function* gen() {
    console.log(this)
    yield 'a';
    yield 'b';
    console.log(1)
    return 'The result';
  }


g1 = gen()


g1.next()
g1.next()
g1.next()
  