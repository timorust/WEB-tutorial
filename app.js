
const EventEmitter = require('events');
const largenum_emitter = new EventEmitter;
const uppercase_emitter = new EventEmitter;
const logger = require('./logger')

uppercase_emitter.on('trying_to_divide_by_zero', (_) => {
  // event-handler => what to do event was triggered?
  // do whatever you want
  console.error(`CANNOT DIVIDE ${_} BY ZERO!`);
})

 largenum_emitter.on('result_sum_above_100', (_) => {
  // event-handler => what to do event was triggered?
  // do whatever you want
  logger.log(`ERROR LARGE NUMBER ${_} OCCURED!`);
})


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   

  let x,y = 0;
  let result = 0;
  readline.question('Enter 1st number ?', _x => {
      x = _x;

      readline.question('Enter 2nd number ?', _y => {
        y = _y;
        if(y == 0 || x == 0) {
          uppercase_emitter.emit('trying_to_divide_by_zero', y)
        }
        
        else if((result = x * y) > 100){
          largenum_emitter.emit('result_sum_above_100', result)
        }
        else {
          logger.log(`Result is => ${x} * ${y} = ${result}`)

        }
        readline.close();
      });
  });

 

