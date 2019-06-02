

#　点击浏览器的打印按钮

```html
<html>
<head>
    <style type="text/css">
        h1 {color:#FF0000;}
        p {color:#0000FF;}
        body {background-color:#FFEFD6;}
    </style>

    <!-- 利用media去打印 -->
    <style type="text/css" media="print">
        h1 {color:#000000;}
        p {color:#000000;}
        body {background-color:yellow;}
    </style>
</head>

<body>
    <h1>Header 1</h1>
    <p>A paragraph.</p>
</body>
</html>
```


## 增加按钮打印

* 对于通过dom方式打印,无法css样式无法渲染dom上,需要自己手动的添加css,以下有两种方式:

方式1 - 在前后添加样式

```html
<html>
<head>
<style type="text/css">
  h1 {color:#FF0000;}
  p {color:#0000FF;}
  body {background-color:#FFEFD6;}
</style>

<script>
    function partialPrint() {
  
  ele = '#xy2';
  if (typeof ele !== 'string') return;
  const element = document.querySelector(ele);
  if (!ele) return;
  const newWindow = window.open('', '_blank', 'resizable=no,scrollbars=no,status=no');

    newWindow.document.write('<html><head><title>my div</title>');
    newWindow.document.write('<style>   body {background-color:blue;} </style>');
    newWindow.document.write('</head><body >');
    newWindow.document.write(element.innerHTML);
    newWindow.document.write('</body></html>');
 
  setTimeout(function() {
      newWindow.document.close();
      newWindow.focus();
      newWindow.print();
      newWindow.close();
  }, 50 );

}

</script>

</head>

<body >

<button onclick="partialPrint()">
        打印
    </button>
<div id="xy2">
  
        <h1>Header 1</h1>
        <p>A paragraph.</p>
</div>

</body>
</html>

```


方式2 - 封装一类打印对象类

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        function PrintElem(elem, title, css) {
            const tmpWindow = window.open('', '_blank', 'resizable=no,scrollbars=no,status=no');
            var tmpDoc = tmpWindow.document;

            title = title || document.title;
            css = css || "";

            this.setTitle = function(newTitle) {
                title = newTitle || document.title;
            };

            this.setCSS = function(newCSS) {
                css = newCSS || "";
            };

            this.basicHtml5 = function(innerHTML) {
                return '<!doctype html><html>'+(innerHTML || "")+'</html>';
            };

            this.htmlHead = function(innerHTML) {
                return '<head>'+(innerHTML || "")+'</head>';
            };

            this.htmlTitle = function(title) {
                return '<title>'+(title || "")+'</title>';
            };

            this.styleTag = function(innerHTML) {
                // console.log( '<style>'+(innerHTML || "")+'</style>');
                return '<style>'+(innerHTML || "")+'</style>';
            };

            this.htmlBody = function(innerHTML) {
                return '<body>'+(innerHTML || "")+'</body>';
            };

            this.build = function() {
                console.log("<html>" + 
                    this.basicHtml5(
                        this.htmlHead(
                            this.htmlTitle(title) + this.styleTag(css)
                        ) + this.htmlBody(
                            document.querySelector(elem).innerHTML
                        )
                    )
                    + "</html>")
                tmpDoc.write("<html>" + 
                    this.basicHtml5(
                        this.htmlHead(
                            this.htmlTitle(title) + this.styleTag(css)
                        ) + this.htmlBody(
                            document.querySelector(elem).innerHTML
                        )
                    )
                    + "</html>"
                );
                tmpDoc.close(); // necessary for IE >= 10
            };

            this.print = function() {
                tmpWindow.focus(); // necessary for IE >= 10*/
                tmpWindow.print();
                tmpWindow.close();
            };

            this.build();
            return this;
        }

        function partialPrint() {
            // 第三个参数 设置样式,以字符串的形式,第二个参数为标题,第一个参数为id
            DOMPrinter = PrintElem('#xy2', '1',  
                '#aaa{background:red; width:100px;height:100px;}'
            );
            DOMPrinter.print();
        }
    </script>
</head>
<body>
        <button onclick="partialPrint()">
                打印
            </button>
        
            <div  id="xy2">
                <div id="aaa">
                        大话西游
                </div>
                <div id="aaa">
                        大话西游
                </div>
                <div id="aaa">
                        大话西游
                </div>
                <div id="aaa">
                        大话西游
                </div>
                <div id="aaa">
                        大话西游
                </div>
                <div id="aaa">
                        大话西游
                </div>
                <div id="aaa">
                        大话西游
                </div>
            </div>
</body>
</html>
```



## 项目中总结

 
在项目中:
对于打印颜色问题解决， 原因： 就是在获取dom结构的时候，css样式并没有加载，需要自己手动添加
* 方式1:  直接设置style在标签中
```js
<span className="wrapper" id="parent" ><span class="color" className={item.key} style={{  background:value}} />{value} </span>;
```
* 方式2： 直接在打印方法中设置
```