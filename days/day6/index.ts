export const parseLab = (input: string): string[][] => {
    const labRows = input.split(/\n\s*/);
    const labGrid = labRows.map(labRow => labRow.split(''));
    return labGrid;
};

export type Position = {
    direction: DIRECTION;
    coords: [number, number];
}
export type DIRECTION = '^'|'>'|'<'|'v';

export const findCurrentPosition = (labGrid: string[][]): Position => {
    let c: Position;
    const startingPoint = labGrid.reduce((coords, row, rowIdx) => {
        const matchingColIdx = row.forEach((col, colIdx) => {
            if (col == '^' ||
                col == '>' ||
                col == '<' ||
                col == 'v'
             ) {  // could be any of: <^>v - needs tests
                coords = {coords: [rowIdx, colIdx], direction: col};
            }
        });
        return coords;
    }, c);
    return startingPoint;
};

// REFACTOR to always pass it in
export const isFacingObstacle = (labGrid: string[][], position?:Position): boolean => {
    const currPosition = position || findCurrentPosition(labGrid);
    const [x,y] = currPosition.coords;

    let potentialObstacleCoords;
    if (currPosition.direction == '^') {
        potentialObstacleCoords = [x-1, y];
    } else if (currPosition.direction == 'v') {
        potentialObstacleCoords = [x+1, y];
    } else if (currPosition.direction == '>') {
        potentialObstacleCoords = [x, y+1];
    } else if (currPosition.direction == '<') {
        potentialObstacleCoords = [x, y-1];
    }

    const potentialObstacle = labGrid[potentialObstacleCoords[0]]?.[potentialObstacleCoords[1]];
    console.log({potentialObstacleCoords, potentialObstacle});

    return potentialObstacle === '#' ;
};

export const isFacingOutOfBounds = (labGrid: string[][], currPosition: Position): boolean => {
    const [x,y] = currPosition.coords;

    let potentialObstacleCoords;
    if (currPosition.direction == '^') {
        potentialObstacleCoords = [x-1, y];
    } else if (currPosition.direction == 'v') {
        potentialObstacleCoords = [x+1, y];
    } else if (currPosition.direction == '>') {
        potentialObstacleCoords = [x, y+1];
    } else if (currPosition.direction == '<') {
        potentialObstacleCoords = [x, y-1];
    }

    return isOutOfBounds(labGrid, potentialObstacleCoords)
};

// make coords a real type
export const isOutOfBounds = (labGrid: string[][], coords: [number, number]): boolean => {
    console.log('check isoob', {coords});
    const [x,y] = coords;

    // this worked on the test data and failed on the real data at first
    // because I didn't subtract from the .length so one was pre-oob, and one was already oob
    // and the test data is oob > len, and the real data is oob < 0
    const MAX_X = labGrid.length-1;
    const MAX_Y = labGrid[0].length-1;
    const MIN_X = 0;
    const MIN_Y = 0;

    return x > MAX_X || 
           y > MAX_Y || 
           x < MIN_X ||
           y < MIN_Y;
};

export const moveInNewDirection = (currPosition: Position): Position => {
    let newPosition:Position;
    
    const [x,y] = currPosition.coords;

    if (currPosition.direction == '^') {
        newPosition = {
            coords: [x-1, y],
            direction: '>'
        };
    } else if (currPosition.direction == 'v') {
        newPosition = {
            coords: [x+1, y],
            direction: '<'
        }
    } else if (currPosition.direction == '>') {
        newPosition = {
            coords: [x, y+1],
            direction: 'v'
        }
    } else if (currPosition.direction == '<') {
        newPosition = {
            coords: [x, y-1],
            direction: '^'
        }
    }

    return newPosition;
};

export const move = (currPosition: Position, isFacingObstacle: boolean): Position => {
    let newPosition:Position;
    
    // lol these WERE the wrong way round, my setup is y, x :\
    const [y, x] = currPosition.coords;

    let newCoords, newDirection;
    if (isFacingObstacle) {
        if (currPosition.direction == '^') {
            newCoords = [y, x+1];
            newDirection= '>';
        } else if (currPosition.direction == 'v') {
            newCoords = [y, x-1];
            newDirection = '<';
        } else if (currPosition.direction == '>') {
            newCoords = [y+1, x];
            newDirection = 'v';
        } else if (currPosition.direction == '<') {
            newCoords = [y-1, x];
            newDirection = '^';
        }
    } else {
        newDirection = currPosition.direction;
        if (currPosition.direction == '^') {
            newCoords = [y-1, x];
        } else if (currPosition.direction == 'v') {
            newCoords = [y+1, x];
        } else if (currPosition.direction == '>') {
            newCoords = [y, x+1];
        } else if (currPosition.direction == '<') {
            newCoords = [y, x-1];
        } 
    }
    newPosition = {
        coords: newCoords,
        direction: newDirection
    };

    console.log({isFacingObstacle, currPosition, newPosition});

    return newPosition;
};

export const moveUntilOutOfBounds = (input: string): string[][] => {
    const labGrid = parseLab(input);

    let pos = findCurrentPosition(labGrid);

    while (!isOutOfBounds(labGrid, pos.coords)) {
        labGrid[pos.coords[0]][pos.coords[1]] = 'x';
        
        const facingObstacle = isFacingObstacle(labGrid, pos);
        
        pos = move(pos, facingObstacle);
    }
    console.log('last pos', pos);

    return labGrid;
};

export const countMovements = (labGrid: string[][]): number => {
    return labGrid.reduce((count, row) => {
        row.forEach((col) => {
            if (col == 'x') {
                count++;
            }
        });
        return count;
    }, 0);
}

export const countInBoundMovements = (input: string): number => {
    const labGrid = moveUntilOutOfBounds(input);
    const movementCount = countMovements(labGrid);

    drawGrid(labGrid);
    console.log('FIN', movementCount);
    return movementCount;
};

const drawGrid = (labGrid: string[][]) => {
    const rows = labGrid.map((row, rIdx) => {
        const prefix = rIdx + ':';
        const rowValues = row.join('');
        return prefix + rowValues;
    }).join('\n');
    const header = ' :' + Array.from({length: labGrid.length}, (v, i) => i).join('') + '\n';
    console.log(header + rows);
}