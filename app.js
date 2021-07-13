
const logger = require('./logger')
const emitter = require('./emit')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});



let x, y = 0;
let result = 0;

  readline.question('Enter 1st number ?', _x => {
      x = _x;

      readline.question('Enter 2nd number ?', _y => {
        y = _y;
        if(y == 0 || x == 0) {
          emitter.uppercase_emitter.emit('trying_to_divide_by_zero', y)
        }
        
        else if((result = parseInt(x) * parseInt(y)) > 100) {
         emitter.largenum_emitter.emit('result_sum_above_100', result)
        }
        else {
          logger.log(`Result is => ${x} * ${y} = ${result}`)

        }
        readline.close();
      });
  });

 

