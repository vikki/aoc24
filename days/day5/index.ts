const util = require('util');

export type PageOrderingRules = Record<number, {
    mustBeBefore: number[],
    mustBeAfter: number[],
}>;

export type PageList = number[];

export type ElfDets = {
    rules: PageOrderingRules;
    pages: PageList[];
}

export const countMiddleMatchingElfPages = (input: string): number => {
    const matchingPageLists = checkElfPages(input);
    
    return matchingPageLists.reduce((total, pageList) => {
        const middlePageIdx = Math.floor(pageList.length / 2);
        const middlePage = pageList[middlePageIdx];
        return total + middlePage;
    }, 0);
};

export const checkElfPages = (input: string): PageList[] => {
    const elfDets = parseElfDets(input);
    const matchingPageLists = elfDets.pages.filter(page => pagesInCorrectOrder(elfDets.rules, page));
    console.log({matchingPages: matchingPageLists});
    return matchingPageLists;
}

export const pagesInCorrectOrder = (rules: PageOrderingRules, pageList: PageList): boolean => {

    return pageList.every((page, idx) => {
        const matchingRule = rules[page];

        const precedingPages = pageList.slice(0, idx);
        const succedingPages = pageList.slice(idx+1);

        const matchesPrecedence = precedingPages.every(pp => matchingRule.mustBeAfter.includes(pp));
        const matchesSuccedence = succedingPages.every(pp => matchingRule.mustBeBefore.includes(pp));
        //console.log('checking rules', {page, matchingRule, precedingPages, succedingPages, breakPrecedence: matchesPrecedence, breakSuccedence: matchesSuccedence});

        return matchesPrecedence && matchesSuccedence;
    });

    
}

export const parseElfDets = (input: string): ElfDets => {
    const sections = input.split(/\n\n\s*/);
    // check for sections.length === 2

    const ruleLines = sections?.[0].split(/\n\s*/);

    const rules = ruleLines.reduce((rules, ruleLine) => {
        const rulePair = ruleLine.split('|');

        const before = parseInt(rulePair[0], 10);
        const after = parseInt(rulePair[1], 10);

        // check for rulePair.length === 2
        rules[before] = rules[before] || {
            mustBeBefore: [], mustBeAfter: [],
        };
        rules[after] = rules[after] || {
            mustBeBefore: [], mustBeAfter: [],
        };
        rules[before].mustBeBefore.push(after);
        rules[after].mustBeAfter.push(before);

        return rules;
    }, {});

    const pageLines = sections?.[1].split(/\n\s*/);
    const pages = pageLines.map(pageLine => pageLine.split(',').map(n => parseInt(n, 10)));

    return {
        rules,
        pages,
    };
};