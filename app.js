
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
   
  
  readline.question('Enter file name?', fileName => {
    console.log(`You file name is => ${fileName}!`);
    readline.close();

    const fs = require('fs')
    fs.readdir(__dirname, (err, files) => {
  if (err)
    console.log(err);
  else {
    console.log("\nCurrent directory filenames is =>", files);
    
    files.forEach(file => {
      if(fileName === file)
      console.log('The file found is =>',fileName);
    })
  }
})

  });







// display all module data
// console.log(module);

// console.log(__dirname);
// const path = require('path')
// console.log(path.join(__dirname, 'myfile.txt'))

// const os = require('os');
// console.log(`Free Memory: ${os.freemem()}`)
// console.log(`Total  Memory: ${os.totalmem()}`)

// const fs = require('fs')
// const files = fs.readdirSync('./') // sync -- bad!!!!
// console.log('[sync] ' + files)

// fs.readdir(__dirname, (err, files) => {
//     if (err) 
//        console.log(`[async] Error ${err}`)
//     else 
//        console.log(`[async] Files ${files}`)
//  })