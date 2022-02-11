const mathOperations = require('./index');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        var result = mathOperations.sum(1, 2)
        expect(result).toBe(3);
    });
    
    test('difference 3 - 2 should return 1', () => {
        var result = mathOperations.diff(3, 2)
        expect(result).toBe(1);
    });

    test('product 3 * 2 should return 6', () => {
        var result = mathOperations.product(3, 2)
        expect(result).toBe(6);
    });
    
    
    test('test added by testtas9812 product 3 * 2 should return 6', () => {
        var result = mathOperations.product(3, 2)
        expect(result).toBe(6);
    });
})
