const os = require('os')

const user = os.userInfo()

console.log(user)


console.log('The sysetem uptime can be represented as ',os.uptime())
const currentOs = {
    name : os.type(),
    release : os.release(),
    
}
console.log(currentOs)

const path = require('path')
const gest = path.extname()

console.log(gest)