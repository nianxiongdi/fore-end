
fn main() {
    {
        let r;
        {
            let x = 5;
            r = &x; //     ^^ borrowed value does not live long enough
        }
        println!("r: {}", r);
    }
}