
const express = require('express')
const router = express.Router();
const path = require('path')
const url = require('url')
const cors = require('cors')

const port = 8080;

const app = express();
app.use(express.static(path.join(__dirname, '/') ))

app.get('/', (req, resp) => {
  resp.writeHead(200);
  resp.end('this page will be sent on default url')
})

app.get('/prog', (req, resp) => {
  resp.writeHead(201);
  resp.end('programming is life')
})

app.get('/p1', (req, resp) => {
  resp.sendFile(path.join(__dirname + '/page.html'))
})

app.get('/rand', (req, resp) => {
  resp.writeHead(200);
  resp.end(`random number is => ${Math.random() * 100}`)
})

app.get('/add', (req, resp) => {
  console.log(req.url)
  console.log(req.query)
  if(isNaN(Number(req.query.a))) {
    resp.writeHead(400);
    resp.end(`${req.query.a} is => not a number!`);
    return;
  }

   if(isNaN(Number(req.query.b))) {
    resp.writeHead(400);
    resp.end(`${req.query.b} is => not a number!`);
    return;
  }
  
  resp.writeHead(201);
  resp.end(`${req.query.a} + ${req.query.b} = ${Number(req.query.a) + Number(req.query.b)}`)
})

app.get('/customer/:cust_id', (req, resp) => {
  resp.writeHead(200);
  resp.end(`you sent is => ${req.params.cust_id}`)
})

app.listen(port, () => console.log(`Listening to port ${port}`))
