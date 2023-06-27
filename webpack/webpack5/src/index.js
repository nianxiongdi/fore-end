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


btn.addEventListener("click", () => {
    import(/* webpackChunkName: "hello" */ "./title").then((result) => {
        console.log(result.default);
    });    
})