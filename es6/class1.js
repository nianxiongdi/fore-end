function MyConstructor() {
    console.log(new.target === MyConstructor)
    // 方式1
    if (new.target) {
      console.log('Function was called with new keyword.');
    } else {
      console.log('Function was called as a regular function.');
    }

    // 方式2
    if ((this instanceof MyConstructor)) {
        console.log('Function was called with new keyword.');
    }else {
        console.log('Function was called as a regular function.');
    }
    
  }
  
  MyConstructor(); // 输出: Function was called as a regular function.
  MyConstructor.call({}, {}) // 输出: Function was called as a regular function.
  new MyConstructor(); // 输出: Function was called with new keyword.

  