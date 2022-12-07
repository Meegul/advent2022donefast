const parseCrates = (lines, numColumns, numCrates) => {
    //console.log(numCrates);
    const crateArray = new Array(numCrates).fill([]);
    for (let i = 0; i < crateArray.length; i++) {
        crateArray[i] = new Array(numColumns);
    }
    //console.log(crateArray);

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        //console.log(line);

        for (let j = 0; j < numColumns; j++) {
            const char = line[j*4+1];
            //console.log(j*4+1, char)
            if (char !== ' ')
                crateArray[i][j] = char;
        }
    }
    return crateArray;
};

const moveCrates = (crateMatrix, commandLines) => {
    commandLines.forEach((command) => {
        const components = command.split(" ");
        const quantity = parseInt(command[1]);
        const from = parseInt(command[3]);
        const to = parseInt(command[5]);

        
    });
    return crateMatrix;
};

const getTopOfStacks = (crateArray, numColumns) => {
    const tops = new Array(numColumns);

    for (i = 0; i < crateArray.length; i++) {
        const crateRow = crateArray[0];
        for (j = 0; j < numColumns; j++) {
            const char = crateArray[i][j];
            if (char !== undefined) tops[j] = char;
        }
    }
    return tops.join();
}

const sol = (input) => {
    const lines = input.split("\n");
    const firstLineLength = lines[0].length;

    const numColumns = (firstLineLength+1)/4;
    let totalNumCrates = 0;

    let delimiterLineIndex = -1;
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        //console.log(line)
        const numCratesInRow = (line.match(/\[/g) || []).length;
        totalNumCrates += numCratesInRow;
        if (line[1] === "1") {
            delimiterLineIndex = i + 1;
            break;
        }
    }
    //console.log(delimiterLineIndex);
    const crateLines = lines.slice(0, delimiterLineIndex-1);
    //console.log(crateLines)
    const commandLines = lines.slice(delimiterLineIndex+1);
    const crateMatrix = parseCrates(crateLines.reverse(), numColumns, totalNumCrates);
    
    console.log(crateMatrix);
    
    const updatedCrates = moveCrates(crateMatrix, commandLines);
    const topString = getTopOfStacks(updatedCrates, numColumns);
    
    //console.log(topString);
};

const sol2 = () => {return};

// 3 + 1 + 3 + 1 + 3 = length
// numColumns * 3 + (numColumns - 1) = length
// numColumns=(length+1)/4
sol(`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`)

sol(`        [Z]
        [N]
        [D]
[C] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`)

sol2(
`            [J] [Z] [G]            
            [Z] [T] [S] [P] [R]    
[R]         [Q] [V] [B] [G] [J]    
[W] [W]     [N] [L] [V] [W] [C]    
[F] [Q]     [T] [G] [C] [T] [T] [W]
[H] [D] [W] [W] [H] [T] [R] [M] [B]
[T] [G] [T] [R] [B] [P] [B] [G] [G]
[S] [S] [B] [D] [F] [L] [Z] [N] [L]
 1   2   3   4   5   6   7   8   9 

move 4 from 2 to 1
move 1 from 6 to 9
move 6 from 4 to 7
move 1 from 2 to 5
move 3 from 6 to 3
move 4 from 3 to 9
move 2 from 1 to 3
move 6 from 7 to 5
move 5 from 7 to 6
move 6 from 8 to 7
move 6 from 7 to 6
move 1 from 8 to 3
move 15 from 6 to 4
move 7 from 5 to 6
move 1 from 7 to 2
move 2 from 5 to 3
move 5 from 9 to 8
move 5 from 5 to 6
move 1 from 7 to 4
move 5 from 6 to 5
move 3 from 3 to 8
move 4 from 5 to 8
move 1 from 2 to 8
move 7 from 1 to 2
move 2 from 6 to 2
move 2 from 5 to 8
move 1 from 1 to 8
move 8 from 2 to 6
move 3 from 3 to 4
move 4 from 9 to 3
move 5 from 3 to 6
move 5 from 6 to 8
move 3 from 4 to 8
move 13 from 6 to 5
move 14 from 4 to 8
move 1 from 2 to 6
move 1 from 4 to 2
move 12 from 5 to 4
move 30 from 8 to 6
move 1 from 8 to 9
move 1 from 9 to 4
move 15 from 4 to 5
move 1 from 2 to 9
move 1 from 4 to 2
move 1 from 2 to 1
move 1 from 9 to 3
move 8 from 5 to 7
move 2 from 5 to 6
move 7 from 8 to 1
move 1 from 3 to 4
move 1 from 7 to 3
move 1 from 4 to 6
move 26 from 6 to 7
move 1 from 3 to 7
move 3 from 7 to 2
move 1 from 1 to 9
move 16 from 7 to 5
move 2 from 7 to 4
move 12 from 7 to 6
move 1 from 1 to 9
move 4 from 6 to 1
move 7 from 1 to 5
move 2 from 1 to 8
move 1 from 7 to 2
move 1 from 1 to 4
move 2 from 4 to 5
move 1 from 9 to 4
move 3 from 6 to 9
move 8 from 6 to 5
move 5 from 5 to 9
move 19 from 5 to 8
move 1 from 9 to 8
move 3 from 8 to 7
move 1 from 7 to 3
move 8 from 5 to 2
move 2 from 4 to 2
move 4 from 9 to 8
move 1 from 2 to 3
move 2 from 3 to 2
move 4 from 9 to 5
move 8 from 8 to 4
move 9 from 8 to 5
move 5 from 8 to 4
move 5 from 5 to 7
move 12 from 2 to 3
move 2 from 2 to 8
move 1 from 8 to 6
move 1 from 8 to 7
move 10 from 4 to 3
move 1 from 2 to 9
move 13 from 5 to 3
move 1 from 7 to 5
move 27 from 3 to 4
move 1 from 8 to 7
move 3 from 5 to 2
move 6 from 6 to 3
move 2 from 4 to 1
move 27 from 4 to 2
move 2 from 7 to 8
move 23 from 2 to 4
move 2 from 1 to 4
move 2 from 7 to 2
move 4 from 2 to 9
move 10 from 3 to 4
move 1 from 3 to 5
move 1 from 5 to 1
move 5 from 2 to 5
move 30 from 4 to 2
move 1 from 8 to 9
move 1 from 8 to 1
move 27 from 2 to 3
move 2 from 4 to 2
move 1 from 9 to 4
move 2 from 1 to 3
move 8 from 3 to 7
move 19 from 3 to 1
move 1 from 4 to 7
move 5 from 9 to 1
move 4 from 2 to 9
move 4 from 3 to 4
move 1 from 3 to 5
move 1 from 2 to 7
move 1 from 9 to 3
move 1 from 9 to 1
move 5 from 5 to 4
move 5 from 7 to 3
move 1 from 5 to 6
move 23 from 1 to 6
move 1 from 9 to 2
move 1 from 2 to 5
move 24 from 6 to 9
move 6 from 4 to 7
move 4 from 4 to 8
move 1 from 4 to 9
move 4 from 7 to 4
move 4 from 3 to 4
move 4 from 9 to 8
move 6 from 7 to 9
move 4 from 7 to 6
move 1 from 1 to 4
move 2 from 6 to 4
move 1 from 6 to 2
move 1 from 1 to 8
move 1 from 7 to 3
move 1 from 6 to 9
move 13 from 4 to 2
move 3 from 3 to 2
move 15 from 9 to 8
move 1 from 5 to 9
move 5 from 9 to 1
move 4 from 1 to 7
move 4 from 7 to 3
move 8 from 2 to 7
move 9 from 8 to 2
move 1 from 1 to 2
move 7 from 9 to 2
move 4 from 3 to 1
move 4 from 1 to 4
move 2 from 9 to 1
move 20 from 2 to 8
move 3 from 4 to 8
move 1 from 2 to 3
move 4 from 2 to 7
move 1 from 3 to 4
move 1 from 9 to 3
move 1 from 4 to 7
move 1 from 2 to 5
move 1 from 4 to 3
move 2 from 1 to 6
move 1 from 5 to 6
move 1 from 7 to 1
move 12 from 7 to 2
move 12 from 2 to 6
move 9 from 6 to 2
move 1 from 6 to 8
move 1 from 3 to 9
move 8 from 2 to 4
move 1 from 9 to 6
move 1 from 4 to 6
move 4 from 4 to 9
move 1 from 4 to 9
move 1 from 1 to 5
move 2 from 6 to 3
move 1 from 5 to 4
move 1 from 2 to 8
move 10 from 8 to 6
move 10 from 8 to 3
move 1 from 3 to 4
move 8 from 8 to 1
move 3 from 9 to 8
move 2 from 9 to 1
move 11 from 6 to 7
move 1 from 1 to 7
move 8 from 1 to 4
move 3 from 6 to 7
move 1 from 1 to 4
move 14 from 8 to 6
move 1 from 8 to 7
move 1 from 6 to 8
move 6 from 4 to 1
move 1 from 8 to 5
move 4 from 1 to 8
move 2 from 7 to 1
move 1 from 6 to 7
move 5 from 4 to 2
move 2 from 4 to 3
move 4 from 2 to 8
move 15 from 7 to 3
move 3 from 3 to 6
move 1 from 5 to 2
move 21 from 3 to 6
move 2 from 8 to 7
move 1 from 7 to 8
move 32 from 6 to 9
move 1 from 7 to 8
move 5 from 8 to 4
move 2 from 8 to 7
move 14 from 9 to 8
move 14 from 8 to 1
move 2 from 6 to 1
move 2 from 7 to 4
move 1 from 9 to 3
move 17 from 9 to 5
move 6 from 1 to 8
move 4 from 4 to 6
move 2 from 2 to 5
move 2 from 8 to 2
move 1 from 6 to 7
move 2 from 2 to 6
move 4 from 3 to 2
move 7 from 6 to 3
move 6 from 5 to 7
move 1 from 8 to 9
move 1 from 6 to 7
move 4 from 8 to 6
move 1 from 9 to 3
move 4 from 1 to 4
move 12 from 5 to 9
move 7 from 7 to 8
move 3 from 4 to 2
move 8 from 9 to 4
move 2 from 6 to 2
move 1 from 7 to 4
move 2 from 6 to 9
move 1 from 5 to 3
move 1 from 8 to 1
move 2 from 8 to 7
move 2 from 2 to 9
move 7 from 2 to 3
move 8 from 4 to 1
move 2 from 8 to 4
move 4 from 9 to 7
move 2 from 9 to 5
move 16 from 1 to 3
move 3 from 7 to 4
move 1 from 7 to 6
move 1 from 6 to 2
move 2 from 5 to 3
move 10 from 4 to 2
move 2 from 8 to 7
move 19 from 3 to 8
move 17 from 3 to 9
move 3 from 1 to 7
move 17 from 9 to 2
move 1 from 7 to 5
move 1 from 7 to 5
move 2 from 5 to 7
move 2 from 9 to 2
move 6 from 7 to 6
move 3 from 6 to 7
move 1 from 8 to 9
move 1 from 9 to 3
move 4 from 2 to 5
move 17 from 2 to 3
move 3 from 7 to 5
move 1 from 5 to 3
move 7 from 2 to 3
move 2 from 2 to 4
move 1 from 7 to 1
move 1 from 1 to 5
move 2 from 5 to 3
move 1 from 4 to 5
move 1 from 4 to 3
move 14 from 3 to 5
move 17 from 8 to 7
move 2 from 6 to 2
move 12 from 3 to 5
move 15 from 5 to 9
move 7 from 7 to 3
move 7 from 7 to 6
move 1 from 2 to 3
move 11 from 9 to 6
move 13 from 5 to 7
move 10 from 6 to 8
move 6 from 8 to 3
move 2 from 5 to 8
move 1 from 2 to 9
move 10 from 7 to 6
move 9 from 6 to 8
move 1 from 5 to 1
move 10 from 6 to 4
move 8 from 4 to 5
move 1 from 1 to 2
move 3 from 9 to 1
move 10 from 3 to 7
move 1 from 4 to 7
move 12 from 7 to 9
move 7 from 3 to 5
move 13 from 8 to 7
move 3 from 9 to 5
move 5 from 5 to 6
move 3 from 1 to 9
move 5 from 9 to 6
move 10 from 6 to 4
move 15 from 7 to 5
move 3 from 9 to 4
move 1 from 4 to 3
move 3 from 8 to 9
move 6 from 9 to 6
move 2 from 5 to 1
move 1 from 2 to 7
move 12 from 5 to 8
move 3 from 9 to 5
move 11 from 5 to 6
move 1 from 1 to 2
move 1 from 2 to 8
move 3 from 7 to 8
move 10 from 8 to 3
move 1 from 1 to 7
move 10 from 4 to 9
move 1 from 7 to 8
move 5 from 5 to 3
move 15 from 6 to 5
move 8 from 3 to 9
move 3 from 4 to 5
move 1 from 7 to 8
move 8 from 8 to 9
move 1 from 6 to 5
move 5 from 3 to 2
move 5 from 2 to 3
move 5 from 9 to 8
move 1 from 6 to 8
move 2 from 5 to 1
move 4 from 3 to 2
move 16 from 5 to 6
move 3 from 5 to 9
move 4 from 8 to 5
move 8 from 6 to 4
move 4 from 2 to 3
move 1 from 1 to 4
move 6 from 3 to 6
move 24 from 9 to 2
move 1 from 1 to 9
move 1 from 9 to 4
move 2 from 4 to 5
move 1 from 3 to 2
move 10 from 6 to 8
move 22 from 2 to 6
move 1 from 2 to 7
move 1 from 7 to 5
move 10 from 8 to 9
move 7 from 9 to 3
move 6 from 4 to 8
move 3 from 9 to 2
move 5 from 8 to 3
move 1 from 4 to 1
move 1 from 8 to 3
move 3 from 6 to 2
move 5 from 5 to 1
move 1 from 5 to 3
move 5 from 6 to 3
move 1 from 2 to 7
move 16 from 3 to 2
move 1 from 8 to 1
move 1 from 4 to 7
move 1 from 5 to 3
move 6 from 6 to 4
move 14 from 2 to 8
move 3 from 3 to 5
move 2 from 3 to 6
move 3 from 5 to 6
move 4 from 6 to 4
move 3 from 4 to 8
move 7 from 2 to 9
move 2 from 2 to 1
move 9 from 8 to 4
move 7 from 1 to 7
move 8 from 7 to 5
move 2 from 8 to 4
move 3 from 9 to 6
move 4 from 4 to 6
move 1 from 7 to 3
move 4 from 8 to 2
move 2 from 9 to 8
move 9 from 6 to 7
move 1 from 9 to 8
move 1 from 1 to 5
move 3 from 4 to 5
move 1 from 3 to 2
move 5 from 8 to 2
move 9 from 2 to 7
move 1 from 6 to 7
move 1 from 6 to 2
move 9 from 7 to 4
move 2 from 5 to 9
move 10 from 4 to 6
move 1 from 8 to 6
move 5 from 4 to 3
move 5 from 4 to 9
move 5 from 9 to 5
move 1 from 1 to 7
move 4 from 7 to 8
move 8 from 5 to 3
move 3 from 3 to 8
move 6 from 7 to 6
move 3 from 3 to 1
move 5 from 3 to 7
move 1 from 9 to 6
move 2 from 7 to 6
move 1 from 9 to 3
move 4 from 6 to 9
move 2 from 2 to 6
move 1 from 7 to 3
move 6 from 5 to 4
move 7 from 6 to 9
move 6 from 6 to 8
move 2 from 1 to 2
move 1 from 5 to 1
move 5 from 8 to 5
move 1 from 3 to 9
move 4 from 4 to 5
move 10 from 9 to 2
move 14 from 6 to 4
move 1 from 3 to 8
move 1 from 8 to 5
move 2 from 7 to 9
move 1 from 1 to 2
move 14 from 4 to 7
move 1 from 1 to 4
move 3 from 4 to 1
move 3 from 5 to 1
move 6 from 5 to 1
move 10 from 7 to 3
move 6 from 1 to 5
move 6 from 1 to 7
move 3 from 8 to 3
move 1 from 5 to 1
move 3 from 9 to 6
move 1 from 9 to 3
move 6 from 5 to 9
move 2 from 6 to 1
move 9 from 2 to 1
move 6 from 9 to 6
move 2 from 8 to 7
move 5 from 7 to 3
move 7 from 7 to 5
move 4 from 2 to 8
move 6 from 8 to 3
move 1 from 9 to 4
move 1 from 7 to 3
move 2 from 5 to 3
move 7 from 6 to 4
move 28 from 3 to 4
move 1 from 3 to 8
move 1 from 5 to 9
move 9 from 4 to 5
move 12 from 4 to 5
move 2 from 4 to 6
move 5 from 4 to 6
move 1 from 3 to 8
move 10 from 5 to 8
move 10 from 5 to 4
move 5 from 5 to 9
move 3 from 4 to 1
move 5 from 6 to 9
move 2 from 6 to 7
move 2 from 7 to 5
move 10 from 9 to 4
move 1 from 8 to 5
move 5 from 1 to 5
move 8 from 8 to 7
move 8 from 5 to 3
move 8 from 7 to 8
move 2 from 8 to 2
move 7 from 3 to 2
move 21 from 4 to 7
move 10 from 1 to 9
move 3 from 4 to 5
move 1 from 4 to 8
move 1 from 8 to 3
move 7 from 8 to 5
move 2 from 3 to 1
move 7 from 7 to 2
move 1 from 1 to 4
move 1 from 1 to 6
move 8 from 9 to 3
move 2 from 8 to 4
move 3 from 3 to 1
move 3 from 4 to 7
move 1 from 6 to 7
move 5 from 2 to 4
move 2 from 1 to 6`);