const express = require('express'); // import express dari node_modules
const router = express.Router();


// data dummy
let movies = [
    {id: 1, title: 'inception', year: 2010},
    {id: 2, title: 'interstellar', year: 2014}
];

// menampilkan semua data, GET, /api/movies
router.get('/', (req, res) => {
    res.json(movies); // res bentuk json, yg ingin ditampilkan adalah data movies
})

// menampilkan data tertentu, GET, /api/movies/:id
router.get('/:id', (req, res) => { // pakai request param yg id
    // res.json(movies); 
    const movie = movies.find(m => m.id === parseInt(req.params.id))  // parseInt(req.params.id) : biasanya hasil req itu string, ubah ke integer

    // cek array movie kosong atau tidak
    if (!movie) {
        return res.status(404).json({message : 'Movie not found'})
    } else {
        res.json(movie);
    }
});

// menambahkan data (input), POST, /api/movies
router.post('/', (req, res) => {
    const newMovie = {
        id : movies.length + 1,
        title : req.body.title,
        year : req.body.year
    };
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

// edit data, update data, PUT, /api/movies:id
router.put('/:id', (req, res) => {
    const movieEdit = movies.find(m => m.id === parseInt(req.params.id))  // parseInt(req.params.id) : biasanya hasil req itu string, ubah ke integer

    // cek array movie kosong atau tidak
    if (!movieEdit) return res.status(404).json({message : 'Movie not found'});

    movieEdit.title = req.body.title || movieEdit.title;
    movieEdit.year = req.body.year || movieEdit.year;

    res.json(movieEdit);  
});

//hapus data, DELETE, /api/movies:id
router.delete('/:id', (req, res) => {
    movies = movies.filter(m => m.id !== parseInt(req.params.id));
    res.status(204).end(); // tampilin status ga ada data yg dikirim
})

module.exports = router;
