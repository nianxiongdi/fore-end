
/**
 * 自定义实现hashRouter
 * */
class Routers{

    constructor() {
        // 存放hash路由
        this.routes = {};   
        this.currentUrl = '';
        this.refresh = this.refresh.bind(this);
        window.addEventListener('load', this.refresh, false);
        window.addEventListener('hashchange', this.refresh, false);
        
    }

    //注册路由函数
    route(path, callback) {
        this.routes[path] = callback || function() {}
    }

    refresh() {
        // window可以省略
        // console.log(location.hash.slice(1))
        this.currentUrl = location.hash.slice(1) || '/';
        
        // 相当于obj[key](); 厉害咯
        this.routes[this.currentUrl]();

    }

}


// 挂在在window上
window.Router = new Routers();

var content = document.querySelector('body');

function changeBgColor(color) {
    content.style.backgroundColor = color;
}

Router.route('/', function() {
    changeBgColor('yellow')
})

Router.route('/blue', function() {
    changeBgColor('blue')
})

Router.route('/green', function() {
    changeBgColor('green')
})














