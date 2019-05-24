
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>计算利息</title>
    <style>
        .output {
            font-weight: bold;
        }
        #payment {
            text-decoration: underline;
        }
        #grapg {
            border: solid black 1px;
        }
        th, td {
            vertical-align: top
        }


    </style>
</head>
<body>
    
<table>
    <tr>
        <th>
            输入贷款数据:
        </th>
        <td></td>
        <th>贷款余额，累计权益和利息支付</th>
    </tr>
    <tr>
        <td>贷款额($)：</td>
        <!--onchange 事件会在域的内容改变时发生。-->
        <td><input id="amount" onchange="calculate()"></td>
        <!--rowspan 属性规定单元格可横跨的行数。-->
        <td rowspan="8">
            <canvas id="graph" width="400" height="250"></canvas>
        </td>
    </tr>
    <tr>
        <td>年利(%):</td>
        <td><input id="apr" onchange="calculate()"></td>
    </tr>
    <tr>
        <td>还款期限（年）:</td>
        <td><input id="years" onchange="calculate()"></td>
    </tr>
    <tr>
        <td>邮编（找到贷方）:</td>
        <td><input id="zipcode" onchange="calculate()"></td>
    </tr>
    <tr>
        <th>近似付款:</th>
        <td>
            <button onclick="calculate()">计算</button>
        </td>
    </tr>
    <tr>
        <td>每月支付:</td>
        <td>$<span class="output" id="payment"></span></td>
    </tr>
    <tr>
        <td>总付款:</td>
        <td>$<samp class="output" id="total"></samp></td>
    </tr>
    <tr>
        <td>总利息:</td>
        <td>$<span class="output" id="totalinterset"></span></td>
    </tr>
    <tr>
        <td>赞助商:</td>
        <td colspan="2">
            向这些优良贷款人申请贷款：
            <div id="lenders"></div>
        </td>
    </tr>
</table>



<script>
    "use strict"
    /*
        转换为float
        isFinite 是否为合法的数字
        monthly.toFixed(2) float保留2位小数
    */
    function calculate() {
        //贷款金额
        const amount =  document.getElementById("amount");
        // 年利率
        const apr = document.getElementById("apr");
        // 还款期限（年）
        const years = document.getElementById("years");
        //邮编（找到贷方）
        const zipcode = document.getElementById("zipcode");
        // 每月支付
        const payment = document.getElementById("payment");
        // 总付款
        const total = document.getElementById("total");
        // 总利率
        const totalinterest = document.getElementById("totalinterset");


        const principal = parseFloat(amount.value); //总金额
        const interest = parseFloat(apr.value) / 100 / 12; //月利率
        const payments = parseFloat(years.value) * 12; // 算出有多少个月

        // 计算月赔付的金额
        const x = Math.pow(1 + interest, payments);
        const monthly = (principal * x * interest)/ (x - 1);


        //isFinite 检测 数字是否合法

        if(isFinite(monthly)) {
            // 月陪付
            payment.innerHTML = monthly.toFixed(2);
            // 总付款
            total.innerHTML = (monthly * payments).toFixed(2);
            // 总利率
            totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);

            // 用户输入数据保存下来
            save(amount.value, apr.value, years.value, zipcode.value)
            
            try {
                getLenders(amount.value, apr.value, years.value, zipcode.value)
            } catch(e) {
                console.log(e);
            }

            chart(principal, interest, monthly, payments)


        }
    }

    /**
     * save 用户输入数据保存下来， 下次访问也能取到
     *      amount - 贷款金额
     *      apr - 年利率
     *      years - 还款期限（年）
     *      zipcode - 邮编（找到贷方）
     * */ 
    function save(amount, apr, years, zipcode) {
        if (window.localStorage) { // 判断是否在浏览器环境
            localStorage.loan_amount = amount;
            localStorage.loan_apr = apr;
            localStorage.loan_years = years;
            localStorage.loan_zipcode = zipcode;
        }
    }

    window.onload = function() {
        //如果浏览器支持本地存储并且上次保存的值是存在的
        if (window.localStorage && localStorage.loan_amount) {
            document.getElementById("amount").value = localStorage.loan_amount;
            document.getElementById("apr").value = localStorage.loan_apr;
            document.getElementById("years").value = localStorage.loan_years;
            document.getElementById("zipcode").value = localStorage.loan_zipcode;
        }
    }

    function createXMLHttpRequest(){    //创建XMLHttpRequest对象的方法
        let xmlHttpRequest;  //定义一个变量,用于存放XMLHttpRequest对象

        if(window.ActiveXObject){   //判断是否是IE浏览器
            xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");  //创建IE浏览器中的XMLHttpRequest对象
        } else if(window.XMLHttpRequest) {// 判断是否是Netscape等其他支持XMLHttpRequest组件的浏览器
            xmlHttpRequest = new XMLHttpRequest();  //创建其他浏览器上的XMLHttpRequest对象
        }
        return xmlHttpRequest;
    }


    /**
     * getLenders - 讲用户输入发生至服务器脚本
     * 
    */
    function getLenders(amount, apr, years, zipcoce) {
        //如果浏览器不支持XMLHttpRequest对象，则退出
        if (!window.XMLHttpRequest) return;
        
        const ad = document.getElementById("lenders");
        if(!ad) return ;

        var url = "getLenders.php" +       
            "?amt=" + encodeURIComponent(amount) +   
            "&apr=" + encodeURIComponent(apr) +
            "&yrs=" + encodeURIComponent(years) +
            "&zip=" + encodeURIComponent(zipcoce);

        // 获取异步请求对象
        const req = createXMLHttpRequest();
        req.open("GET", url);
        req.send(null); // 不带任何正文发生这个请求
        
        // 当server响应clinet的时候调用
        req.onreadystatechange = function() {
            console.log(req.readyState)
            console.log(req.status)
            if(req.readyState == 4 && req.status == 200) {
                const response = req.responseText; //http响应是以字符串的形式呈现的

                const lenders = JSON.parse(response); //解析为js数组
                console.log(123)
                //将数组中国的放贷人对象转换为HTML字符串形式
                var list = "";
                for (var i = 0; i < lenders.length; i++) {
                    list += "<li><a href='" + lenders[i].url + "'>" + lenders[i].name + "</a></li>"
                }

                //将数据在HTML元素中呈现出来
                ad.innerHTML = "<ul>" + list + "</ul>";
            }
        }
    }
    /**
     * chart - 月贷款额度、利息和资产收益
     *  不传参数，则清空图表数据
    */
    function chart(principal, interest, monthly, payments) {
        let graph = document.getElementById("graph");
        // 手动 清楚并重置画布
        graph.width = graph.width;

        // 不传参数  或 浏览器不支持画布 则退出
        if(arguments.length === 0 || !graph.getContext)
            return ;

        
        let g = graph.getContext("2d"); //得到2d绘画对象
        const width = graph.width; // 获取画布的宽
        const height = graph.height; // 获取画布的高


        //这里讲函数左右是将付款数字和美元数据转换为像素
        function paymentToX(n) {
            return n * width / payments;
        }
        function amountToY(a) {
            return height - (a * height / (monthly * payments * 1.05));
        }

        g.moveTo(paymentToX(0), amountToY(0)); // 绘制左下方
        g.lineTo(paymentToX(payments),  // 绘至右下方
            amountToY(monthly * payments));
        g.lineTo(paymentToX(payments), amountToY(0));    //再至右下方

        g.closePath(); // 讲结尾连接至开头
        g.fillStyle = "#f88"; // 设置颜色为 高红色
        g.fill(); // 填充矩形
        g.font = "bold 12px sans-serif";        //定义一种字体
        g.fillText("总利息支付", 20, 20);    //将文字回执到图例中

        //很多资产数据并不是线性的，很难将其反应至图表中
        let equity = 0;
        g.beginPath();// 开始绘制新的图形
        g.moveTo(paymentToX(0), amountToY(0));
        for (var p = 1; p <= payments; p++) {
            // 计算出每一笔赔付的利息
            var thisMonthsInterest = (principal - equity) * interest;
            equity += (monthly - thisMonthsInterest);       //得到资产额
            g.lineTo(paymentToX(p), amountToY(equity));//将数据绘制到画布
        }   
        g.lineTo(paymentToX(payments), amountToY(0));    //将数据绘制至X轴
        g.closePath();                  //将线条结尾连接至线条开头
        g.fillStyle = "green";      //使用绿色绘制图形
        g.fill();
        g.fillText("总资产", 20, 35);

        //再次循环，余额数据显示为黑色粗体线条
        var bal = principal;
        g.beginPath();
        g.moveTo(paymentToX(0), amountToY(bal));
        for (var p = 1; p <= payments; p++) {
            var thisMonthsInterest = bal * interest;
            bal -= (monthly - thisMonthsInterest);      //得到资产额
            g.lineTo(paymentToX(p), amountToY(bal))
        }
        g.lineWidth = 3;        //将直线宽度加粗
        g.stroke();         //绘制余额曲线
        g.fillStyle = "black";      //使用黑色字体
        g.fillText("贷款余额", 20, 50);

                //将年度数据在X轴做标记
                g.textAlign = "center";         //文字居中对齐
        var y = amountToY(0);            //Y坐标设为0
        for (var year = 1; year * 12 <= payments; year++) {
            var x = paymentToX(year * 12);
            g.fillRect(x - 0.5, y - 3, 1, 3);
            if (year == 1)
                g.fillText("正确", x, y - 5);
            if (year % 5 == 0 && year * 12 !== payments) {
                g.fillText(String(year), x, y - 5);
            }
            g.textAlign = "right";              //文字右对齐
            g.textBaseline = "middle";          //文字垂直居中
            var ticks = [monthly * payments, payments];
            var rightEde = paymentToX(payments);
            for (var i = 0; i < ticks.length; i++) {
                var y = amountToY(ticks[i]);
                g.fillRect(rightEde - 3, y - 0.5, 3, 1);
                g.fillText(String(ticks[i].toFixed(0)), rightEde - 5, y);
            }
        }
    }   




</script>


</body>
</html>

```