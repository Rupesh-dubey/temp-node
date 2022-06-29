//module
const { basename } = require('path')
const path = require('path')

console.log(path.sep)

const filePath = path.join('/test/test.txt')

console.log(filePath)
//returns the complete file path 

// to return the path of the file you just need to use :

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname,'test','test.txt')

console.log(absolute)



