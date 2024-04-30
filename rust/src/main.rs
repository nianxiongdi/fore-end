// fn main() {
//     let x = 1;

//     let fun = ||  {
//         println!("{}", x);
//     };
//     fun();
// }
struct User {
    email: String,
    username: String,
    active: bool,
    sign_in_count: u64,
}

impl User {
    // 关联函数 new，用于创建 User 实例
    fn new(email: String, username: String) -> User {
        User {
            email,
            username,
            active: true,
            sign_in_count: 0,
        }
    }

    // 自定义的方法，用于获取用户的姓名
    fn get_username(&self) -> &str {
        &self.username
    }
}

fn main() {
    // 使用关联函数创建 User 实例
    let user = User::new(String::from("someone@example.com"), String::from("someusername123"));
    
    // 输出 User 实例的字段值
    println!("Email: {}", user.email);
    println!("Username: {}", user.username);
    println!("Active: {}", user.active);
    println!("Sign-in Count: {}", user.sign_in_count);

    // 调用自定义方法获取用户的姓名并打印
    println!("Username (via custom method): {}", user.get_username());
}
