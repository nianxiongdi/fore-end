
const java = require('js-to-java');

/**
 *  官方文档： https://www.npmjs.com/package/js-to-java
 **/


// Java: short[] shorts = new short[] {1, 2, 3};
// js to java
java.array('short', [1, 2, 3]);
// => {$class: '[short', $: [1, 2, 3]}



var data = {
    $class: 'xxxx',
    $: {
        foo: 'bar',
        bar: {
        $class: 'int',
        $: 3,
        },
    },
};
// java to js
console.log( java.revert(data));