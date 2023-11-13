fn main() {

    // // let  a= 5;
    // let guess: i32  = "42a".parse().expect("Not a number!");
    // // println!(">>> a = {}", a);

    // println!(">>> {}", guess)

    let a = 5;
    let b:i32 = 5;

    // 十六进制	
    let c  = 0xff;

    // 浮点型
    let d = 2.0;
    let e:f32 = 2.0;
    let f:f64 = 2.0;

    let g = 5 + 10;

    // boolean
    let h = true;
    let i: bool = false; // with explicit type annotation

    let j = 'z';

    // 元组类型
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    println!(">>> {}", tup.0); // 500
    println!(">>> {}", tup.1);// 6.4
    println!(">>> {}", tup.2); // 1
    let tup = (500, 6.4, 1);
    let (x, y, z) = tup;
    println!("The value of y is: {}", y);


    // 数组类型
    // 格式 [类型, 长度]
    let a = [1, 2, 3, 4, 5];

    let a: [i32; 5] = [1, 2, 3, 4, 5];
    a[0]; // 访问
}


