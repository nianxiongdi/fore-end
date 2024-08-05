interface Customer {
    custname:string
    buymoney:number
}

type custFuncType = (cust:Customer)=>string // 函数类型

// 1. infer 出现在 extends 条件语句后的函数类型的参数类型位置上

type inferType<T> = T extends (params:infer P) => any ? P : T;
type inferResultType = inferType<custFuncType>


//  2. infer 出现在 extends 条件语句后的函数类型的返回值类型上

type inferType1<T> = T extends (params:any) => infer P ? P : T;
// type inferType1<custFuncType> = (cust:Customer) => string extends (params:infer P)=>any ? P : T;
type inferResultType1 = inferType1<custFuncType>


// 3. infer 出现在 类型的泛型具体化类型上
class Subject{
    constructor(public subid:number,public subname:string){}
}

let chineseSubject = new Subject(100,'语文');
let mathSubject = new Subject(101,'数学');
let englishSubject = new Subject(102,'英语');

let setZhangsanSubject = new Set<Subject>([chineseSubject,mathSubject,englishSubject]);
type ss = typeof setZhangsanSubject;
type ElementOf<T> = T extends Set<infer E> ? E : never;

// 将 string 分配给了 result 在这里，E 是 Set<string> 中的 string ，所以 result 类型推断为 string
let result:ElementOf<Set<string>>

export {}
