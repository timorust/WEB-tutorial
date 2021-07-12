
const logger = require('./logger');
console.log(`import require:`)
console.log(logger)

console.log(`end point require is =>${logger.end_point}`)

logger.log('===== system start up')

const fs = require('fs')
const files = fs.readdirSync('./') // sync -- bad!!!!
console.log('[sync] ' + files)

fs.readdir('$', (err, files) => {
    if (err) 
       logger.log('ERROR in fs.readdir of folder $: ' + err)
    else 
       console.log(`[async] Files ${files}`)
 })

logger.log('====== system shut down')