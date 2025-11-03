const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieContoller');
const {validationBodyMovies} = require('../middleware/validation'); // validasi jika ada inpuan yg kosong
const { route } = require('../../../tugas-pengenalan express/Routes/data-orang');

router.get('/', movieController.getAllMovies);
router.get('/:id', movieController.getMovieById);
router.post('/', validationBodyMovies, movieController.createMovie); // pake middleware
router.put('/:id', validationBodyMovies, movieController.updateMovie); // pake middleware
router.delete('/:id', movieController.deleteMovie);

module.exports = router;