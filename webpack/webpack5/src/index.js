// import a from "a";

// import("b").then(function(b) {
// 	console.log("b loaded", b);
// })

// function loadC(name) {
// 	return import("c/" + name);
// }

// Promise.all([loadC("1"), loadC("2")]).then(function(arr) {
// 	console.log("c/1 and c/2 loaded", arr);
// });


// btn.addEventListener("click", () => {
//     import(/* webpackChunkName: "hello" */ "./title").then((result) => {
//         console.log(result.default);
//     });    
// })


class Person {
    #name;
    constructor(name) {
      this.#name = name; // 错误：未定义私有字段
    }
  
    printName() {
      console.log(this.#name);
    }
}


const p = new Person()

// p.#name