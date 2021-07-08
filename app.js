console.log(__dirname);
// console.log(module);
const path = require('path');
console.log(path.join(__dirname, 'myfile.txt'));


const os = require('os');
console.log(`free memory is =>${os.freemem()}`);
console.log(`total memory is =>${os.totalmem}`);

// const fs = require('fs')
// const files = fs.readdirSync('./')
// console.log(files);


const fs = require('fs');

fs.readdir(__dirname, (err, file) => {
  
  if(err) {
    console.log(`error ${err}`)
  }
  else {
    console.log(`files is =>${file}`)
  }
})