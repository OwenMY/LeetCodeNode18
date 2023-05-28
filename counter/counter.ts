/*
i - number
o - function => number + 1
c - none
e - none

pseudocode
create a closure

set count to n
within the return function
    increment count
    return count
*/

function createCounter(n: number): () => number {
    let count = n - 1;
    return function(): number {
        count++;
        return count;
    }
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */