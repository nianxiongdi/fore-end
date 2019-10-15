## 单例模式

* 只能创建一个实例

`实例1`:
```js
    function A(name){
	    // 如果已存在对应的实例
	   if(typeof A.instance === 'object'){
	       return A.instance
	   }
	   //否则正常创建实例
	   this.name = name
	    
	   // 缓存
	   A.instance =this
	   return this
	}
	var a1 = new A()
	var a2= new A()
	console.log(a1 === a2)//true
```

`例子2`:

```js
	class Storage {
        constructor(name) {
            this.instance = null;
        }
        static getInstance(){
            if(!this.instance) {
                this.instance = new Storage();
            }
            return this.instance;       
        }
        setItem = (key, value) => localStorage.setItem(key, value);
        getItem = key => localStorage.getItem(key)
    }
    
    const storage = Storage.getInstance();
    console.log(storage == storage1);
```