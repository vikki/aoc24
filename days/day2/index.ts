type DIRECTION = 'inc'|'dec'|'neither';
export const reportIsSafe = (reportLine: string): boolean => {
    const levels = reportLine.split(' ');

    let direction: DIRECTION;
    return levels.reduce((acc, val, idx) => {
        if (idx === levels.length-1) {
            return acc;
        }

        const a = parseInt(val, 10);
        const b = parseInt(levels[idx+1], 10);
        
        let newDirection: DIRECTION;
        let diff;
        if (a < b) {
            newDirection = 'inc';
            diff = b - a;
        } else if (a == b) {
            newDirection = 'neither';
            diff = a - b;
        } else {
            newDirection = 'dec';
            diff = a - b;
        }

        if (!direction) {
            direction = newDirection;
        }

        if (direction != newDirection || diff > 3) {
            acc = false;
        }

        return acc;
    }, true);

};

export const safeReportCounts = (reportsString: string): number => {
    const reportStrings = reportsString.split(/\n\s*/);

    const safeReports = reportStrings.map(reportStr => reportIsSafe(reportStr));

    return safeReports.filter( x=> !!x).length;
}