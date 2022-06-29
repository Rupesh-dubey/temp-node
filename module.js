//module
const names = require('./name')
console.log(names)
 
const sayHi = require('./third')
console.log(sayHi)
sayHi(names.rahul)

require('./app')