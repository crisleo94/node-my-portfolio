const http = require('http')

const hostname = 'localhost'
const port = 3000

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' })

    let user = {
        name: 'Cristhian',
        age: 26,
        url: req.url
    }

    res.write(JSON.stringify(user))
    res.end()

}).listen(port, hostname, () => {

    console.log('Listening on port:', port)

})
