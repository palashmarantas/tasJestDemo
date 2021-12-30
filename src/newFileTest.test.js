const comparisionOperation = require('./newFile');

describe("Comparision tests", () => {
    test('3>2 should return true', () => {
        var result = comparisionOperation.greater(3, 2)

        expect(result).toBe(true);
    });

    test('3>12 should return false', () => {
        // arrange and act
        var result = comparisionOperation.greater(3, 12)

        // assert
        expect(result).toBe(false);
    });

    test('3>3 should return false', () => {
        // arrange and act
        var result = comparisionOperation.greater(3, 3)

        // assert
        expect(result).toBe(false);
    });


    test('3<2 should return true', () => {
        // arrange and act
        var result = comparisionOperation.less(3, 2)

        // assert
        expect(result).toBe(false);
    });

    test('3<12 should return false', () => {
        // arrange and act
        var result = comparisionOperation.less(3, 12)

        // assert
        expect(result).toBe(true);
    });

    test('3<3 should return false', () => {
        // arrange and act
        var result = comparisionOperation.less(3, 3)

        // assert
        expect(result).toBe(false);
    });
    
    test('new test added by arjun-rathi', () => {
        // arrange and act
        var result = comparisionOperation.less(2, 3)

        // assert
        expect(result).toBe(true);
    });
})
