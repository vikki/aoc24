import { compareHistorianVisitArrayList, compareHistorianVisitLists, ListOfLists, parseList } from ".";

describe('day 1', () => {
    it('compareHistorianVisitLists returns expected result when given example input', () => {
        const expectedOutput = 11;

        const exampleInput = 
           `3   4
            4   3
            2   5
            1   3
            3   9
            3   3`;

        const actualOutput = compareHistorianVisitLists(exampleInput);

        expect(actualOutput).toEqual(expectedOutput);
    });

    describe('compareHistorianVisitArrayList', () => {
        it('', () => {
            const expectedOutput = 4;
            const exampleInput: ListOfLists = [[2, 4], [7, 3]];
            const actualOutput = compareHistorianVisitArrayList(exampleInput);
            expect(actualOutput).toEqual(expectedOutput);

        });
    });

    describe('parseLists', () => {
        it('(singleline) splits input into 2 lists, taking 1 value from each line', () => {
            const exampleInput = 
            `3   4`;

            const expectedOutput = [[3], [4]];
            const actualOutput = parseList(exampleInput);

            expect(actualOutput).toEqual(expectedOutput);
        });

        it('(multiline with empty line) splits input into 2 lists, taking 1 value from each line', () => {
            const exampleInput = 
            `3   4
                4   3`;

            const expectedOutput = [[3, 4], [4, 3]];

            const actualOutput = parseList(exampleInput);

            expect(actualOutput).toEqual(expectedOutput);
        });

        it('(empty line) splits input into 2 lists, taking 1 value from each line', () => {
            const exampleInput = 
            ``;

            const expectedOutput = [[], []];
            const actualOutput = parseList(exampleInput);

            expect(actualOutput).toEqual(expectedOutput);
        });

        it('(multiline) splits input into 2 lists, taking 1 value from each line', () => {
            const exampleInput = 
            `3   4
                4   3`;

            const expectedOutput = [[3, 4], [4, 3]];
            const actualOutput = parseList(exampleInput);

            expect(actualOutput).toEqual(expectedOutput);
        });

        it('(multiline) throws if <2 elements per row', () => {
            const exampleInput = 
            `3   
                4   3`;

            expect(() => parseList(exampleInput)).toThrow();
        });

        it('(multiline) throws if >2 elements per row', () => {
            const exampleInput = 
            `5  6   7  8
                4   3`;

            expect(() => parseList(exampleInput)).toThrow();
        });

        it('(multiline) throws if any elements are not numerical', () => {
            const exampleInput = 
            `5  🧑‍🎄
                4   3`;

            expect(() => parseList(exampleInput)).toThrow();
        });
    })

    
})