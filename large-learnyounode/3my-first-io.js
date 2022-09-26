// MY SOLUTION
const fs = require('fs');
const pathToFile = process.argv[2];
const contents = fs.readFileSync(pathToFile);
const newLines = contents.toString().split('\n').length - 1;

console.log(newLines);

// OFFICIAL SOLUTION
// const fs = require('fs')
    
// const contents = fs.readFileSync(process.argv[2])
// const lines = contents.toString().split('\n').length - 1
// console.log(lines)
    
// // note you can avoid the .toString() by passing 'utf8' as the
// // second argument to readFileSync, then you'll get a String!
// // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1