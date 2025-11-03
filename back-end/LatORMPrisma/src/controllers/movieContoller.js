// import prisma untuk akses database
const prisma = require('../config/utils');

// buat CRUD

// Read : mngambil semua movie
// pake async await : best practice
const getAllMovies = async (req, res) => {
    try {
        const movies = await prisma.movie.findMany({
            include : {category : true}
        }); // cari semua movie
        return res.json(movies); // kembalikan hasil filter agar tampil
    } catch (error) {
        console.error(error); // tampilkan error
        // kalau ga tau errornya apa arahkan ke pesan "internal server error"
        return res.status(500).json({ message: "internal server error" });
    }
}


// Read by id
const getMovieById = async (req, res) => {
    try {
        const id = parseInt(req.params.id); // ngambil id dari url
        const movie = await prisma.movie.findUnique({
            where : {id},
            include : {category: true}
        });

        // kalau tidak ada data movie yg sesuai
        if (!movie) {
            return res.status(404).json({message: "movie not found"})
        } else {
            return res.json(movie);
        }
    } catch (error) {
        console.error(error); // tampilkan error
        // kalau ga tau errornya apa arahkan ke pesan "internal server error"
        return res.status(500).json({ message: "internal server error" });
    }
}

// Create Movie
const createMovie = async (req, res) => {
    try {
        const {title, year, categoryId} = req.body; // ngambil data dari inputan
        const data = {title, year : parseInt(year)}

        if (categoryId !== undefined && categoryId !== null) {
            data.categoryId = parseInt(categoryId);
        }

        //masukkan data 
        const movieBaru = await prisma.movie.create({
            data,
            include : {category : true} // bisa kosong makannya ditulis include kalau ada
        });

        return res.status(201).json(movieBaru);
    } catch (error) {
        console.error(error); // tampilkan error
        // kalau ga tau errornya apa arahkan ke pesan "internal server error"
        return res.status(500).json({ message: error.message});
    }
}

// Update Movie
const updateMovie = async (req, res) => {
    try {
        const id = parseInt(req.params.id); // ngambil id dari url
        const {title, year, categoryId} = req.body; // ngambil data dari inputan

        // taruh data yg mau diupdate
        const data = {title, year : parseInt(year)}
        if ('categoryId' in req.body) {
            data.categoryId = categoryId === null ? null : parseInt(categoryId);
        }

        // update data, pakai await
        const movieUpdate = await prisma.movie.update({
            where: {id},
            data,
            include: {category: true}
        });

        return res.json(movieUpdate);
    } catch (error) {
        console.error(error); // tampilkan error
        // KODE PRISMA
        if (error.code = 'P2025') { // kode error prisma kalau record tidak ditemukan
            return res.status(404).json({message: "movie not found"})
        }
        return res.status(400).json({message : error.message});
    }
}

// Delete Movie
const deleteMovie = async (req, res) => {
    try {
        const id = parseInt(req.params.id); // ngambil id dari url
        await prisma.movie.delete({ where: {id} });
        return res.json({message: "movie deleted"})
    } catch (error) {
        console.error(error);
        if (error.code = 'P2025') { // kode error prisma kalau record tidak ditemukan
            return res.status(404).json({message: "movie not found"})
        }
        return res.status(500).json({message : 'internal server error'});
    }
}

module.exports = {
    getAllMovies,
    getMovieById,
    createMovie,
    updateMovie,
    deleteMovie
};