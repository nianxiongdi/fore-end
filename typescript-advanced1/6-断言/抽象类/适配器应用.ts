interface MouseListeneraprocess {
  mouseReleased(e: any): void; // 鼠标在组件上释放时调用
  mousePressed(e: any): void; // 鼠标在组件上按下时调用
  mouseEntered(e: any): void; // 鼠标在组件上时调用

  mouseClicked(e: any): void; // 鼠标在组件上单击时调用
  mouseExited(e: any): void; // 鼠标离开在组件上时调用
}

// 只需要两个方法，但 implements 必须定义出 MouseListeneraprocess中的所有方法，怎么解决
class MyMouseListeneraprocess implements MouseListeneraprocess {
  mouseClicked(e: any): void {
    throw new Error("Method not implement.");
  }

  mouseExited(e: any): void {
    throw new Error("Method not implement.");
  }

  mouseEntered(e: any): void {
    throw new Error("Method not implement.");
  }

  mousePressed(e: any): void {
    throw new Error("Method not implement.");
  }

  mouseReleased(e: any): void {
    throw new Error("Method not implement.");
  }
}

// 解决方法 适配器 Adapter 根据需要，来适配需要的方法
// 适配器是一个抽象方法
abstract class MyMouseListeneraprocessAdapter implements MouseListeneraprocess {
  mouseEntered(e: any): void {
    throw new Error("Method not implement.");
  }

  mousePressed(e: any): void {
    throw new Error("Method not implement.");
  }

  mouseReleased(e: any): void {
    throw new Error("Method not implement.");
  }
  abstract mouseClicked(e: any): void;
  abstract mouseExited(e: any): void;
}

class MyMouseListeneraprocess1 extends MyMouseListeneraprocessAdapter {
  mouseClicked(e: any): void {
    throw new Error("Method not implement.");
  }

  mouseExited(e: any): void {
    throw new Error("Method not implement.");
  }
}
