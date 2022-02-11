const comparisionOperation = require('./comparision');

describe("Comparision tests", () => {
    test('3=3 should return true', () => {
        var result = comparisionOperation.equal(3, 3)
        // assert
        expect(result).toBe(true);
    });
    
    test('4=3 should return false', () => {
        // arrange and act
        var result = comparisionOperation.equal(4, 3)

        // assert
        expect(result).toBe(false);
    });

    test('4>3 should return true', () => {
        // arrange and act
        var result = comparisionOperation.greater(4, 3)

        // assert
        expect(result).toBe(true);
    });

    test('4>13 should return false', () => {
        // arrange and act
        var result = comparisionOperation.greater(4, 13)

        // assert
        expect(result).toBe(false);
    });

    test('4>4 should return false', () => {
        // arrange and act
        var result = comparisionOperation.greater(4, 4)

        expect(result).toBe(false);
    });

    test('4<13 should return true', () => {
        // arrange and act
        var result = comparisionOperation.less(4, 12)

        expect(result).toBe(true);
    });

    test('14<13 should return false', () => {
        // arrange and act
        var result = comparisionOperation.less(14, 13)

        // assert
        expect(result).toBe(false);
    });

    test('4<4 should return false', () => {
        // arrange and act
        var result = comparisionOperation.less(4, 4)

        // assert
        expect(result).toBe(false);
    });

    test('Add new 4<4 should return false', () => {
        // arrange and act
        var result = comparisionOperation.less(4, 4)

        // assert
        expect(result).toBe(false);
    });
    
    test('1 4<4 should return false', () => {
        // arrange and act
        var result = comparisionOperation.less(4, 4)

        // assert
        expect(result).toBe(false);
    });
    
    test('2 4<4 should return false', () => {
        // arrange and act
        var result = comparisionOperation.less(4, 4)

        // assert
        expect(result).toBe(false);
    });
  
    test('4<=4 should return true', () => {
        // arrange and act
        var result = comparisionOperation.lessThanEqual(4, 4)

        // assert
        expect(result).toBe(true);
    });
    
    test('5<=7 should return true', () => {
        // arrange and act
        var result = comparisionOperation.lessThanEqual(5, 7)

        // assert
        expect(result).toBe(true);
    });
})
