/**
 * 构建单间设计模式：
 *  1. 把构造器设置为私有的，不允许外部来创建类的实例
 *  2. 至少应该提供一个外部访问属性或方法，外部可以通过这个方法或属性来得到一个对象，
 *      所以应该把这个方法设置为静态方法
 *  3. 外部调用第二部提供的静态方法来获取一个对象
 */

class MyLocalStorage {
  // 静态属性
  static localStorage: MyLocalStorage;
  private constructor() {}

  // 提供外部可以访问的方法
  // 1. 带static关键字的方法是静态方法
  // 2. 静态方法和对象无关，外部的对象不能调用静态方法和静态属性
  // 3. 外部可以通过类名来调用
  // 4. 静态方法不可以访问实例属性或实例方法

  public static getInstance() {
    if (this.localStorage) {
      return this.localStorage;
    }
    return new MyLocalStorage();
  }
  // 保存 key-value
  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string) {
    let value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }
}

export default MyLocalStorage;
