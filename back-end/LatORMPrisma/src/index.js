const express = require('express'); // import express
const cors = require('cors'); // import cors

const app = express();

const movieRoutes =require('./routes/movieRoutes');
const categoryRoutes =require('./routes/categoryRoutes');

app.use(cors());  // enable CORS untuk semua origin
// app.use(cors()); -> aktifkan CORS (default: semua origin diperbolehkan)
// kalau ga pakai cors berarti memperbolehkan akses dari semua origin
// berguna saat frontend di origin berbeda

// middleware global
app.use(express.json()); // parse JSON body

// prefix API
app.use('/api/movies', movieRoutes); // mount route movie di prefix /api/movies
app.use('/api/categories', categoryRoutes); // mount route category di prefix /api/categories

// health check
app.get('/', (req, res) => {
    res.send('API berjalan - gunakan /api/movies dan api/categories');
});

// jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
})