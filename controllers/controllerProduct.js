const model = require('../models/modelProduct')

exports.allProducts = async (req, res, next) => {
    const products = await model.getAll();
    res.send(products);
}

exports.addProduct = async (req, res, next) => {
    try {
        const addProduct = await model.addProduct(req.body);
        res.json(addProduct);
    } catch (error) {
        res.status(500).json({error: error})
    }
}