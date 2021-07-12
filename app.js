
const logger = require('./logger');
const calc = require('./calc');
const fs = require('fs')

logger.log('===== system start up')

result = calc.add(3, 4)
logger.logResult(`result of calc.add 3 + 4 => ${result}`)


console.log(`import require:`)
console.log(logger)
console.log(`end point require is =>${logger.end_point}`)


const files = fs.readdirSync('./')
console.log('[sync] ' + files)

fs.readdir('$', (err, files) => {
    if (err) 
       logger.log('ERROR in fs.readdir of folder $: ' + err)
    else 
       console.log(`[async] Files ${files}`)
 })

logger.log('====== system shut down')