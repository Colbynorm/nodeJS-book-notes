// let app = http.createServer((request, response) => {
//     let url = request.url;
//     let method= request.method;
//     if(method === "GET"){
//         if(url === "/listCities/usa/ohio"){
//             database.call("usa", "ohio", (err, data) => {
//                 response.writeHead(200, {'Content-Type': 'application/json'});
//                 response.end(JSON.stringify(data));
//             });
//         }
//         if(url === "/listCities/usa/arizona"){

//         }
//         if(url === "/listCities/usa/texas"){

//         }
//     }
// });


//using Express
// const express = require('express');
// let app = express();
// app.get('/listCities/:country/:state', (request, response) => {
//     let country = request.params.country;
//     let state = request.params.state;
//     response.end(`You asked for country: ${country} and state: ${state}`);
// });
// app.listen(8080);

