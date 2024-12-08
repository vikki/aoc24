import { countInBoundMovements, countMovements, findCurrentPosition, isFacingObstacle, move, moveInNewDirection, moveUntilOutOfBounds, parseLab, Position } from ".";

describe('', () => {
    describe('', () => {
        it('findStartingPoint', () => {
            const input = 
            `....#.....
            .........#
            ..........
            ..#.......
            .......#..
            ..........
            .#..^.....
            ........#.
            #.........
            ......#...`;

            const labGrid = parseLab(input);

            const startingPosition = findCurrentPosition(labGrid);
            const expectedStartingPosition = [6,4];
            const expectedDirection = '^';

            expect(startingPosition.coords).toEqual(expectedStartingPosition);
            expect(startingPosition.direction).toEqual(expectedDirection);
        });
    });

    it('countInBoundMovements returns a count of movements until moving out of bounds (per day 6 rules)', () => {
        const input = 
       `....#.....
        .........#
        ..........
        ..#.......
        .......#..
        ..........
        .#..^.....
        ........#.
        #.........
        ......#...`;

        const movementCount = countInBoundMovements(input);
        const expectedCount = 41;

        expect(movementCount).toEqual(expectedCount);

    });

    it('isFacingObstacle returns false, not facing obstacle', () => {
        const labGrid = [
            ['.', '.', '.'],
            ['.', '>', '.'],
            ['.', '.', '#']
        ];

        const isFacing = isFacingObstacle(labGrid);

        expect(isFacing).toBeFalsy();
    });

    it('isFacingObstacle returns true, when facing obstacle', () => {
        const labGrid = [
            ['.', '.', '.'],
            ['.', '>', '#'],
            ['.', '.', '#']
        ];

        const isFacing = isFacingObstacle(labGrid);

        expect(isFacing).toBeTruthy();
    });

    it('moveInNewDirection, 90 deg to down', () => {
        const before: Position = {
            direction: '>',
            coords: [2,3]
        };

        const actualResult = moveInNewDirection(before);
        const expectedResult: Position = {
            direction: 'v',
            coords: [2,4]
        }

        expect(actualResult).toEqual(expectedResult);
    });

    it('moveInNewDirection, 90 deg to west', () => {
        const before: Position = {
            direction: 'v',
            coords: [1, 5]
        };

        const actualResult = moveInNewDirection(before);
        const expectedResult: Position = {
            direction: '<',
            coords: [2,5]
        };

        expect(actualResult).toEqual(expectedResult);
    });
});