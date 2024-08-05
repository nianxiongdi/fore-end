import ArrayList from "./ArrayList";

// 分页类
export default class Pager {
  // 每一页的第一条记录号是多少
  firstRecordNoCurPage: number = 0;
  // 每页多少条
  pageSize: number = 3;
  // 当前页
  pageCount: number = 0;
  // 封装数据表取出来的全部数据的集合类
  dataList!: ArrayList;

  constructor(pageCount: number, pageSize: number = 3) {
    this.pageCount = pageCount;
    this.pageSize = pageSize;
  }

  // 显示当前页的数据
  public showCurrentPageData() {
    this.firstRecordNoCurPage = (this.pageCount - 1) * this.pageSize;
    // 当前页最后一条记录
    let lastRecordNoCurPage = this.firstRecordNoCurPage + this.pageSize - 1;
    // slice 截头不截尾
    // 当前页所有记录
    let resultDataListCurpage = this.dataList.element.slice(
      this.firstRecordNoCurPage,
      lastRecordNoCurPage + 1
    );

    return resultDataListCurpage;
  }
}
