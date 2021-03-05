// const stream = require('stream');

// let Feed = function(channel){
//     let readable = new stream.Readable({});
//     let news = [
//         "Big Win!",
//         "Stocks Down!",
//         "Actor Sad!"
//     ];
//     readable._read = () => {
//         if(news.length){
//             return readable.push(news.shift() + "\n");
//         }
//         readable.push(null);
//     }
//     return readable;
// }

// let feed = new Feed();

// feed.on('readable', () => {
//     let data = feed.read();
//     data && process.stdout.write(data);
// });
// feed.on('end', () => {
//     console.log('no more news');
// });


//creating server
// const http = require('http');
// let server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.write("PONG");
//     res.end();
// }).listen(8080);

// server.on("request", (req, res) => {
//     req.setEncoding("utf8");
//     req.on("readable", () => console.log(req.read()));
//     req.on("end", () => console.log("Done"));
// });


//HTTP Request
// const http = require("http");
// http.request({
//     host: 'www.example.org',
//     method: 'GET',
//     path: "/"
// }, function(response) {
//     response.setEncoding("utf8");
//     response.on("readable", () => console.log(response.read()));
// }).end();