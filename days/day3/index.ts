export const runMultipleCommands = (commandStr: string): number => {
    const commands = findValidCommands(commandStr);

    const matcher = new RegExp(/mul\((\d+),(\d+)\)/);
    return commands.reduce((acc, multiplyCommandStr) => {
        const g = matcher.exec(multiplyCommandStr);

        // validate g length, and whether parsing works
        
        const a = parseInt(g[1], 10);
        const b = parseInt(g[2], 10);

        const multiplyOutput = a*b;
        
        return acc + multiplyOutput;
    }, 0);
    
    //return -1;
}

export const findValidCommands = (commandStr: string): string[] => {
    return commandStr.match(/mul\(\d+,\d+\)/g);
}