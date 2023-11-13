fn main() {
    // 使用 `Some` 表示值存在
    let some_value: Option<i32> = Some(42);

    // 使用 `None` 表示值不存在
    let none_value: Option<i32> = None;

    match some_value { // Value exists: 42
        Some(value) => println!("Value exists: {}", value),
        None => println!("Value doesn't exist."),
    }

    match none_value { //  Value doesn't exist.
        Some(value) => println!("Value exists: {}", value),
        None => println!("Value doesn't exist."),
    }
}