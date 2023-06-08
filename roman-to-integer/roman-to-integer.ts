/*
i - string
o - number
c - none
e - none

psuedocode
 iterate the string
if current char is equal to 
    I, and next char is V or X
    X, and next char is L or C
    C, and next char is D or M
Then 
    subtract the first char number from 2nd char number
    increment i by 1
otherwise
    add the current number
*/
interface State {
    hasSubtracted: boolean;
    value: number;
}

const romToNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

const isSubtractionChecker = {
    I: {
        V: true,
        X: true
    },
    X: {
        L: true,
        C: true
    },
    C: {
        D: true,
        M: true
    }
}

function romanToInt(s: string): number {
    let sum = 0;

    for (let i = 0; i < s.length; i++) {
        const currChar = s[i];
        const currValue = romToNum[currChar];
        const nextChar = s[i + 1];
        const nextValue = nextChar && romToNum[nextChar];
        let subtractionShallOccure = isSubtractionChecker[currChar]?.[nextChar];

        if (subtractionShallOccure) {
            sum+= nextValue - currValue;
            i++;
        } else {
            sum+= currValue;
        }
    }
    return sum;
};