// // Create a Server
// const http = require('http');
// const fs = require('fs');
// const port = 3000;

// const server = http.createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html'});
//     fs.readFile('index.html', function(error, data) {
//         if (error) {
//             res.writeHead(404);
//             res.write('Error: File Not Found');

//         } else {
//             res.write(data);
//         }
// })    
// });

// server.listen(port, function(error) {
//     if (error) {
//         console.log('Somthing went wrong', error);
//     } else {
//         console.log('Server is Listening on port' + port);
//     }
// })



// // Enable CORS
// const express = require('express');
// const cors = require('cors');
// const app = express();
 
// app.use(cors());
 
// app.get('/products/:id', function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all origins!'})
// });
 
// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// });


// // Proxy
// // const express = require('express');
// const request = require('request');

// // const app = express();

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('/jokes/random', (req, res) => {
//   request(
//     { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }

//       res.json(JSON.parse(body));
//     }
//   )
// });

// fetch data from a json file

async function getJsonData(url, table) {
    const tableHead = document.querySelector("thead");
    const tableBody = document.querySelector("tbody");

    const response = await fetch(url);
    // const { header, rows} = response.json();
    const data = response.json();

    console.log(data);

    // clear table
    tableHead.innerHTML = "<tr></tr>";
    tableBody.innerHTML = "";

    // populate header


    // populate body

}

getJsonData("./egnraver_comparison.json", document.querySelector("table"));

import sum from './test.js'
console.log(sum(3, 2)); // 27