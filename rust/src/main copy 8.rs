macro_rules! multiply {
    ($x:expr, $y:expr) => {
        $x * $y
    };
}

fn main() {
    let a = multiply!(2 + 3, 4 + 5);
    let v = 1;
}



