
struct User {
    active: bool,
    username: String,
    email: String,
    sign_in_count: u64,
}


fn main() {


    // 结构体的定义
    let mut user1 = User {
        email: String::from("someone@example.com"),
        username: String::from("someusername123"),
        active: true,
        sign_in_count: 1,
    };

    user1.email = String::from("anotheremail@example.com");

    // println!("{}", user1)

}

// 参数名与字段名都完全相同，我们可以使用字段初始化简写语法
fn build_user(email: String, username: String) -> User {
    User {
        email, // this
        username, // this
        active: true,
        sign_in_count: 1,
    }
}



