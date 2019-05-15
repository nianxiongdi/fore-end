
### History

MDN查询[History API的资料](https://developer.mozilla.org/zh-CN/docs/Web/API/History)。

```js
//最常用
window.history.back();       // 后退
window.history.forward();    // 前进
window.history.go(-3);       // 后退三个页面
```


* `history.pushState`用于在浏览历史中`添加历史记录`,但是并`不触发跳转`,此方法接受三个参数，依次为：

    * state:一个与指定网址相关的`状态对象`，popstate事件触发时，该对象会传入回调函数。如果不需要这个对象，此处可以填null。
    * title：新页面的`标题`，但是所有浏览器目前都忽略这个值，因此这里可以填null。
    * url：`新的网址`，必须与当前页面处在同一个域。浏览器的地址栏将显示这个网址。
* history.replaceState方法的参数与pushState方法一模一样，区别是它修改浏览历史中当前纪录,而非添加记录,同样不触发跳转。

    * 需要注意的是，仅仅调用pushState方法或replaceState方法 ，`并不会触发该事件`，`只有`用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用back、forward、go方法时才会触发。

    * 另外，该事件只针对`同一个文档`，如果浏览历史的切换，导致加载不同的文档，该`事件也不会触发`。
* `popstate event`
    * `触发条件` - 每当同一个文档的`浏览历史`（即history对象）出现`变化`时，就会`触发`popstate事件。
    * 注意，仅仅调用pushState()方法或replaceState()方法 ，并不会触发该事件，只有用户点击浏览器倒退按钮和前进按钮，或者使用 JavaScript 调用History.back()、History.forward()、History.go()方法时才会触发。另外，该事件只针对同一个文档，如果浏览历史的切换，导致加载不同的文档，该事件也不会触发。
    ```js

        window.onpopstate = function (event) {
            console.log('location: ' + document.location);
            console.log('state: ' + JSON.stringify(event.state));
        };

        // 或者
        window.addEventListener('popstate', function(event) {
            console.log('location: ' + document.location);
            console.log('state: ' + JSON.stringify(event.state));
        });
    ```

    * 回调函数的参数是一个`event事件对象`，它的state属性指向pushState和replaceState方法为`当前 URL 所提供的状态对象`（即这两个方法的`第一个参数`）。上面代码中的`event.state`，`就是`通过`pushState和replaceState方法`，为当前 URL 绑定的state对象。

    * 这个state对象也可以直接通过history对象读取。
    ```
    var currentState = history.state;
    ```
    * `注意，页面第一次加载的时候，浏览器不会触发popstate事件。`




### Reference
* https://javascript.ruanyifeng.com/bom/history.html
* https://juejin.im/post/5ac61da66fb9a028c71eae1b

*  学习 https://juejin.im/post/5acd0c8a6fb9a028da7cdfaf