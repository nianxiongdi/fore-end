



// const {
//     SyncHook,
//   } = require('./index');

const {
    SyncHook,
  } = require('tapable');
  
  // SyncHook 里面是参数
  const syncHK = new SyncHook(['name', 'age'])
  
  syncHK.tap('plugin1', (name, age) => {
    console.log('>> plugin1', name, age)
  })
  
  syncHK.tap('plugin2', (name, age) => {
    console.log('>> plugin2', name, age)
  })
  
  syncHK.call('qy', 18)
  