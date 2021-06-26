const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const PORT = 5000;
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Controllers
const productsController = require('./controllers/controllerProduct');

//Router for product

app.get("/products", productsController.allProducts);

app.get("/products/show/:uuid", (req, res) => {console.log(`Show ${req.params.uuid}`)});

app.post("/products/new", productsController.addProduct);

app.put("/products/edit/:uuid", (req, res) => {console.log(`Edit ${req.params.uuid}`)});

app.delete("/products/delete/:uuid", (req, res) => {console.log(`Delete ${req.params.uuid}`)});


server.listen(PORT, () => {
    console.log(`Server listening on localhost ${PORT}`);
});