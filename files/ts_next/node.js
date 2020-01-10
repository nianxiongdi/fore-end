


// each({}|[],function(key,value){})

/*
function each(obj, fun){
  if(obj instanceof Array){
    for(let i=0;i<obj.length; i++){
      fun.call(this, i, obj[i]);
    }
  }else if(obj instanceof Object) {
    Object.keys(obj).forEach(key=>{
      fun.call(this, key, onj[key]);
    })
  }
}


const arr = [32,123,321,21,3,6];

each(arr, function(key, value){
  console.log(key, value)  
})
*/


// var obj = new Proxy([2,3,4], {
//   get: function(target, key) {
//     // console.log(receiver);
//     return target[key];
//   },
//   set: function(target, key, value) {
//     console.log(target, key, value);
//     return 4;
//   }
// });

// console.log(obj[0]);
// obj[0]  = 7;
// console.log(obj[0]);







// const {name: myName} = {name: '的分身乏术'};
// console.log(name)


// let a = {name: 'j'};
// let b;
// b =a;
// a.name = 'tom';
// console.log(b.name)


// var test1 = new function(){return 'test1'};
// var test2 = new function(){return 'test2'};

// console.log(test1.constructor)
// console.log(test2.constructor)

for(item of [1,2,3]) {
  break;
}
console.log(1);


// function flat(arr){
//   var result = [];
//   var each = function(arr){
//     arr.forEach(item => {
//       if(item instanceof Array){
//         each(item)
//       }else {
//         result.push(item);
//       }
//     });
//   }
//   each(arr);
//   return  result;
// }


// var test = [1,2,3,[2,[1222,3]],3,];

// console.log(flat(test))


/*
function flat(arr){
  var toString = ''; // 1
  Array.prototype.toString = function(){
    return this.join(','); //2
  }
  var result = arr.toString();
  Array.prototype.toString = function(){ return this.split(',') }; //3
  return result;
}


var test = [1,2,3,[2,[1222,3,[4,5]]],3,];

console.log(flat(test))
  
for(item of {name: 123}){
 console.log(item) 
}

*/

/*
function parseString(str, obj) {
  Object.keys(obj).forEach(key => {
    // str = str.replace(new RegExp(`{{${key}}}`,'g'), obj[key]);
    // str = str.replace(/`\$\{${key}\}`/g, obj[key])
    str = str.replace(new RegExp(`\{${key}\}`,'g'), obj[key]);
  });
  return str;
}
// const str = "{{name}}很厉name害{{name}}，才{{age}}岁";
const str = "{name}很厉name害{name}，才{age}岁";
const obj = { name: "qy", age: "18" };

console.log(parseString(str, obj));


function runTemplate(stringTemplate, row = {}) {
  return eval("`" + stringTemplate + "`");
}
console.log(runTemplate("年龄:${row.age}", { age: 20 })); // "年龄:20"
// 去除括号
// "${}${}${}".replace(/\$({)/g,function($, $1){return $1;})
*/


// 循环设置延时函数的输出结果，


for(var i=0; i<10; i++){
  setTimeout(function(i){
    console.log(i);
  }, 1000);
}

