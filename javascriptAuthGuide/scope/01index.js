

function foo(str, a) { 
    console.log(b)
    eval( str ); // 欺骗！ 
    console.log( a, b ); 
}

var b = 2; 

foo( "var b = 3;", 1 ); // 1, 3



console.log(b);
