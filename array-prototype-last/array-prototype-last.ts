declare global {
    interface Array<T> {
        last(): T | -1;
    }
}

Array.prototype.last = function() {
    const hasElements = this.length;

    if (hasElements) {
        const lastElement = this.at(-1);
        return lastElement;
    }

    return -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

export {};