/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
let atual = (init);

return {
increment: function(){
atual = atual + 1;
return atual;
},
decrement: function(){
atual = atual -1;
return atual;
},
reset: function(){
atual = init;
return atual
    }
  };
};




/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */