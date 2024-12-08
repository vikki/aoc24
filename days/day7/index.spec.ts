import { generatePossibleEquationCombos, getTotalCalibrationResult } from ".";

const util = require('util');

describe('day7', () => {
    describe('getTotalCalibrationResult', () => {
        it('returns sum of rows whose first value may be calculated by multiplying and/or adding together the post-colon values. Ask the elephants 🐘', () => {
            const input = `190: 10 19
                            3267: 81 40 27
                            83: 17 5
                            156: 15 6
                            7290: 6 8 6 15
                            161011: 16 10 13
                            192: 17 8 14
                            21037: 9 7 18 13
                            292: 11 6 16 20`;

            const actualResult = getTotalCalibrationResult(input);
            const expectedResult = 3749;

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('generatePossibleEquationCombos', () => {
        it('should generate 29 and 190, given [10, 19]', () => {
            const input = [10, 19];
            const expectedOutput = [29, 190];

            const actualOutput = generatePossibleEquationCombos(input);

            expect(actualOutput.sort()).toEqual(expectedOutput.sort());
        });

        it('should generate [3267, 3267, 87480, 148], given [81, 40, 27]', () => {
            const input = [81, 40, 27];
            const expectedOutput = [3267, 3267, 87480, 148];

            const actualOutput = generatePossibleEquationCombos(input);

            expect(actualOutput.sort()).toEqual(expectedOutput.sort());
        });

        it('should generate something, given [11, 6, 16, 20]', () => {
            const input = [11, 6, 16, 20];
            const expectedOutput = [102,1076,1640,21120,292,53,5440,660];

            const actualOutput = generatePossibleEquationCombos(input);

            expect(actualOutput.sort()).toEqual(expectedOutput.sort());
        });
    });
});
