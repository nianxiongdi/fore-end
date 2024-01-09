


let obj = {
  name: '123',
  obj: {
    age: () => {},
    name: 123
  }
}

const deepProxy = (obj, handler) => {
  const createProxy = (target) => {
    if (typeof target === 'object' && target !== null) {
      for (let key in target) {
        target[key] = createProxy(target[key]);
      }
      return new Proxy(target, handler);
    } else {
      return target;
    }
  };

  return createProxy(obj);
};

const handler = {
  get(target, key) {
    console.log(`访问属性：${key}`, target);
    return Reflect.get(target, key);
  },
  set(target, key, value) {
    console.log(`设置属性：${key} = ${value}`);
    return Reflect.set(target, key, value);
  },
  deleteProperty(target, key) {
    console.log(`删除属性：${key}`);
    return Reflect.deleteProperty(target, key);
  }
};

const proxiedObj = deepProxy(obj, handler);

// proxiedObj.name; // 访问属性：name  输出：'123'
// proxiedObj.obj.age; // 访问属性：age  输出：18

// proxiedObj.name = '456'; // 设置属性：name = '456'
// proxiedObj.obj.age = 20; // 设置属性：age = 20

proxiedObj.obj.age()

// delete proxiedObj.name; // 删除属性：name
// delete proxiedObj.obj.age; // 删除属性：age


