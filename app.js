

const { write } = require('fs')
const http = require('http')

const createserver = http.createServer((req,res)=>{
    if(req.url == '/')
    {
        write('this is the first page of the app')
    }
    res.write(' Welcome to our server how the hell are we thinking of leaving ')
    res.end()
})
createserver.listen(5000)