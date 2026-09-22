/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
   let num = [];
   for (let i = 0; i < arr.length; i++) {
let resultado = fn(arr[i], i);
num.push(resultado)


} return num;

  
};

