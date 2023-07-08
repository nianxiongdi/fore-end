



// class Fun {

//     get() {
//         return 1
//     }


//     for() {
//         return 2
//     }
// }



// const fun  = new Fun()

// console.log(fun.call.for);


const {
    SyncHook,
    HookMap
} = require("tapable");
  


const keyedHook = new HookMap(key=>new SyncHook(['name']));
keyedHook.for('key').tap('plugin2',(name)=>{console.log(2,name);});

const hook = keyedHook.get('key');
console.log(hook  );