export const compareHistorianVisitLists = (listsAsStr: string): number => {
    return -1;
};

type ListOfLists = [number[], number[]];

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