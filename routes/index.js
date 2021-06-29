itemsController = require('../controllers/controller');

exports.appRoute = (router) => {
    router.get("/menu", itemsController, (req,res) => {
        res.json(itemsController.getAll())
    });
};