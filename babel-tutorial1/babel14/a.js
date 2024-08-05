// const fn = () => {};

// new Promise(() => {});

// class Test {}

// const c = [1, 2, 3].includes(1);
// var a = 10;



class Stu {
    #p = 1;
    #m() {
      console.log('hello');
    }

    // 静态属性 通过_classs.displayName访问
    static displayName = "Point";
    // 静态方法 通过_classs.getThis访问
    static getThis() {
        return this 
    }

    // 构造函数
    constructure(name, radius){
        this.name = name
        this.radius = radius
    }
  
  	getPrivacyP () {
      return this.#p
    }
	
  	setPrivacyP () {
      this.#p = 1
    }
  
    // 实例方法 通过 new _class().getName()访问
    getName() {
    }

    get radius() {
        return this._radius;
    }
    
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        } else {
            console.error('Radius must be greater than 0.');
        }
    }
}

let stu = new Stu()

stu.#p 