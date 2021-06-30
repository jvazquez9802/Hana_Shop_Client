const model = require('../models/modelSerie');

exports.allSeries = async (req, res, next) => {
    try {
        const series = await model.index();
        res.status(200).send(series);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.newSerie = async (req, res, next) => {
    try {
        const newSerie = await model.create(req.body);
        res.status(200).json({message:"Serie registered"});
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.editSerie = async(req, res, next) => {
    try {
        const editSerie = await model.update(req.params.uuid,req.body);
        res.status(200).json({message:"Serie updated"});
    } catch (error) {
        res.status(500).json({error: error});

    }
};

exports.deleteSerie = async(req, res, next) => {
    try {
        const deleteSerie = await model.delete(req.params.uuid);
        res.status(200).json({message:"Serie deleted"});
    } catch (error) {
        res.status(500).json({error: error});
    }
};
