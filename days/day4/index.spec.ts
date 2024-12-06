import { countXmases } from ".";

describe('', () => {

    it('countXmases', () => {

        // ....XXMAS.
        // .SAMXMS...
        // ...S..A...
        // ..A.A.MS.X
        // XMASAMX.MM
        // X.....XA.A
        // S.S.S.S.SS
        // .A.A.A.A.A
        // ..M.M.M.MM
        // .X.X.XMASX
        
        const input = 
            `MMMSXXMASM
             MSAMXMSMSA
             AMXSXMAAMM
             MSAMASMSMX
             XMASAMXAMM
             XXAMMXXAMA
             SMSMSASXSS
             SAXAMASAAA
             MAMMMXMMMM
             MXMXAXMASX`;

        const actualOutput = 18;

        expect(countXmases(input)).toEqual(actualOutput);
    });
});