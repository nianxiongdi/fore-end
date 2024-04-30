// fn main() {
//     let even = 2;
//     let isEven = if even%2 == 0 {
//         true
//     } else {
//         false
//     };


//     println!("{}", isEven)
// }

// fn main() {
//     let s1 = String::from("hello");
//     let s2 = s1;
 
//     println!("{}, world!", s1);
// }
 
 
// fn main() {
    
//     let x = 1;

//     fn fun() {
//         println!("{}", x);
//     }
//     fun();
// }


// fn main() {
//     let closure = || {
//         println!(">> this is fun.")
//     };

//     closure();


//     let add = |x: u32| -> u32 { x+ 1};

//     let add3 = |x: u32| { x+ 1};

//     let add5 = |x: u32| x+ 1;


//     println!("{}",  add(1));
//     println!("{}", add3(3));
//     println!("{}", add5(3));
// }

fn main() {
    let data = vec![1, 2, 3, 4, 5];

    // 闭包捕获 data 变量的所有权
    let closure = move || {
        // 在闭包中使用 data 变量
        for num in data {
            println!("{}", num);
        }
    };

    // 尝试使用 data 变量（编译错误）
    println!("{:?}", data);

    // 调用闭包
    closure();
}





 
  
  
//   https://kaochenlong.com/2023/09/27/lifetime-in-rust.html
// https://zhuanlan.zhihu.com/p/604998484
// https://juejin.cn/post/7310395637470986291
// https://juejin.cn/post/7226696723359236133
// https://www.nowcoder.com/discuss/514613860209385472

// https://play.rust-lang.org/?version=stable&mode=debug&edition=2021

// https://rustmagazine.github.io/rust_magazine_2021/chapter_1/rustc_part1.html