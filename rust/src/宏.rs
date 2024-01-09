extern crate rust;
use rust::log_attr;
use rust::make_hello;
use rust::Hello;

make_hello!(world);
make_hello!(张三);

#[log_attr(struct, "world")]
struct Hello{
    pub name: String,
}

#[log_attr(func, "test")]
fn invoked(){}


#[derive(Hello)]
struct World;

fn main() {
    // 使用make_hello生成
    hello_world();
    hello_张三();
}