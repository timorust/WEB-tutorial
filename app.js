// console.log(__dirname);

// const path = require('path');
// console.log(path);


console.log('hello world!');
var x = 1;
console.log(`x = ${x + 1}`)

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const person = {name: 'Dany', age: 19}
let {name, age} = person;
console.log(name, age);



readline.question('Who are you?', x => {

  x = parseInt(x) + 1;
  console.log(`Hey there ${x}!`);
  readline.close();
});