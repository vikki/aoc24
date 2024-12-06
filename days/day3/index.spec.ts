import { findValidCommands } from ".";
import { runMultipleCommands } from ".";

describe('day 3', () => {
    describe('runMultipleCommands', () => {
        it('should run all of the valid mul(x,y) instructions in the provided input', () => {
            const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

            const actualSafeReportsCount = 161;

            expect(runMultipleCommands(input)).toEqual(actualSafeReportsCount);
        });
    });

    describe('findValidCommands', () => {
        it('should run all of the valid mul(x,y) instructions in the provided input', () => {
            const input = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;

            // remember do_not_mul does not count
            const actualSafeReportsCount = [
                'mul(2,4)',
                'mul(5,5)',
                'mul(11,8)',
                'mul(8,5)'
            ];

            expect(findValidCommands(input)).toEqual(actualSafeReportsCount);
        });
    });
});