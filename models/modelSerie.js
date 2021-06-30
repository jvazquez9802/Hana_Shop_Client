const pool = require("../db");

module.exports = {

    index: async () => {
        try {
            return (await pool.query(`SELECT * FROM Serie`)).rows;
        } catch (error) {
            console.log(error);
        }
    },

    create: async (data) => {
        try {
            return await pool.query(
                `
                INSERT INTO Serie (name) VALUES 
                    (
                        '${data.name}'
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
                `UPDATE Serie SET name='${data.name}' WHERE id='${uuid}'`);
        } catch (error) {
            console.log(error);
        }
    },

    delete: async (uuid) => {
        try {
            return await pool.query(`DELETE FROM Serie WHERE id='${uuid}'`);
        } catch (error) {
            console.log(error);
        }
    }
}
