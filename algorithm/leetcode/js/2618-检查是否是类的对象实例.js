/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if ([null, undefined].includes(obj) || !classFunction || typeof classFunction !== 'function') return false

    return Object(obj) instanceof classFunction
}; 
 
/**
 * checkIfInstanceOf(new Date(), Date); // true
 */


// console.log( checkIfInstanceOf([], []));

console.log(checkIfInstanceOf(0, Object));