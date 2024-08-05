class CustomerBuy {
  constructor(public username: String, public wechat: string) {}

  public static readNotice() {
    return "针对全体顾客的公告方法";
  }
}
 
console.log(CustomerBuy.readNotice()); // 针对全体顾客的公告方法
   