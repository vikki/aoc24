import { checkElfPages, countMiddleMatchingElfPages, ElfDets, PageList, PageOrderingRules, pagesInCorrectOrder, parseElfDets } from ".";
const util = require('util');

describe('day5', () => {
    describe('countMiddleMatchingElfPages', () => {
        it('returns sum of page lists matching ordering rules', () => {
            const input = `47|53
                97|13
                97|61
                97|47
                75|29
                61|13
                75|53
                29|13
                97|29
                53|29
                61|53
                97|53
                61|29
                47|13
                75|47
                97|75
                47|61
                75|61
                47|29
                75|13
                53|13

                75,47,61,53,29
                97,61,53,29,13
                75,29,13
                75,97,47,61,53
                61,13,29
                97,13,75,29,47`;

                const matchingPageCount = countMiddleMatchingElfPages(input);

                const expectedOutput = 143;

                expect(expectedOutput).toEqual(matchingPageCount);
        });
    });

    describe('checkElfPages', () => {
        it('returns true for page lists matching ordering rules', () => {
            const input = `47|53
                97|13
                97|61
                97|47
                75|29
                61|13
                75|53
                29|13
                97|29
                53|29
                61|53
                97|53
                61|29
                47|13
                75|47
                97|75
                47|61
                75|61
                47|29
                75|13
                53|13

                75,47,61,53,29
                97,61,53,29,13
                75,29,13
                75,97,47,61,53
                61,13,29
                97,13,75,29,47`;

                const matchingPages = checkElfPages(input);

                const expectedOutput: PageList[] = [
                    [75,47,61,53,29],
                    [97,61,53,29,13],
                    [75,29,13]
                ];

                expect(expectedOutput).toEqual(matchingPages);
        });
    });

    describe('pagesInCorrectOrder', () => {
        it('returns true for page lists matching ordering rules', () => {
            const rules: PageOrderingRules = {
                '13': { mustBeBefore: [], mustBeAfter: [ 97, 61, 29, 47, 75, 53 ] },
                '29': { mustBeBefore: [ 13 ], mustBeAfter: [ 75, 97, 53, 61, 47 ] },
                '47': { mustBeBefore: [ 53, 13, 61, 29 ], mustBeAfter: [ 97, 75 ] },
                '53': { mustBeBefore: [ 29, 13 ], mustBeAfter: [ 47, 75, 61, 97 ] },
                '61': { mustBeBefore: [ 13, 53, 29 ], mustBeAfter: [ 97, 47, 75 ] },
                '75': { mustBeBefore: [ 29, 53, 47, 61, 13 ], mustBeAfter: [ 97 ] },
                '97': { mustBeBefore: [ 13, 61, 47, 29, 53, 75 ], mustBeAfter: [] }
              };

              const pageList = [75,47,61,53,29];

              expect(pagesInCorrectOrder(rules, pageList)).toBeTruthy();
        });

        it('returns false for page lists breaking 1 ordering rule', () => {
            const rules: PageOrderingRules = {
                '13': { mustBeBefore: [], mustBeAfter: [ 97, 61, 29, 47, 75, 53 ] },
                '29': { mustBeBefore: [ 13 ], mustBeAfter: [ 75, 97, 53, 61, 47 ] },
                '47': { mustBeBefore: [ 53, 13, 61, 29 ], mustBeAfter: [ 97, 75 ] },
                '53': { mustBeBefore: [ 29, 13 ], mustBeAfter: [ 47, 75, 61, 97 ] },
                '61': { mustBeBefore: [ 13, 53, 29 ], mustBeAfter: [ 97, 47, 75 ] },
                '75': { mustBeBefore: [ 29, 53, 47, 61, 13 ], mustBeAfter: [ 97 ] },
                '97': { mustBeBefore: [ 13, 61, 47, 29, 53, 75 ], mustBeAfter: [] }
              };

              const pageList = [75,97,47,61,53];

              expect(pagesInCorrectOrder(rules, pageList)).toBeFalsy();
        });

        it('returns false for page lists breaking several ordering rules', () => {
            const rules: PageOrderingRules = {
                '13': { mustBeBefore: [], mustBeAfter: [ 97, 61, 29, 47, 75, 53 ] },
                '29': { mustBeBefore: [ 13 ], mustBeAfter: [ 75, 97, 53, 61, 47 ] },
                '47': { mustBeBefore: [ 53, 13, 61, 29 ], mustBeAfter: [ 97, 75 ] },
                '53': { mustBeBefore: [ 29, 13 ], mustBeAfter: [ 47, 75, 61, 97 ] },
                '61': { mustBeBefore: [ 13, 53, 29 ], mustBeAfter: [ 97, 47, 75 ] },
                '75': { mustBeBefore: [ 29, 53, 47, 61, 13 ], mustBeAfter: [ 97 ] },
                '97': { mustBeBefore: [ 13, 61, 47, 29, 53, 75 ], mustBeAfter: [] }
              };

              const pageList = [97,13,75,29,47];

              expect(pagesInCorrectOrder(rules, pageList)).toBeFalsy();
        });

    });

    it('parseElfDets parses the input into day 5 elf dets', () => {
        const input = 
        `47|53
        97|13
        97|61
        97|47
        75|29

        75,47,61,53,29
        97,61,53,29,13`;

        const elfDets = parseElfDets(input);

        const expectedOutput:ElfDets = {
            rules: {
                47: {
                  mustBeBefore: [53],
                  mustBeAfter: [97],  
                },
                97: {
                  mustBeBefore: [13, 61, 47],
                  mustBeAfter: [],  
                }, 
                75: {
                  mustBeBefore: [29],
                  mustBeAfter: [],  
                }, 
                53: {
                  mustBeBefore: [],
                  mustBeAfter: [47],  
                },
                13: {
                  mustBeBefore: [],
                  mustBeAfter: [97],  
                },
                61: {
                  mustBeBefore: [],
                  mustBeAfter: [97],  
                },
                29: {
                  mustBeBefore: [],
                  mustBeAfter: [75],  
                },
            },
            pages: [
                [75,47,61,53,29],
                [97,61,53,29,13]
            ]
        };

        expect(elfDets).toEqual(expectedOutput);
    });

});