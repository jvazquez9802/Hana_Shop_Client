const pool = require("../db");

module.exports = {

    index: async () => {
        try {
            return (await pool.query(`SELECT * FROM Product`)).rows;
        } catch (error) {
            console.log(error);
        }
    },

    show: async (uuid) => {
        try {
            return (await pool.query(`SELECT * FROM Product WHERE id='${uuid}'`)).rows[0];
        } catch (error) {
            console.log(error);
        }
    },

    create: async (data) => {
        try {
            return await pool.query(
                `
                INSERT INTO Product (name, description, price, cost, stock, images, id_category, id_serie) VALUES 
                    (
                        '${data.name}',
                        '${data.description}',
                        ${data.price},
                        ${data.cost},
                        ${data.stock},
                        ARRAY['${data.images}']::VARCHAR[],
                        '${data.id_category}',
                        '${data.id_serie}'
                    );
                `
            );
        } catch (error) {
            console.log(error);
        }
    },

    update: async (uuid, data) => {
        try {
            return await pool.query(
                `
                UPDATE Product
                SET name='${data.name}',
                    description='${data.description}',
                    price=${data.price},
                    cost=${data.cost},
                    stock=${data.stock},
                    images=ARRAY['${data.images}']::VARCHAR[],
                    id_category='${data.id_category}',
                    id_serie='${data.id_serie}'
                WHERE id='${uuid}';
                `
            );
        } catch (error) {
            console.log(error);
        }
    },

    delete: async (uuid) => {
        try {
            return await pool.query(`DELETE FROM Product WHERE id='${uuid}'`);
        } catch (error) {
            console.log(error);
        }
    }

}
