// M E D I U M  E X E R C I S E - R e a d  A N D  W r i t e  t o  a  F i l e
    const fs = require("fs");
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question("Input file: ", function (inputFile) {
        fs.readFile(inputFile, function (error, buffer) {
            if (error) {
                console.log(error.message);
                readline.close();
                return;
            }
            readline.question("Output file: ", function (outputFile) {
                readline.close();
                const content = buffer.toString();
                const upperCased = content.toUpperCase();
                fs.writeFile(outputFile, upperCased, function (error) {
                    if (error) {
                        console.log(error.message);
                        return;
                    }
                    console.log("Wrote to file ", outputFile);
                });
            });
        });
    });