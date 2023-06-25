Function.prototype.before = function(beforeFn){
    let _this = this;
    return function(){
        beforeFn.apply(this,arguments);
        return _this.apply(this,arguments);
    }
}
Function.prototype.after = function(afterFn){
    let _this = this;
    return function(){
         _this.apply(this,arguments);
        afterFn.apply(this,arguments);
    }
}
function buy(money,goods){
  console.log(`花${money}买${goods}`);
}
// buy = buy.before(function(){
//     console.log(`向媳妇申请1块钱.`);
// });
// buy = buy.after(function(){
//     console.log(`把剩下的2毛钱还给媳妇.`);
// });
// buy(.8,'盐');
 


buy = buy.before(function(){
    console.log(`向媳妇申请1块钱.`);
}).after(function(){
    console.log(`把剩下的2毛钱还给媳妇.`);
})
console.log(buy.construction)
buy(.8,'盐');