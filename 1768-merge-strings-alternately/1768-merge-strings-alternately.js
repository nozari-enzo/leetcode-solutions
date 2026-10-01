/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function(word1, word2) {
let frase = "";
let maior = Math.max(word1.length, word2.length);
for (let i = 0; i < maior; i++) {
    if (i < word1.length) {
        frase += word1[i];
    }
    if (i < word2.length) {
        frase += word2[i];
    }
}




return frase;  



};