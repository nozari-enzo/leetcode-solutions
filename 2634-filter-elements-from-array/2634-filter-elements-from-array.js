/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let num = [];
    for (let i = 0; i < arr.length; i++) {
        let resultado = fn(arr[i], i);
        if (resultado) {
            num.push(arr[i]);
        }
    }
    return num;
};