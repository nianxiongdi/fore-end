/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
 var areDeeplyEqual = function(o1, o2) {

    let type1 = Object.prototype.toString.call(o1)
    let type2 = Object.prototype.toString.call(o2)

    if (type1 !== type2) {
        return false
    } else if (type1 === '[object Object]') {
        const obj1 = Object.entries(o1)
        const obj2 = Object.entries(o2)

        if (obj1.length !== obj2.length) return false

        for (let i=0; i<obj1.length; i++) {
            if (!o1.hasOwnProperty(obj1[i][0])) return false    
            if (!areDeeplyEqual(obj1[i][1], o2[obj1[i][0]]))  return false
        }
        return true
    } else if (type1 === '[object Array]') {
        if (o1.length !== o2.length) return false
        for (let i=0; i<o1.length; i++) {
            if (!areDeeplyEqual(o1[i], o2[i])) {
                return false
            }
        }
        return true
    }else {
        return o1 === o2
    }
 

};
 

console.log(areDeeplyEqual({"y":2,"x":1}, {"x":1,"y":2}));