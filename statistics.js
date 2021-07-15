
const logger = require('./logger');
logger.log('=> empty-array')



function getLength( arr) {
  console.log(arr.length)
}



function getFirst(arr) {
  console.log(arr[0])
}


function getLast(arr) {
  console.log(arr[arr.length - 1])
}

module.exports.getLength = getLength;
module.exports.getFirst = getFirst;
module.exports.getLast = getLast;