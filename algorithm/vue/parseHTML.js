


// 文档类型
const doctype = /<!DOCTYPE [^>]+>/i

// [标签第一个字符][其他字符] 
const ncname = '[a-zA-Z_][\\w\\-\\.]*'
const qnameCapture = `((?:${ncname}\\:)?${ncname})`
const startTagOpen = new RegExp(`^<${qnameCapture}`)
const startTagClose = /^\s*(\/?)>/
const endTag = new RegExp(`^<\\/${qnameCapture}[^>]*>`)
const comment = /^<!\--/
const conditionalComment = /^<!\[/

// 属性
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/



function parseHTML (html, options) {
    const stack = []

    // 当前遍历的位置
    let index = 0
    // console.log(html)

    while(html) {

        let textEnd = html.indexOf('<')
        // console.log(">>> textEnd", textEnd)

        if (textEnd === 0) {
            
            
            const doctypeMatch = html.match(doctype)

            if (doctypeMatch) {
                advance(doctypeMatch[0].length)
                continue
            }
            // console.log(`111`)
            parseStartTag()

            return 


        } else {
            // console.log(html)


            let text // 保存最新的处理后的字符串
            if (textEnd >= 0) {
                rest = html.slice(textEnd)

                while(
                    !endTag.test(rest) && // 结束标签开始
                    !startTagOpen.test(rest) && // 开始标签开始
                    !comment.test(rest) && // 注释节点
                    !conditionalComment.test(rest) // 条件注释
                ) {

                }

                text = html.substring(0, textEnd)
                advance(textEnd)
                console.log(html, '>>>')
                
            }
        }

        // break
    }

    // 更改索引和长度的方法
    function advance(n) {
        index += n
        html = html.substring(n)
        // console.log(html)
    }


    function parseStartTag() {
        /*
        match          
                0:'<html'
                1:'html' 分组匹配的信息
            groups: 一个命名捕获组对象，其键是捕获组名称，值是捕获组，
                如果未定义命名捕获组，则为 undefined。有关详细信息，请参阅组和范围。
            index: 匹配的结果的开始位置
            input: 搜索的字符串。

        */
        const start = html.match(startTagOpen)
        if (start) {
            const match = {
                tagName: start[1],
                attrs: [],
                start: index
            }
            advance(start[0].length)

            let end, attr
            // 匹配当前表情的每一个
            while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
                console.log(attr)
                advance(attr[0].length)
                match.attrs.push(attr)
            }

            if (end) {
                

            }
            console.log('>>> end', end)
            // console.log(start)
        }
    }

}



const str = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <body>
        <button data-name="西瓜" id="watermelon">西瓜</button>
        <button data-name="苹果" id="apple">苹果</button>
    <script>
    
</body>
</html>`

parseHTML(str)
