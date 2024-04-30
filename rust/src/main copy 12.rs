fn main() {
    let even = 2;
    let msg: &str = if even%2 == 0 {
        "ok"
    } else {
        "err"
    };


    println!("{}", msg)
}
