const EventEmitter = require('events');
const logger = require('./logger')
const largenum_emitter = new EventEmitter();
const uppercase_emitter = new EventEmitter();

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

module.exports.largenum_emitter = largenum_emitter;
module.exports.uppercase_emitter = uppercase_emitter;