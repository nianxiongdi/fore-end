 
// const getUrlParam = (name) => {
//     const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
//     const r = "category=全部1,哈哈".match(reg);
//     if (r != null) return unescape(r[2]);
//     return null;
//   };



// console.log( getUrlParam('category') );


// function syncWidth() {
//   if(true) {
//     return ;
//   }

//   console.log(123);
// }


// setTimeout(() => {
//   syncWidth();
// }, 200);



// new Promise((resolve, reject)=>{
//   console.log('promise1');
//   resolve(1);
// }).then((res)=>{
//   console.log(res);
// })

// async function fun(){
//   console.log('first');
//   const a = await fun1();
//   console.log(a);
//   console.log('second');
// }


// async function fun1(){
//   console.log('fun1');
//   return 'xxx';
// }

// fun();

// new Promise((resolve, reject)=>{
//   console.log('promise2');
//   resolve(2);
// }).then((res)=>{
//   console.log(res);
// })



// function testSometing() {
//   console.log("执行testSometing");
//   return "testSometing";
// }

// async function testAsync() {
//   console.log("执行testAsync");
//   return Promise.resolve("hello async");
// }

// async function test() {
//   console.log("test start...");
//   const v1 = await testSometing();//关键点1
//   console.log(v1);
//   const v2 = await testAsync();
//   console.log(v2);
//   console.log(v1, v2);
// }

// test();

// var promise = new Promise((resolve)=> { console.log("promise start.."); resolve("promise");}).then((val)=> console.log(val));

// console.log("test end...")

// var a = 0
// var b = () => {
//   var temp = a;
//   Promise.resolve(10)
//     .then((r) => {
//       a = temp + r;
//     })
//     .then(() => {
//       console.log(a);
//       console.log('2', a)
//     })
// }
// b()
// a++
// console.log('1', a)


// function fun(){
//   setTimeout(function(){
//     return 1;
//   },0);  
// }
 

//

// var Event = {
//   // 通过on接口监听事件eventName
//   // 如果事件eventName被触发，则执行callback回调函数
//   on: function (eventName, callback) {
//     //我的代码
//     if(!this.handles){
//       this.handles={};
//     }
//     if(!this.handles[eventName]){
//       this.handles[eventName]=[];
//     }
//     this.handles[eventName].push(callback);
//   },
//   // 触发事件 eventName
//   emit: function (eventName) {
//     //你的代码
//     // console.info('eventName', eventName);
//     // console.info('this.handles', this.handles);
//     if(this.handles[arguments[0]]){
//       for(var i=0;i<this.handles[arguments[0]].length;i++){
//         this.handles[arguments[0]][i](arguments[1]);
//       }
//     }else {
//       console.error('unable to subscribe, not may be exist.');
//     }
//   },
//   off: function(type) {
//     delete this.handles[type]
//   }
// };



// Event.on('test', function (result) {
//   console.log(result);
// });
// Event.on('test', function () {
//   console.log('test');
// });
// Event.off('test');
// Event.emit('test', 'hello world'); // 输出 'hello world' 和 'test'
 

// function fun(pid,start=7) {
//   console.log(start)
// }

// fun();
   


 
// const arr = [{"name":"zitian.lzt","count":2},{"name":"wenjun.lwj","count":2},{"name":"honglei.hl","count":2},{"name":"crystalzhao.zj","count":2},{"name":"caoyi.cy","count":2},{"name":"bianran.br","count":2},{"name":"ziqi.hezq","count":1},{"name":"zhe.yinz","count":1},{"name":"zexin.szx","count":1},{"name":"yueqiao.zyq","count":1},{"name":"yisheng.wr","count":1},{"name":"yihan.dyh","count":1},{"name":"yeeruh.hyr","count":1},{"name":"yaoling.pyl","count":1},{"name":"xiwang.hxw@alibaba-inc.com","count":1},{"name":"xinyi.xy","count":1},{"name":"xiling.lcy","count":1},{"name":"xiaoli.xuxl","count":1},{"name":"wen.shiw","count":1},{"name":"wb-zyb297382","count":1}]
// const arr = [{"name":"yihan.dyh","count":9},{"name":"xiling.lcy","count":6},{"name":"guifen.chengf","count":5},{"name":"miwei.cmc","count":2},{"name":"zitian.lzt","count":1},{"name":"ziqi.hezq","count":1},{"name":"yuqin.tuyq@alibaba-inc.com","count":1},{"name":"yeeruh.hyr","count":1},{"name":"yaoling.pyl","count":1},{"name":"xubo.zhangxb","count":1},{"name":"wen.shiw","count":1},{"name":"wb-ywy549888","count":1},{"name":"luqi.nlq","count":1},{"name":"jianyi.zh","count":1},{"name":"honglei.hl","count":1},{"name":"hana.sxy","count":1},{"name":"chunya.tracytsu","count":1},{"name":"caoyi.cy","count":1}];

// const arr = [{"name":"zitian.lzt","count":425},{"name":"nanqiao.dengnq","count":167},{"name":"sarah.wangxj","count":66},{"name":"jianyi.zh","count":32},{"name":"naoning.ztt","count":27},{"name":"yihan.dyh","count":26},{"name":"hubei.hb","count":24},{"name":"xiwang.hxw@alibaba-inc.com","count":19},{"name":"caoyi.cy","count":19},{"name":"dingding.wd","count":17},{"name":"xiling.lcy","count":16},{"name":"ziqi.hezq","count":12},{"name":"wen.shiw","count":11},{"name":"wb-lhl609719","count":10},{"name":"guifen.chengf","count":9},{"name":"yeeruh.hyr","count":8},{"name":"miwei.cmc","count":8},{"name":"yueqiao.zyq","count":7},{"name":"ll212559","count":7},{"name":"wb-gp02105837","count":6},{"name":"chunya.tracytsu","count":6},{"name":"min.kem@alibaba-inc.com","count":5},{"name":"honghui.zhh","count":5},{"name":"hana.sxy","count":5},{"name":"yanxue.yx@alibaba-inc.com","count":4},{"name":"lisha.lx","count":4},{"name":"jianhao.ljh","count":4},{"name":"honglei.hl","count":4},{"name":"wenjun.lwj","count":3},{"name":"wb-zyb297382","count":3},{"name":"vincent.lrz","count":3},{"name":"mayi","count":3},{"name":"liubing02","count":3},{"name":"li.zuol","count":3},{"name":"crystalzhao.zj","count":3},{"name":"bianran.br","count":3},{"name":"zhe.yinz","count":2},{"name":"wb-gxy551973@alibaba-inc.com","count":2},{"name":"shengkai.csk","count":2},{"name":"ryan.wangyf","count":2},{"name":"neo.hh","count":2},{"name":"nannan.lnn","count":2},{"name":"fengyue","count":2},{"name":"east.whd@alibaba-inc.com","count":2},{"name":"zhuoke.wc","count":1},{"name":"zhanmu.zzy","count":1},{"name":"zexin.szx","count":1},{"name":"yuqin.tuyq@alibaba-inc.com","count":1},{"name":"yixiu.zyx","count":1},{"name":"yi.jiangjy@alibaba-inc.com","count":1},{"name":"yanzi.ts","count":1},{"name":"yangguang.dyg","count":1},{"name":"xy168031","count":1},{"name":"xixia.sm","count":1},{"name":"xinyi.xy","count":1},{"name":"xiaoli.xuxl","count":1},{"name":"weiyu.rwy@alibaba-inc.com","count":1},{"name":"wb-lj01036054","count":1},{"name":"wangshuo.ws","count":1},{"name":"vivian.sy@koubei.com","count":1},{"name":"tony.liq","count":1},{"name":"renfu.lx","count":1},{"name":"nixi.lq","count":1},{"name":"mouhong.mh","count":1},{"name":"lyx178258@alibaba-inc.com","count":1},{"name":"lyukuang.lk@alibaba-inc.com","count":1},{"name":"lws192153","count":1},{"name":"luqi.nlq","count":1},{"name":"luoyiming.lym","count":1},{"name":"liz.lyh","count":1},{"name":"linyun.wy","count":1},{"name":"lianmin.slm","count":1},{"name":"lexie.liuj","count":1},{"name":"leocheung","count":1},{"name":"jinli.lyy","count":1},{"name":"jieqin.sjq@alibaba-inc.com","count":1},{"name":"iman.zhang","count":1},{"name":"huanian.chn","count":1},{"name":"guojin.xugj","count":1},{"name":"guangye.wyy","count":1},{"name":"chunlan.wcl","count":1},{"name":"chige.cy","count":1}]
const arr = [{"name":"wb-gp02105837","count":80},{"name":"shengkai.csk","count":49},{"name":"zitian.lzt","count":5},{"name":"jianyi.zh","count":3},{"name":"zhe.yinz","count":1},{"name":"xinyi.xy","count":1},{"name":"xiaoli.xuxl","count":1},{"name":"wb-gxy551973@alibaba-inc.com","count":1},{"name":"wangshuo.ws","count":1},{"name":"luqi.nlq","count":1},{"name":"honglei.hl","count":1},{"name":"honghui.zhh","count":1},{"name":"hana.sxy","count":1},{"name":"douglas.wl","count":1},{"name":"chunya.tracytsu","count":1}]
arr.forEach(item=>console.log(item.name,item.count))

