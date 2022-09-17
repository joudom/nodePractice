// M E D I U M  E X E R C I S E - R e a d  a  F i l e
    const fs = require('fs');
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('filename: ', function(filename) {
        readline.close();
        fs.readFile(filename, function(error, buffer) {
            if (error) {
                console.log(error.message);
                return;
            }
        const content = buffer.toString();
        const upperCased = content.toUpperCase();
        console.log(upperCased);
        });
    });