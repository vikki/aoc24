export const getTotalCalibrationResult = (input: string): number => {
    const ropeBridgeEquations = parseRopeBridgeEquations(input);

    return ropeBridgeEquations.filter(rbe => {
        const eqTotals = generatePossibleEquationCombos(rbe.equationComponents);
        return eqTotals.includes(rbe.testValue);
    }).map(matchingRbe => matchingRbe.testValue)
    .reduce((acc, val) => acc + val);
}

type RopeBridgeEquation = {
    testValue: number;
    equationComponents: number[];
}

export const parseRopeBridgeEquations = (input: string): RopeBridgeEquation[] => {
    const rows = input.split(/\n\s*/);
    return rows.map((row) => {
        const [testValue, inputString] =  row.split(/\s*:\s*/);
        const inputs = inputString.split(' ');

        return {
            testValue: parseInt(testValue, 10),
            equationComponents: inputs.map(i => parseInt(i, 10))
        };
    });
};

export const generatePossibleEquationCombos = (equationInputs: number[]): number[] => {
    return equationInputs.reduce((acc, val, idx) => {
        const a = equationInputs[idx];
        const b = equationInputs[idx+1];

        if (!b) {
            return acc;
        }

        if (acc && acc.length > 0) {
            return acc.flatMap( existing => {
                return [existing*b, existing+b];
            })
        } else {
            return [a*b, a+b];
        }
    }, []);
};

// deprecated alt for generatePossibleEquationCombos but helped me think it through!
export const __generatePossibleEquationCombosWithEval = (equationInputs: number[]): number[] => {
    const sum = equationInputs.reduce((total, i) => total + i);
    const product = equationInputs.reduce((total, i) => total * i);

    const operators = ['*', '+'];
    // option 1 is math.eval 😱 But need to enforce LTR! brackets works 💪
    // option 2 is to create rolling totals, I think that is allowed?
    const eqs = equationInputs.reduce((acc, val, idx) => {
        const a = equationInputs[idx];
        const b = equationInputs[idx+1];

        if (!b) {
            return acc;
        }

        let out;
        if (acc && acc.length > 0) {
            out = acc.flatMap( existing => {
                return operators.map(op => `(${existing})${op}${b}`)
            })
        } else {
            out = operators.map(op => `${a}${op}${b}`);
        }

        console.log({out});
        return out;
    }, []);

    console.log({eqs});

    const totals = eqs.map(eq => eval(eq));

    return totals;
};