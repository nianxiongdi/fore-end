


# 1.什么是 web component?


Web Components 是 Web 技术的一部分，它是一种`用于创建可重用和可扩展 Web 应用程序的标准化方式`。它们是自定义元素、Shadow DOM 和 HTML 模板的组合，使得 Web 开发者可以创建出可以像标准 HTML 元素一样使用的自定义组件。

Web Components 可以被用来`封装复杂的 UI 组件`，使其易于重复使用和维护。自定义元素使得开发者可以定义自己的标签，而 Shadow DOM 可以使得这些自定义元素拥有独立的 DOM 结构和样式，这样就不会与页面中的其他元素冲突。HTML 模板则提供了一种定义组件的标记语言，使得开发者可以更加轻松地创建组件。

Web Components 目前已经得到了所有主要浏览器的支持，使得开发者可以在不依赖于第三方库或框架的情况下构建可重用和可扩展的 Web 应用程序。


Web Components 是一种`用于构建可重用组件的技`术，它是由 W3C 官方提出的一组标准，包括自定义元素、Shadow DOM 和 HTML 模板等功能。Web Components 的出现，使得开发者可以更加容易地构建可重用、可扩展、可维护的 Web 应用程序。下面将对 Web Components 进行详细介绍

##  1.1 Web Components 的 polyfill 库

Polyfill 是一个 JavaScript 库，可以在不支持某些 Web 标准的浏览器中实现这些标准，从而使得 Web 开发者可以在所有浏览器上使用相同的代码。在 Web Components 技术中，polyfill 库可以用来实现不支持 Web Components 标准的浏览器上的 Web Components。

以下是几个常见的 Web Components 的 polyfill 库：

webcomponents.js: 这是一个由 Google 开发的 polyfill 库，可以在不支持 Web Components 的浏览器上实现自定义元素、Shadow DOM 和 HTML 模板等功能。

Polymer: 这是一个由 Google 开发的 Web Components 库，它内置了许多 Web Components 的功能，并提供了一些方便的工具和组件，可以帮助开发者更容易地构建 Web Components。Polymer 也包含了一个 polyfill 库，可以在不支持 Web Components 的浏览器上实现 Web Components。

SkateJS: 这是一个轻量级的 Web Components 库，它使用 JavaScript 来定义自定义元素，同时也提供了一些方便的工具和组件。SkateJS 也包含了一个 polyfill 库，可以在不支持 Web Components 的浏览器上实现 Web Components。

除了这些库之外，还有一些其他的 Web Components 的 polyfill 库，开发者可以根据自己的需要选择合适的库来使用。


## 1.2 什么是Shadow DOM ？

Shadow DOM 是 Web Components 中的一个重要特性，它是一种将 DOM 树分割成多个独立的 DOM 子树的技术，从而可以将一个 Web 组件的 DOM 结构和样式封装在一个单独的作用域内，避免组件的样式和行为与其他部分的网页发生冲突。

通过 Shadow DOM 技术，开发者可以创建一个独立的 DOM 子树，并将其附加到主文档的 DOM 树中，使得它们之间相互隔离。在这个子树中，可以使用任意的 HTML 和 CSS，这些 HTML 和 CSS 不会对其他部分的文档产生影响。开发者可以使用 Shadow DOM 将组件的内部实现细节隐藏起来，同时也可以将组件的外观和行为封装在一个单独的作用域内，使得组件可以更加容易地重用和维护。

Shadow DOM 还可以实现样式隔离，使得组件的样式不会被全局样式所覆盖，同时也可以实现事件隔离，使得组件的事件处理函数不会被其他组件所触发。

总之，Shadow DOM 是 Web Components 构建可重用和可扩展组件的重要技术之一，它提供了一种强大的机制，使得组件的内部实现细节和外观行为可以完全隔离开来，并可以实现样式和事件的隔离。


## 1.3 组成

* 自定义元素
* Shadow DOM 
* HTML 模板的组合


# 2自定义元素

## 2.1 CustomElementRegistry

CustomElementRegistry 是 Web API 中的一部分，`用于管理自定义元素`（custom elements）。开发者可以使用 CustomElementRegistry 来定义自己的自定义元素，并且可以注册这些元素以供在 HTML 中使用。

CustomElementRegistry 接口的实例用来处理 web 文档中的 custom elements — 该对象`允许你注册一个 custom elemen`t，`返回已注册 custom elements 的信息`，等等。

CustomElementRegistry 和 customElements 实际上是同一个东西，只是一个是 API 接口的名称，另一个是实现该接口的对象。

在 Web API 中， CustomElementRegistry 是一个用于管理自定义元素的接口，其中包含定义和注册自定义元素的方法。而 `customElements 是实现了 CustomElementRegistry 接口的全局对象。`

也就是说，`开发者可以通过 customElements 对象来调用 CustomElementRegistry 的方法`，例如 customElements.define() 方法用于定义自定义元素。同时，由于 customElements 对象是全局对象，所以开发者无需引入额外的库或框架即可使用 Web Components 技术。

CustomElementRegistry API 提供了以下方法：



### 2.1.1 `CustomElementRegistry.define()`
定义一个新的自定义元素。

你可以创建两种类型的自定义元素：

`自主定制元素`：独立元素; 它们不会从内置 HTML 元素继承。
`自定义内置元素`：这些元素继承自 - 并扩展 - 内置 HTML 元素

* 语法
```js
customElements.define(name, constructor, options);
```

* 参数
    * 1.name -自定义元素名。 注意，custom element 的名称不能是单个单词，且其中必须要有短横线。

    * 2.constructor -自定义元素构造器。

    * 3.options 可选
    控制元素如何定义。目前有一个选项支持：

    * extends. 指定继承的已创建的元素。被用于创建自定义元素。

* 返回值- 空;

### 自主定制元素

自己定义元素

```html
<!DOCTYPE html>
<html>
<head>
  <title>Custom Element Example</title>
</head>
<body>
  <my-element></my-element>

  <script>
    // 定义 MyElement 类
    class MyElement extends HTMLElement {
      constructor() {
        super();

        // 创建 Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // 创建元素
        const button = document.createElement('button');
        button.textContent = 'Click Me';
        const p = document.createElement('p');
        p.textContent = 'Hello World';
        
        // 将元素添加到 Shadow DOM 中
        shadow.appendChild(button);
        shadow.appendChild(p);

        // 监听按钮单击事件
        button.addEventListener('click', () => {
          p.textContent = 'Button Clicked!';
        });
      }
    }

    // 注册自定义元素
    customElements.define('my-element', MyElement);
  </script>
</body>
</html>

```

### 自定义内置元素
自定义内置元素是 Web Components 中的一个重要概念，它允许我们扩展 HTML 中的内置元素，为其添加自定义样式和行为，并将其作为新的自定义元素使用。在本文中，我们将详细介绍自定义内置元素的相关概念和用法。



当我们自定义内置元素时，需要注意以下几点：

自定义元素名应该符合命名规范，即只包含小写字母，必须包含一个短横线，不能以短横线开头或结尾。

自定义元素必须继承自内置元素，比如继承自 HTMLButtonElement，这样可以保证继承了内置元素的属性和方法，同时也遵循了内置元素的语义。

自定义元素需要通过 customElements.define() 方法进行注册，传入元素名和元素类的构造函数。

在自定义元素的构造函数中，可以使用 Shadow DOM 技术将元素的样式和行为封装起来，避免污染全局样式，同时也增强了元素的可重用性和灵活性。


```html
<!DOCTYPE html>
<html>
<head>
  <title>Custom Button Example</title>
  <style>
    /* 定义 cool-button 元素的样式 */
    cool-button {
      display: inline-block;
      background-color: blue;
      color: white;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>

</head>
<body>
  <!-- 
    使用如下的代码不生效，需要使用is
    <cool-button color="orange" radius="100px !important" >Hello World</cool-button> 
-->
    <button is="cool-button"   >Hello World</button>
    <script>
        // 定义 CoolButton 类
        class CoolButton extends HTMLButtonElement {
          constructor() {
            super();
            console.log('>>> this', 123)
            // 获取元素属性
            const color = this.getAttribute('color') || 'blue';
            const radius = this.getAttribute('radius') || '5px';

            // 设置元素样式
            this.style.backgroundColor = color;
            this.style.borderRadius = radius;
            this.style.color = 'white';
            this.style.padding = '10px';
            this.style.cursor = 'pointer';
 
          }
        }
    
        // 注册自定义元素
        customElements.define('cool-button', CoolButton, { extends: 'button' });
      </script>
</body>

</html>

```


```html
class MyCard extends HTMLDivElement {
  constructor() {
    super();
    
    // 添加样式和内容
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        .card {
          border: 1px solid #ccc;
          border-radius: 4px;
          padding: 16px;
          box-shadow: 0 2px 4px rgba(0,0,0,.1);
        }
      </style>
      <div class="card">
        This is a custom card.
      </div>
    `;
  }
}

customElements.define('my-card', MyCard, { extends: 'div' });

```


### 2.1.2`CustomElementRegistry.get()`
返回指定自定义元素的构造函数，如果未定义自定义元素，则返回undefined。


```js
const coolButtonClass = customElements.get('cool-button');

```

### 2.1.3`CustomElementRegistry.upgrade()`
Upgrades a custom element directly, even before it is connected to its shadow root.


CustomElementRegistry.upgrade() 方法用于在 DOM 中自动检测并升级自定义元素。这个方法不需要参数，它会自动检测文档中所有未定义的自定义元素并将它们注册到 customElements 对象中。

通常情况下，你不需要显式调用 upgrade() 方法，因为自定义元素会在它们首次在 DOM 中出现时自动注册。

但是，如果你是动态地向 DOM 中添加自定义元素，例如使用 AJAX 或模板引擎添加元素，则可能需要显式调用 upgrade() 方法来确保自定义元素正确注册。

以下是使用 upgrade() 方法的示例代码：
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Custom Element Upgrade Example</title>
  </head>
  <body>
    <my-element></my-element>
    <script>
      // 定义 MyElement 类
      class MyElement extends HTMLElement {
        connectedCallback() {
          console.log('MyElement connected');
        }
      }

      // 注册自定义元素
      customElements.define('my-element', MyElement);

      // 动态添加 MyElement 元素
      const container = document.createElement('div');
      container.innerHTML = '<my-element></my-element>';
      document.body.appendChild(container);

      // 使用 upgrade() 方法确保 MyElement 正确注册
      customElements.upgrade(container);
    </script>
  </body>
</html>

```

### 2.1.4`CustomElementRegistry.whenDefined()`
返回当`使用`给定名称定义`自定义元素`时`将会执行的 promise`。（如果已经定义了这样一个自定义元素，那么立即执行返回的 promise。）
```html
<!DOCTYPE html>
<html>
<head>
  <title>Custom Element Example</title>
  <script>
    customElements.whenDefined('my-element').then(() => {
      console.log('my-element is defined!');
    });

    customElements.define('my-element', class extends HTMLElement {
      constructor() {
        super();
        console.log('my-element constructor');
      }
    });
  </script>
</head>
<body>
  <my-element></my-element>
  <my-element></my-element>

</body>
</html>

```

# 3 生命周期

```js
// Create a class for the element
class Square extends HTMLElement {
    // Specify observed attributes so that
    // attributeChangedCallback will work
    /*
    observedAttributes是一个静态的getter方法，用于返回一个元素的属性列表，当这些属性发生改变时，attributeChangedCallback()方法会被调用。
    可以用于监听元素属性的变化并作出相应的操作。它必须返回一个字符串数组，数组中每个元素都是该元素可能具有的属性名称。
    */

    static get observedAttributes() {
        console.log("================================")
      return ['c', 'l'];
    }
  
    constructor() {
      // Always call super first in constructor
      super();
  
      const shadow = this.attachShadow({mode: 'open'});
  
      const div = document.createElement('div');
      const style = document.createElement('style');
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
    

    // 当 custom element 首次被插入文档 DOM 时，被调用。
    connectedCallback() {
      console.log('Custom square element added to page.');
      updateStyle(this);
    }
    
    // 当 custom element 从文档 DOM 中删除时，被调用。
    disconnectedCallback() {
      console.log('Custom square element removed from page.');
    }
    
    // 当 custom element 被移动到新的文档时，被调用。
    adoptedCallback() {
      console.log('Custom square element moved to new page.');
    }
    
    // 当 custom element 增加、删除、修改自身属性时，被调用。
    attributeChangedCallback(name, oldValue, newValue) {
      console.log('Custom square element attributes changed.');
      updateStyle(this);
    }
}
  
  customElements.define('custom-square', Square);
  
  function updateStyle(elem) {
    const shadow = elem.shadowRoot;
    shadow.querySelector('style').textContent = `
      div {
        width: ${elem.getAttribute('l')}px;
        height: ${elem.getAttribute('l')}px;
        background-color: ${elem.getAttribute('c')};
      }
    `;
  }
  
  const add = document.querySelector('.add');
  const update = document.querySelector('.update');
  const remove = document.querySelector('.remove');
  let square;
  
  update.disabled = true;
  remove.disabled = true;
  
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  add.onclick = function() {
    // Create a custom square element
    square = document.createElement('custom-square');
    square.setAttribute('l', '100');
    square.setAttribute('c', 'red');
    document.body.appendChild(square);
  
    update.disabled = false;
    remove.disabled = false;
    add.disabled = true;
  };
  
  update.onclick = function() {
    // Randomly update square's attributes
    square.setAttribute('l', random(50, 200));
    square.setAttribute('c', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
  };
  
  remove.onclick = function() {
    // Remove the square
    document.body.removeChild(square);
  
    update.disabled = true;
    remove.disabled = true;
    add.disabled = false;
  };
  
```


# 4 templates and slots

模板（templates）是一种可以定义重复使用的内容块的机制。模板内容不会在文档中直接呈现，而是需要在 JavaScript 中通过 content.cloneNode(true) 方法进行克隆并添加到 Shadow DOM 中。

插槽（slots）是一种可以在 Shadow DOM 中分配内容的机制。通过在 Shadow DOM 中使用 <slot> 元素，可以将外部文档中的元素插入到 Shadow DOM 中相应的位置。当文档中有多个匹配的插槽时，元素会被分配到第一个匹配的插槽中。

常用方法：

document.createElement('template'): 创建一个HTML模板元素。
document.importNode(node, deep): 导入一个节点到当前文档中，deep参数指示是否深度导入。
node.content.cloneNode(): 复制一个模板的内容节点，可以在其他地方插入使用。

常用属性：

<template>.content: 模板元素的内容，一个 DocumentFragment 类型的节点。
<slot>.name: 指定插槽的名称，可以用来匹配对应的元素。
<slot>.assignedNodes(): 返回被插入到插槽中的节点列表。
在使用 attachShadow() 方法时，可以设置 mode 参数来指定新创建的 Shadow DOM 根节点的模式，mode 参数有两个可选值：open 和 closed。

当 mode 参数为 open 时，`外部文档`可以`通过 Element.shadowRoot 属性来访问`到 `Shadow DOM 根节点`，也可以通过 Element.attachShadow() 方法来获取 Shadow DOM 根节点。同时，外部文档可以访问到 Shadow DOM 中的 CSS 样式和 JavaScript 函数，而且在 Shadow DOM 中可以使用 ::shadow 和 /deep/ 选择器来穿透 Shadow DOM，影响 Shadow DOM 中的节点样式。

```js
const myElement = document.querySelector('my-element');
console.log(myElement.shadowRoot);

```

当 mode 参数为 closed 时，外部文档无法通过 Element.shadowRoot 属性和 Element.attachShadow() 方法来访问到 Shadow DOM 根节点，而只能通过 Element.assignedNodes() 方法获取 Shadow DOM 中的节点。同时，外部文档也无法访问到 Shadow DOM 中的 CSS 样式和 JavaScript 函数，而且在 Shadow DOM 中不能使用 ::shadow 和 /deep/ 选择器来穿透 Shadow DOM，影响 Shadow DOM 中的节点样式。

Element.attachShadow() 方法创建的 ShadowRoot 对象具有以下特性：

ShadowRoot.host：指向创建它的元素。
ShadowRoot.mode：指定 Shadow DOM 的模式，可以是 open 或 closed。
ShadowRoot.innerHTML：设置或获取 Shadow DOM 的 HTML 内容。
ShadowRoot.adoptedStyleSheets：一个数组，包含在 Shadow DOM 内部使用的样式表。
ShadowRoot.querySelector()：可以在 Shadow DOM 内部查询元素。
ShadowRoot.querySelectorAll()：可以在 Shadow DOM 内部查询多个元素。


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <group-button></group-button>
    <script>
        class groupButton extends HTMLElement {
            constructor(){
                super()
                const shadow = this.attachShadow({ mode: 'open' });
                const button = document.createElement('button');
                button.textContent = 'Click Me';


                const style = document.createElement('style');

                style.textContent = `
                    button {
                        border-radius: 5px;
                        background-color: blue;
                        padding: 5px;
                        color: #fff;
                    }
                `
                shadow.appendChild(style);
                shadow.appendChild(button)
                console.log(this)
            }
        }

        customElements.define('group-button', groupButton)
    </script>
</body>
</html>
```



# 5. ui框架
1. LitElement：LitElement是一个快速、轻量、灵活的Web Components库。它基于LitHTML和Polymer库，提供了构建Web Components的基本组件和API。

2. []Vaadin](https://github1s.com/vaadin/web-components/blob/HEAD/packages/button/src/vaadin-button-mixin.js#L19
)：Vaadin是一个可视化Web Components库，提供了丰富的UI组件和工具，用于快速构建企业级应用程序。

3. Polymer：Polymer是一个基于Web Components的库，提供了一套用于构建可重用、可扩展组件的工具和API。

4. Ionic：Ionic是一个基于Web Components的UI框架，提供了丰富的UI组件和工具，用于构建跨平台移动应用。

5. Material Web Components：Material Web Components是一个基于Google Material Design的Web Components库，提供了一套现成的Material风格的UI组件和工具，用于构建响应式和现代化的Web应用。

6. OpenWC：OpenWC是一个基于Web Components的开源项目，提供了一套标准化的Web Components API和工具，用于构建可重用、可扩展的组件和应用。


# 参考

* [CustomElementRegistry](https://developer.mozilla.org/zh-CN/docs/Web/API/CustomElementRegistry)
* [MDN-github](https://github1s.com/mdn/web-components-examples/blob/HEAD/simple-template/index.html#L3-L14)
* [xy-ui](https://github.com/XboxYan/xy-ui/tree/893f6d1795aacb23ff57fb3a1b7bcce22c8631a6)