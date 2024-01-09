// 定义枚举 LtsStatus
enum LtsStatus {
    Yes(String),
    Nope,
}

// 实现 From trait 将 LtsStatus 转换为 Option<String>
impl From<LtsStatus> for Option<String> {
    fn from(status: LtsStatus) -> Self {
        match status {
            LtsStatus::Nope => None,
            LtsStatus::Yes(x) => Some(x),
        }
    }
}

fn main() {
    // 创建一个 Yes 变体，包含字符串数据
    let yes_status = LtsStatus::Yes(String::from("Some value"));

    // 将 LtsStatus 转换为 Option<String>
    let status_as_option: Option<String> = yes_status.into();

    // 输出转换后的结果
    match status_as_option {
        Some(val) => println!("Converted to Some: {}", val),
        None => println!("Converted to None"),
    }

    // 创建一个 Nope 变体
    let nope_status = LtsStatus::Nope;

    // 将 LtsStatus 转换为 Option<String>
    let status_as_option: Option<String> = nope_status.into();

    // 输出转换后的结果
    match status_as_option {
        Some(val) => println!("Converted to Some: {}", val),
        None => println!("Converted to None"),
    }
}
