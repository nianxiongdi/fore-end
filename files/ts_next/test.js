

function typeOf(obj) {
    return Object.prototype.toString.call(obj).replace(/\[object\s|]/g, '');
}

// @private 判断key是否在数组或对象中
const _isInObj = (key, obj, isArray) =>
    isArray ? obj.indexOf(key) > -1 : key in obj;

/**
 * 过滤出其它属性
 * @param  {Object|Array} holdProps 过滤的参照对象，最终的结果只保留不在参照对象中的key
 * @param  {Object} props     被过滤的对象
 * @return {Object}           others
 *
 * @example
 * object.pickOthers(FooComponent.propTypes, this.props);
 * object.pickOthers(['className', 'onChange'], this.props);
 */
function pickOthers(holdProps, props) {
    const others = {};
    const isArray = typeOf(holdProps) === 'Array';

    for (const key in props) {
        if (!_isInObj(key, holdProps, isArray)) {
            others[key] = props[key];
        }
    }

    return others;
}

// console.log( pickOthers(['className', 'onChange'], {'className': 123, name: 456, age: 789}) );

/*

*/

// try{
//     [1,2,3,4].forEach(item=>{
//         if(item == 3){
//             // return ;
//             throw('sadsads');
//         }
        
//         console.log(item)
//     })
// }catch(e) {
//     console.log(e);
// }


function repeat (func, times, wait) {
    return function(){
        var _arguments=arguments;
        var that=this;
        this.timer=function(_t){
            _t&&clearTimeout(_t);
            var t=setTimeout(function(){
                func.apply(null,Array.prototype.slice.call(_arguments,0));
                --times && that.timer(t);
            },wait);
        }
        this.timer();
    }
}
 

var repeatedFun = repeat(console.log, 10, 100);
repeatedFun("hellworld");
