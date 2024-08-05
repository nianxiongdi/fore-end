function createInstanceFactory3<T>
  (promiseFunc2: new (...args: any[]) => T): T {
  return new promiseFunc2()
}
let promise3 = createInstanceFactory<Promise>(Promise);
promise3.buy()
