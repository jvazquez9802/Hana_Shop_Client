const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

app.post("/user/new", (req, res) =>{

    console.log('Estan accediendo a home');
});

server.listen(5000, () => {
    console.log(`Server listening on localhost 5000`);
});