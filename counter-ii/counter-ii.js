/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

 /*
i - number
o - object with methods
c - none
e - decrment going below zero?

we will create a closure, with count set to init
and initCount will be set to init

psuedocode
create prototype methods of each function
set initCount to init
set count to init

increment
  increment count
  return count

reset
    set count back to normal using initCount
    return count

decrement
    decrement count
    return count
 */

var createCounter = function(init) {
    const initCount = init;
    let count = init;

    const counter = {
        increment: function() {
            count++;
            return count;
        },
        reset: function() {
            count = initCount;
            return count;
        },
        decrement:function() {
            count--;
            return count;
        }
    }
    return counter;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */