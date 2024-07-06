

// 获取按钮元素，这是一个 EventTarget
var button = document.getElementById('myButton');

// 定义事件处理函数
function handleClick(event) {
    console.log('按钮被点击了！');
    console.log('事件类型:', event.type); // "click"
    console.log('事件目标:', event.target); // button element
}

// 向按钮添加点击事件监听器
button.addEventListener('click', handleClick, {
    
});

// 创建一个事件对象
var clickEvent = new Event('click');

// 手动触发点击事件
button.dispatchEvent(clickEvent);
