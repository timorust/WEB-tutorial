const fs = require('fs');
const path = require('path');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
// const files = fs.readdirSync('./');
// console.log('[sync] files is =>' + files)
// console.log(files.find(item => item.toUpperCase() == 'app.js'.toUpperCase()))

readline.question('Which file you want to search (full-name)? ', file_name => {
  console.log(`Searching is =>${file_name}!`);
  readline.close();

  fs.readdir(__dirname, (err, files) => {
    if (err) {
      console.log(`Erorr ${err}`)
    }
    else {
      console.log(`[sync] file is =>${files}`)
    }
    if (files.find(item => item.toUpperCase() == file_name.toUpperCase())) {
      console.log(`file name is =>${file_name} exist in =>${__dirname} folder`)
    }
    else {
      console.log(`file name is =>${file_name} NOT exist in =>${__dirname} folder`)
    }
  })
})