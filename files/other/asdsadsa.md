react   facebook内部项目 13



angularjs 1 09 (google)
    MVC  不支持组件开发

react 与  vue对比:

模块化与组件化:
    node模块化,从代码角度分析 ,把一些复用的代码,抽离为单个模块,便于维护和开发
    组件化是从UI界面去分析, 把一些课复用的UI元素,抽离为单独的组件  ,  便于开发和维护,  把现有的组件,拼接为一个页面


    vue实现组件: 通过.vue文件,创建对于的组件
        组件:
            template  结构
            script  行为
            style  样式

    react组件:  没有想vue的模板文件, React中一些都是以JS来表现的; (template结构 行为  样式)  (es6, es7(async awalt))会用


为什么学习react:
    一些基于js的组件化思想
    开发团队好  facebook
    社区强大
    提供了无缝转到reactNative,


vue weex(是阿里的项目)

react reactNative(facebook 百度 JD QQ(android))


库 (library)  :小而巧库  提供特定api  (一个库切换一个库)

框架(famework): 大而全是框架  提供一整套解决方案


虚拟DOM(virtual document object model):  (实现dom元素的快速更新)
    DOM本质:  浏览器的概念, 用js来表示页面上的元素, 提供了操作dom对象的api
    虚拟dom(框架的概念):   框架中的概念,  程序员用js对象来模拟页面上dom和dom嵌套关系
    虚拟dom目的  :  实现dom元素的快速更新
    dom与虚拟dom的区别:


DIFF算法:
    tree diff: 新旧两颗dom树,逐层对比的过程,就是tree diff, 当整课dom树逐层对比完毕,则所有需要被更新的元素,必然能找到.

    component diff:  在进行tree diff过程中,  每一层中, 组件级别的对比,叫做compone