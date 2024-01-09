use proc_macro::TokenStream;

extern crate proc_macro;

// 函数式宏
#[proc_macro]
pub fn make_hello(item: TokenStream) -> TokenStream {
    let name = item.to_string();
    let hell = "Hello ".to_string() + name.as_ref();
    let fn_name =
        "fn hello_".to_string() + name.as_ref() + "(){ println!(\"" + hell.as_ref() + "\"); }";
    fn_name.parse().unwrap()
}

// 属性宏 （两个参数）
// 编译期间会打印结构类型和参数，后面可用修改替换原属性定义。
// https://cloud.tencent.com/developer/article/1832788
#[proc_macro_attribute]
pub fn log_attr(attr:TokenStream, item:TokenStream)->TokenStream{
    println!("Attr:{}", attr.to_string());
    println!("Item:{}", item.to_string());
    item
}


// 派生宏
#[proc_macro_derive(Hello)]
pub fn hello_derive(input: TokenStream)-> TokenStream {
    println!("{:?}", input);
    TokenStream::new()  
    // 如果直接返回input，编译会报重复定义，说明派生宏用于扩展定义
    // input    
}

// #![allow(unused)]
// fn main() {
// mod front_of_house {
//     mod hosting {
//         fn add_to_waitlist() {}

//         fn seat_at_table() {}
//     }

//     mod serving {
//         fn take_order() {}

//         fn serve_order() {}

//         fn take_payment() {}
//     }
// }
// }
// // 默认是是 private
