

var add = require('./add.js');
var expect = require('chai').expect;



//https://www.jianshu.com/p/41ced3207a0c 学习对象
//　测试的总结　待。。。http://www.ruanyifeng.com/blog/2016/02/react-testing-tutorial.html
describe('加法函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        expect(add(1, 1)).to.be.equal(2);
    });
 

});
