



// 去重
// const colors = ['red', 'red', 'green', 'blue', 'orange', 'yellow'];

// const distinColors = colors.reduce(
//     (distinct, color) => 
//         (distinct.indexOf(color) !== -1) ?
//             distinct: 
//             [...distinct, color],
//     []
// );


// console.log(distinColors)

const colors = [{
    id: 1,
    name: 'red'
}, {
    id: 1,
    name: 'red'
}, {
    id: 2,
    name: 'green'
}, {
    id: 3,
    name: 'blue'
}, {
    id: 4,
    name: 'orange'
}, {
    id: 5,
    name: 'yellow'
}];
 



const list = colors.reduce((distinct, color)=>{
    console.log(distinct)
    typeof(JSON.stringify(distinct[color.id])) == 'undefined' ? distinct.push(color): ''
    return distinct
},[])

console.log(list);