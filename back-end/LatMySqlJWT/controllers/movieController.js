const pool = require('../config/db'); // butuh konfigurasi database

module.exports = {
    //GET/api/movies
    getAll: async (req, res, next) => {
        try {
            //join category to get category name
            const [rows] = await pool.execute(
                `SELECT m.*, c.name AS categoryName
                FRON movies m
                LEFT JOIN categories c ON m.categoryId = c.id
                ORDER BY m.id DESC`
            );
            res.json(rows);
        } catch (err) {
            next(err);
        }
    },

    getById : async (req, res, next) => {
        try {
            const id = parseInt(req.params.id, 10); // desimal berbasis 10
            const [rows] = await pool.execute(
                `SELECT m.*, c.name AS categoryName
                FRON movies m
                LEFT JOIN categories c ON m.categoryId = c.id
                WHERE m.id`, [id]
            );
            if(rows.length === 0) return res.status(404).json({ message: 'Movie tidak ditemukan' });
            res.json(rows[0]);
        } catch (error) {
            next(err);
        }
    },

    //POST /api/movies (protected)
    create: async (req, res, next) => {
        try {
            const { title, year, categoryId } = req.body;
            const userId = req.user ? req.user.id : null; // butuh mengenali siapa user nya

            const [result] = await pool.execute(`
                INSERT INTO movies (title, year, categoryId, userId) VALUES (?, ?, ?, ?)`,
            [title, year || null, categoryId || null, userId]);
            
            res.status(201).json({ id: result.insertId, title, year: year || null, categoryId: categoryId || null});
        } catch (err) {
            next(err);
        }
    },
    
}