fn main() {
    let some_value = Some(5);

    // 使用 if let 处理 Option 类型
    if let Some(value) = some_value {
        println!("Got a value: {}", value);
    } else {
        println!("Got nothing!");
    }

    let result: Result<i32, &str> = Ok(10);

    // 使用 if let 处理 Result 类型
    if let Ok(value) = result {
        println!("Got a value: {}", value);
    } else {
        println!("Got an error!");
    }
}
