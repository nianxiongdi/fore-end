function processInput(x: number): void;
function processInput(x: string): void;
function processInput(x: number | string): void {
    if (typeof x === "number") {
        console.log("Received a number:", x);
    } else {
        console.log("Received a string:", x);
    }
}

processInput(10); // 调用第一个重载版本
processInput("hello"); // 调用第二个重载版本


let obj = {
    name: 'qy',
    age: 18
  }

  obj.a = 1