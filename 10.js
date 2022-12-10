const test = require('./test').test;

const ADDX = "addx";
const NOOP = "noop";

const parse = (instructionLines) => {
    return instructionLines.map((line) => {
        const split = line.split(" ");
        if (split[0] === ADDX && split.length === 2) {
            return { 
                op: ADDX,
                p1: parseInt(split[1])
            };
        } else if (split[0] === NOOP && split.length === 1) {
            return { op: NOOP };
        } else {
            throw new Error(`Unknown op: ${line}`);
        }
    });
};

// Returns register values by cycle
const execute = (instructions) => {
    const instructionQueue = instructions;
    const registerValuesByCycle = [];
    instructionQueue.forEach((instruction) => {
        const currentRegisterValues = registerValuesByCycle.length === 0 ? 
            { x: 1 } :
            { ...registerValuesByCycle[registerValuesByCycle.length-1] };
        switch(instruction.op) {
            // 2 cycles
            // push current values, add, then push again
            case ADDX:
                registerValuesByCycle.push(currentRegisterValues);
                const newRegisterValues = { ...currentRegisterValues };
                newRegisterValues.x += instruction.p1;
                registerValuesByCycle.push(newRegisterValues);
                break;
            // 1 cycle
            // push current values
            case NOOP:
                registerValuesByCycle.push(currentRegisterValues);
                break;
        }
    });
    return registerValuesByCycle;
}

const getPart1Total = (registerValues) => {
    let total = 0;
    for (let i = 1; i < registerValues.length+1; i++) {
        if (i+1 === 20 || (i+1+20) % 40 === 0) {
            total += registerValues[i-1].x * (i+1);
        }
    }
    return total;
};

const getCrtRows = (registerValues) => {
    const screenWidth = 40;
    const screenHeight = 6;
    const crtRows = [];
    for (let i = 0; i < screenHeight; i++) {
        crtRows.push(new Array(screenWidth).fill('.'))
    }
    crtRows[0][0] = "#"

    for (let i = 0; i < screenHeight; i++) {
        for (let j = 0; j < screenWidth; j++) {
            if (i === 0 && j === 0) {
                continue;
            }
            const cycle = i*screenWidth + j-1;
            const valAtCycle = registerValues[cycle].x;
            if (j >= valAtCycle-1 && j <= valAtCycle+1) {
                crtRows[i][j] = "#";
            }
        }
    }

    return crtRows;
};

const printCrtRows = (crtRows) => {
    crtRows.forEach((row) => console.log(row.join("")));
};

const sol = (input) => {
    const instructions = input.split("\n");
    const ops = parse(instructions);
    const registerValues = execute(ops);
    const total = getPart1Total(registerValues);
    return total;
};

const sol2 = (input) => {
    const instructions = input.split("\n");
    const ops = parse(instructions);
    const registerValues = execute(ops);
    const crtRows = getCrtRows(registerValues);
    printCrtRows(crtRows);
}


const prompt1 =
`addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`;
const expected1 = 13140;

const prompt2 =
`noop
noop
noop
noop
addx 5
addx 5
noop
addx 3
noop
addx 2
addx 1
noop
noop
noop
addx 4
addx -4
addx 7
addx 7
noop
addx -2
addx 5
addx -23
addx 26
addx -38
noop
noop
noop
addx 3
addx 2
addx 5
addx 2
addx 9
addx -8
addx 2
addx 16
addx -9
addx 3
addx -2
addx 2
noop
addx 7
addx -2
addx 5
addx 2
addx 3
noop
addx -40
addx 5
noop
addx 2
addx -6
addx 11
addx -1
addx 3
addx 3
noop
noop
noop
addx 5
addx -2
noop
addx 7
addx 8
addx -2
addx -3
addx 5
addx 2
addx -10
addx -26
addx 1
noop
addx 8
addx -5
addx 4
addx 3
addx -3
addx 4
addx 2
addx -9
addx 16
addx 2
noop
addx 3
addx 3
addx 2
addx -2
addx 5
addx 2
addx 2
noop
addx -38
addx 34
addx -28
addx -2
addx 5
addx 2
addx 3
addx -2
addx 2
addx 7
noop
noop
addx -4
addx 5
addx 2
addx 15
addx -8
addx 3
noop
addx 2
addx -8
addx 9
addx -38
addx 26
noop
addx -18
noop
noop
addx 4
addx 4
addx -3
addx 2
addx 20
addx -12
noop
noop
noop
addx 4
addx 1
noop
addx 5
noop
noop
addx 5
noop
noop
noop
noop
noop
noop
noop`;

test(sol, prompt1, expected1);
sol2(prompt1);
console.log(sol(prompt2));
sol2(prompt2);