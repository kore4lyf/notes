
const http = require('http');
const port = process.env.PORT || 5000

const server = http.createServer((req, res) => {
  res.writeHead(200, {content-type: 'text/plain'})
  res.end('Ayo, welcome to Kore\'s server')
})

server.listen(port, () => console.log(`Server started on port: ${port}. Press Ctrl - C to terminate`))
