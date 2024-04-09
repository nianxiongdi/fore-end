macro_rules! multiply {
    ($x:expr, $y:expr) => {
        $x * $y
    };
}

fn main() {
    let a = multiply!(2 + 3, 4 + 5);
}


/*


宏展开:

安装:
cargo install cargo-expand

运行:
cargo expand --bin main

*/