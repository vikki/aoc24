const util = require('util');

export const countXmases = (inputStr: string): number => {
    const lines = inputStr.split(/\n\s*/);
    const chars = lines.map(line => line.split(''));

    const xmases: Record<string, [number, number][]> = {
        forwards: [],
        backwards: [],
        down: [],
        up: [],
        fwdowndiag: [],
        fwupdiag: [],
        bwupdiag: [],
        bwdowndiag: [],
    };
    
    chars.forEach((line, lineIdx) => {
        line.forEach((char, charIdx) => {

            const coords = {
                'forwards': {
                    reverse: 'backwards',
                    coords: [
                        [lineIdx, charIdx],
                        [lineIdx, charIdx+1],
                        [lineIdx, charIdx+2],
                        [lineIdx, charIdx+3],
                    ]
                },
                'down': {
                    reverse: 'up',
                    coords: [
                        [lineIdx, charIdx],
                        [lineIdx+1, charIdx],
                        [lineIdx+2, charIdx],
                        [lineIdx+3, charIdx],
                    ]
                },
                'fwdowndiag': {
                    reverse: 'bwupdiag',
                    coords: [
                        [lineIdx, charIdx],
                        [lineIdx+1, charIdx+1],
                        [lineIdx+2, charIdx+2],
                        [lineIdx+3, charIdx+3],
                    ]
                },
                'fwupdiag': {
                    reverse: 'bwdowndiag',
                    coords: [
                        [lineIdx, charIdx],
                        [lineIdx-1, charIdx+1],
                        [lineIdx-2, charIdx+2],
                        [lineIdx-3, charIdx+3],
                    ]
                }
            };

            Object.keys(coords).map(dir => {
                const tryWord = coords[dir].coords.map(coord => {
                    return lines[coord[0]]?.[coord[1]]
                }).join('');
    
                if (tryWord === 'XMAS') {
                    xmases[dir].push([lineIdx, charIdx]);
                    console.log(`found ${dir} ${tryWord} at ${lineIdx}-${charIdx}`)
                }
    
                // backwards
                if (tryWord === 'SAMX') {
                    xmases[coords[dir].reverse].push([lineIdx, charIdx]);
                    console.log(`found ${coords[dir]} ${tryWord} at ${lineIdx}-${charIdx}`)
                }
            });


        });
    });

    const total = Object.values(xmases).reduce((acc,val) => acc+val.length, 0);
    console.log(util.inspect({total, xmases}, {depth:null}));

    return total;
};