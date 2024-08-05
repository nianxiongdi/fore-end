import OrderDetail from "./OrderDetail";

// 订单类
class Order {
  public orderId: number = 0;
  public date: Date = new Date();
  public custname: String = "drunk";
  public phone: string = "111";
  public orderDetailArray: Array<OrderDetail> = [];

  constructor( 
    orderId_: number,
    date_: Date,
    custname_: string,
    phone_: string,
    orderDetail_: Array<OrderDetail>
  ) {
    this.orderId = orderId_;
    this.custname = custname_;
    this.date = date_;
    this.phone = phone_;
    this.orderDetailArray = orderDetail_;
  }
}

let orderDetailOne = new OrderDetail(10, "电视机", 5000, 1);
let orderDetailTwo = new OrderDetail(11, "桌子", 1000, 1);
let orderDetailThree = new OrderDetail(12, "沙发", 2000, 1);

// 数组中存放订单详情的地址
let orderDeailArray: Array<OrderDetail> = [
  orderDetailOne,
  orderDetailTwo,
  orderDetailThree,
];

let orderDate = new Date(2022, 10, 12, 3, 12, 11);
let order = new Order(1, orderDate, "drunk", "111111", orderDeailArray);

console.log(order, "这是一条订单信息");
