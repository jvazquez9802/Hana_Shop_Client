const model = require('../models/modelProduct');

exports.allProducts = async (req, res, next) => {
    try {
        const products = await model.index();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.showProduct = async(req, res, next) => {
    try {
        const product = await model.show(req.params.uuid);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.newProduct = async (req, res, next) => {
    try {
        const newProduct = await model.create(req.body);
        res.status(200).json({message:"Product registered"});
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.editProduct = async(req, res, next) => {
    try {
        const newProduct = await model.update(req.params.uuid,req.body);
        res.status(200).json({message:"Product updated"});
    } catch (error) {
        res.status(500).json({error: error});

    }
};

exports.deleteProduct = async(req, res, next) => {
    try {
        const deleteProduct = await model.delete(req.params.uuid);
        res.status(200).json({message:"Product deleted"});
    } catch (error) {
        res.status(500).json({error: error});
    }
};

