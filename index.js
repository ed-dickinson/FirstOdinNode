const express = require('express')
const path = require('path')

const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'))
})

app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact.html'))
})

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '404.html'))
})
app.listen(port, () => {
  console.log('Running app...')
})


// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   // var filename = "." + q.pathname;
// var filename = (q.pathname === '/' ? './index.html' : '.' + q.pathname);

//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found, Man");
//     } 
//     // if (filename === '') {
//     //   filename = 'index.html'
//     //   res.writeHead(200, { 'Content-Type': 'text/html' })
//     //   res.write(data)
//     //   return res.end()
//     // }

//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// // http.createServer((req, res) => {
// //   const query = url.parse(req.url, true)
// //   let filename = (query.pathname === '/' ? './index.html' : '.' + query.pathname)

