const express = require('express');
const app = express();
const port = 3000;

const moviesRoutes = require('./Routes/movie'); // ./ untuk pindah folder

// middleware global untuk parsing json
app.use(express.json());

app.use('/api/movies', moviesRoutes); //mendefinisikan route default? dan menamnahkan route dari file movie.js di folder Router
// /api/movies => path global

// route sederhana
app.get('/', (req, res) => {
    res.send("Hello world dari express");
})

// menjalankan server di port mana
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})


//