



for (var i=0; i< 10; i++) {
    console.log(i)
}


console.log('==========');
console.log(i)

console.log('==========');

var foo = true;
console.log(bar); // var的时候 这里不会报错  let的时候会报错，形成块级作用域
if (foo) {
  var bar = foo * 2; 
  console.log( bar ); 
}


console.log(bar);