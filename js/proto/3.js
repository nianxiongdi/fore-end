Function.prototype.a = () => {
    console.log(1);
  }
  Object.prototype.b = () => {
    console.log(2);
  }
  function A() {}
  const a = new A();
  
  a.a(); // 1


  // a.__proto__ === A.prototype

  A.prototype.__proto === Object.prototype 

  a.b(); // 2


  A.a(); // 1 A.__proto === Function.prototype 
  A.b();// 3 Function.prototype.__proto === 
  