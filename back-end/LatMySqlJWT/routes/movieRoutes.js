const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');
const auth = require('../middlewares/auth');
const {validateMovieCreate, validateMovieUpdate} = require('../middlewares/validation'); // lebih dari satu pakai {} 

router.get('/', movieController.getAll); //public
router.get('/:id', movieController.getById); //public
// middleware bisa lebih dari satu
router.post('/', auth, validateMovieCreate, movieController.create); //protected
router.put('/:id', auth, validateMovieUpdate, movieController.update); //protected
router.delete('/:id', auth, movieController.remove); //protected


module.exports = router;