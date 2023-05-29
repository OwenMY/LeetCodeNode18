/*
i - nums array
o - last element
c - none
e - return -1 if array has no elements

psuedocode
------------
have a const set to check if array has length
if array has elements
    return last element

return -1

*/


Array.prototype.last = function() {
    const numsHasElements = this.length;

    if (numsHasElements) {
        const lastElement = this.at(-1);
        return lastElement;
    }

    return -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */