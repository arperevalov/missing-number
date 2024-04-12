const findMissingNumber = require('./index.js');

describe('findMissingNumber', () => {
    test('Handles assignment cases', () => {
        expect(findMissingNumber([5, 0, 1, 3, 2])).toBe(4);
        expect(findMissingNumber([7, 9, 10, 11, 12])).toBe(8);
    });
    
    test('Returns next number if no number is missing in array', () => {
        expect(findMissingNumber([1, 4, 3, 2, 5])).toBe(6);
    });
    
    test('Handles negative numbers', () => {
        expect(findMissingNumber([-5, -7, 0, 1, -4, -3, -6, -2, -1])).toBe(2);
    });
    
    test('Handles duplicate numbers', () => {
        expect(findMissingNumber([1, 4, 3, 4, 2, 5, 6, 7, 6])).toBe(8);
    });
    
    test('Returns 0 if empty array', () => {
        expect(findMissingNumber([])).toBe(0);
    });

    test('Handles strings', () => {
        expect(findMissingNumber([4, '1', 'value', 'values', 0, '2'])).toBe(3);
    })

    test('Handles undefined, null, objects', () => {
        expect(findMissingNumber([undefined, 1, 2, 4, NaN])).toBe(3);
        expect(findMissingNumber([1, null, [], 2, 3, 5])).toBe(4);
    })
    
    test('Handles large numbers', () => {
        expect(findMissingNumber([1000000000000, 999999999999, 999999999998])).toBe(1000000000001);
    });
})