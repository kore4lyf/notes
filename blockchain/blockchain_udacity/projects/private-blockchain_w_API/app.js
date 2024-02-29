const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const  { create, findBlock } = require('./api/controllers/BlockController')


// App setup
const app = express();

// Logging incoming requests
app.use(morgan('combined'));

// Parse incoming requests
app.use(bodyParser.json({type: '*/*'}));

// Routes
app.get('/block/:blockId', async (req, res, next) => {
  const block = findBlock(req.params.blockId)
  
  res.json({
    status: "Success",
    block: await block
  })
})

app.post('/block', async (req, res) => {
  const { data } = req.body
  const block = create(data)

  console.log(block)
  res.json({
    status: "Success",
    block: await block
  })
});


app.get('/*', (req, res) => {
 res.send("404") 
})

// Server setup
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}...`)
})

