const os = require('os')
console.log(os.platform())
// console.log(os.networkInterfaces())
console.log('Free memory -',os.freemem(),'Bytes')
console.log('Total memory -',os.totalmem(),'Bytes')
console.log(`HostName - ${os.hostname()}\n HomeDirectory - ${os.homedir()}`)
console.log(`Directory - ${os.tmpdir()}`)
