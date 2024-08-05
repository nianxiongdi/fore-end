// 订单详情类
class OrderDetail {
  public orderDatailId: number = 0;
  public productName: string = "cat";
  public price: number = 0;
  public count: number = 0;

  constructor(
    orderDatailId_: number,
    productName_: string,
    price_: number,
    count_: number
  ) {
    this.count = count_;
    this.orderDatailId = orderDatailId_;
    this.price = price_;
    this.productName = productName_;
  }
}
export default OrderDetail;
