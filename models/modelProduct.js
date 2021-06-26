const pool = require("../db");

module.exports = class Product{
    constructor(name, description, price, cost, stock, images, id_category, id_serie){
        this.name = name;
        this.description = description;
        this.price = parseFloat(price);
        this.cost = parseFloat(cost);
        this.stock= parseInt(stock);
        this.images = images;
        this.id_category = id_category;
        this.id_serie = id_serie;

    }
    
    static getAll = async () => {
        return await (await pool.query("SELECT * FROM Product")).rows;
    }

    static saveProduct = async (data) => {
        /*
        try {
            const response = await new Product(data);
            items.push(response);
            return response;
        } catch (error) {
            console.log(error)
        }
        */
       console.log('save')
    }

}
