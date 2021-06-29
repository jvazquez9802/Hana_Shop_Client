const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const PORT = 5000;
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Controllers
const productsController = require('./controllers/controllerProduct');
//import user controller

//Routes for products

app.get("/products", productsController.allProducts);

app.get("/products/show/:uuid", productsController.showProduct);

app.post("/products/new", productsController.newProduct);

app.put("/products/edit/:uuid", productsController.editProduct);

app.delete("/products/delete/:uuid", productsController.deleteProduct);

//Rotes for users


server.listen(PORT, () => {
    console.log(`Server listening on localhost ${PORT}`);
});