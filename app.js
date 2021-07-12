
const logger = require('./logger');
const calc = require('./calc');
const fs = require('fs')

logger.log('===== system start up')

console.log(calc.add(3, 4))
logger.logResult('result for this func is =>12')


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