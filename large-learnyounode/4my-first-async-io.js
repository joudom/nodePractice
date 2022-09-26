// MY SOLUTION
const fs = require('fs');
const pathToFile = process.argv[2];

fs.readFile(pathToFile, function(error, buffer) {
    if (error) {
        console.log(error.message);
        return;
      }
    const newLines = buffer.toString().split('\n').length - 1;
    console.log(newLines);
});

// OFFICIAL SOLUTION
// const fs = require('fs')
// const file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   if (err) {
//     return console.log(err)
//   }
//      // fs.readFile(file, 'utf8', callback) can also be used
//   const lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })