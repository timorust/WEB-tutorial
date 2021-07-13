
const EventEmitter = require('events');
const uppercase_emitter = new EventEmitter;
const lowercase_emitter = new EventEmitter;

uppercase_emitter.on('trying_to_divide_by_zero', (_) => {
  // event-handler => what to do event was triggered?
  // do whatever you want
  console.error(`CANNOT DIVIDE ${_} BY ZERO!`);
})

lowercase_emitter.on('trying_to_divide_by_zero', (_) => {
  // event-handler => what to do event was triggered?
  // do whatever you want
  console.error(`cannot divide ${_} by zero!`);
})


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
   

  let x,y = 0;
  readline.question('Enter 1st number ?', _x => {
      x = _x;

      readline.question('Enter 2nd number ?', _y => {
        y = _y;
        if(y == 0 || x == 0) {
          uppercase_emitter.emit('trying_to_divide_by_zero', x)
          lowercase_emitter.emit('trying_to_divide_by_zero', y)
        }
        else {
          const result = x * y;
          console.log(`${x} * ${y} => ${result}`)
        }
        readline.close();
      });
  });

 

