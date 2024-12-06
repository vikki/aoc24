
// :) horizontal
// :) vertical
// diagonal, 
// :) written backwards
// ? or even overlapping other words

const util = require('util');

export const countXmases = (inputStr: string): number => {
    const lines = inputStr.split(/\n\s*/);
    const chars = lines.map(line => line.split(''));
    console.log({chars});


    // start with once per line/column

    const xmases: Record<string, [number, number][]> = {
        forwards: [],
        backwards: [],
        down: [],
        up: [],
        forwardsDownDiag: [],
        forwardsUpDiag: [],
        backwardsUpDiag: [],
        backwardsDownDiag: [],
    };
    
    // consider refactor to handle everything the same way (don't change idx + XMAS/SAMX)
    chars.forEach((line, lineIdx) => {
        line.forEach((char, charIdx) => {
            // forwards
            if (char === 'X' &&
                line[charIdx+1] == 'M' && 
                line[charIdx+2] == 'A' && 
                line[charIdx+3] == 'S') {
                xmases.forwards.push([lineIdx, charIdx]);
                console.log(`found fw ${char}${line[charIdx+1]}${line[charIdx+2]}${line[charIdx+3]} at ${lineIdx}-${charIdx}`)
            }

            // backwards
            if (char === 'S' &&
                line[charIdx+1] == 'A' && 
                line[charIdx+2] == 'M' && 
                line[charIdx+3] == 'X') {
                xmases.backwards.push([lineIdx, charIdx]);
                console.log(`found bw ${char}${line[charIdx+1]}${line[charIdx+2]}${line[charIdx+3]} at ${lineIdx}-${charIdx}`)
            }

            // down
            if (char === 'X' &&
                lines[lineIdx+1]?.[charIdx] == 'M' && 
                lines[lineIdx+2]?.[charIdx] == 'A' && 
                lines[lineIdx+3]?.[charIdx] == 'S') {
                xmases.down.push([lineIdx, charIdx]);
                console.log(`found down ${char}${lines[lineIdx+1][charIdx]}${lines[lineIdx+2][charIdx]}${lines[lineIdx+3][charIdx]} at ${lineIdx}-${charIdx}`)
            }

            // up
            if (char === 'S' &&
                lines[lineIdx+1]?.[charIdx] == 'A' && 
                lines[lineIdx+2]?.[charIdx] == 'M' && 
                lines[lineIdx+3]?.[charIdx] == 'X') {
                xmases.up.push([lineIdx, charIdx]);
                console.log(`found up ${char}${lines[lineIdx+1][charIdx]}${lines[lineIdx+2][charIdx]}${lines[lineIdx+3][charIdx]} at ${lineIdx}-${charIdx}`)
            }

            // fw-downdiag
            if (char === 'X' &&
                lines[lineIdx+1]?.[charIdx+1] == 'M' && 
                lines[lineIdx+2]?.[charIdx+2] == 'A' && 
                lines[lineIdx+3]?.[charIdx+3] == 'S') {
                xmases.forwardsDownDiag.push([lineIdx, charIdx]);
                console.log(`found fw diag ${char}${lines[lineIdx+1][charIdx+1]}${lines[lineIdx+2][charIdx+2]}${lines[lineIdx+3][charIdx+3]} at ${lineIdx}-${charIdx}`)
            }

            // fw-updiag
            if (char === 'X' &&
                lines[lineIdx-1]?.[charIdx+1] == 'M' && 
                lines[lineIdx-2]?.[charIdx+2] == 'A' && 
                lines[lineIdx-3]?.[charIdx+3] == 'S') {
                xmases.forwardsUpDiag.push([lineIdx, charIdx]);
                console.log(`found fw diag ${char}${lines[lineIdx-1][charIdx+1]}${lines[lineIdx-2][charIdx+2]}${lines[lineIdx-3][charIdx+3]} at ${lineIdx}-${charIdx}`)
            }

            // bw-up diag
            if (char === 'S' &&
                lines[lineIdx+1]?.[charIdx+1] == 'A' && 
                lines[lineIdx+2]?.[charIdx+2] == 'M' && 
                lines[lineIdx+3]?.[charIdx+3] == 'X') {
                xmases.backwardsUpDiag.push([lineIdx, charIdx]);
                console.log(`found bw diag ${char}${lines[lineIdx+1][charIdx+1]}${lines[lineIdx+2][charIdx+2]}${lines[lineIdx+3][charIdx+3]} at ${lineIdx}-${charIdx}`)
            }

            // bw-down diag
            if (char === 'S' &&
                lines[lineIdx-1]?.[charIdx+1] == 'A' && 
                lines[lineIdx-2]?.[charIdx+2] == 'M' && 
                lines[lineIdx-3]?.[charIdx+3] == 'X') {
                xmases.backwardsDownDiag.push([lineIdx, charIdx]);
                console.log(`found bw diag ${char}${lines[lineIdx-1][charIdx+1]}${lines[lineIdx-2][charIdx+2]}${lines[lineIdx-3][charIdx+3]} at ${lineIdx}-${charIdx}`)
            }

        });
    });

    const total = Object.values(xmases).reduce((acc,val) => acc+val.length, 0);
    console.log(util.inspect({total, xmases}, {depth:null}));

    return total;
};