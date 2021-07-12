 const url = 'https://github.com/timorust';

 function log(message) {
   console.log(`Logging: ${message}`)
 }

 function logResult(result) {
   console.log(`Logging: ${result}`)
 }

//  console.log(module);

 module.exports.log = log;
 module.exports.end_point = url;
 module.exports.logResult = logResult;