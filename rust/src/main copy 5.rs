// fn main() {
//     let some_value = Some(5);

//     // 使用 if let 处理 Option 类型
//     if let Some(value) = some_value {
//         println!("Got a value: {}", value);
//     } else {
//         println!("Got nothing!");
//     }

//     let result: Result<i32, &str> = Ok(10);

//     // 使用 if let 处理 Result 类型
//     if let Ok(value) = result {
//         println!("Got a value: {}", value);
//     } else {
//         println!("Got an error!");
//     }
// }


mod abc;

use abc::print_abc;


use std::fs::File;

use std::net::IpAddr;
// https://www.yuque.com/zhaocchen/fbyzbp/gucwut#TRPUg
fn main () {
    // print_abc();
    // crate::print_abc()

    // let ip:IpAddr = "123.12.12.1".parse().unwrap();
    let ip:IpAddr = "123.12s.12.1".parse().expect("sss");
    println!(">>> err {}", ip);

    // let f = File::open("1.txt");

    // let f = match f {
    //     Ok(file) => file,
    //     Err(e) => {
    //         // println!(">>> err {:?}", e);
    //         println!("Failed to open file: {:?}", e);
    //         // panic!(">>> {:?}", e);
    //         return ;
    //     }
    // };
    // println!(">>> err");

}
