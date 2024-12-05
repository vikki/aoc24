export const compareHistorianVisitLists = (listsAsStr: string): number => {
    const lists = parseList(listsAsStr);
    return compareHistorianVisitArrayList(lists);
};

// should enforce that they are the same length
// or maybe use an array of tuples which is way easier
export type ListOfLists = [number[], number[]];

export const compareHistorianVisitArrayList = (lists: ListOfLists): number => {
    // TDD: throw if diff lengths
    const listA = lists[0].sort();
    const listB = lists[1].sort();

    console.log('wat b4');
    return listA.reduce((curr, prev, idx) => {
        console.log({prev, curr});
        const diff = Math.abs(listA[idx] - listB[idx]); // dbl check need abs
        console.log(listA[idx], listB[idx], {diff, prev});
        return curr + diff;
    }, 0);
};

export const parseList = (listsAsStr: string): ListOfLists => {
    const lines = listsAsStr.split(/\n\s+/, );

    const groupedLines: ListOfLists = [[], []];

    lines.reduce((prev, curr) => {
        const output = curr.split(/\s+/);

        if (curr === '') {
            return;
        }

        if (
            output?.length != 2 ||
            output[0].length < 1 ||
            output[1].length < 1
        ) {
            throw new Error('list in wrong format');
        }

        const a = parseInt(output[0], 10);
        const b = parseInt(output[1], 10);

        if (isNaN(a) || isNaN(b)) {
            throw new Error('list in wrong format');
        }

        prev[0].push(a);
        prev[1].push(b);
        return prev;
    }, groupedLines);

    return groupedLines;
};