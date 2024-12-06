import { safeReportCounts } from ".";
import { reportIsSafe } from ".";

describe.only('day 2', () => {
    describe('reportIsSafe: ', () => {
        it('Safe because the levels are all decreasing by 1 or 2.', () => {
            const row = '7 6 4 2 1';
            expect(reportIsSafe(row)).toBeTruthy();
        });

        it('Unsafe because 2 7 is an increase of 5.', () => {
            const row = '1 2 7 8 9';
            expect(reportIsSafe(row)).toBeFalsy();
        });

        it('Unsafe because 6 2 is a decrease of 4.', () => {
            const row = '9 7 6 2 1';
            expect(reportIsSafe(row)).toBeFalsy();
        });

        it('Unsafe because 1 3 is increasing but 3 2 is decreasing.', () => {
            const row = '1 3 2 4 5';
            expect(reportIsSafe(row)).toBeFalsy();
        });

        it('Unsafe because 4 4 is neither an increase or a decrease.', () => {
            const row = '8 6 4 4 1';
            expect(reportIsSafe(row)).toBeFalsy();
        });

        it('Safe because the levels are all increasing by 1, 2, or 3.', () => {
            const row = '1 3 6 7 9';
            expect(reportIsSafe(row)).toBeTruthy();
        });
    });

    describe('safeReportCounts', () => {
        it('should return a count of every row that matches, as per reportIsSafe', () => {
            const rows = 
            `7 6 4 2 1
            1 2 7 8 9
            9 7 6 2 1
            1 3 2 4 5
            8 6 4 4 1
            1 3 6 7 9`;

            const actualSafeReportsCount = 2;

            expect(safeReportCounts(rows)).toEqual(actualSafeReportsCount);
        })
        
    
    });


});