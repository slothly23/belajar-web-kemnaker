require('dotenv').config(); // load env untuk akses PORT
const express = require('express'); // import express

const app = express(); // untuk akses fungsi-fungsi yg ada di express js

// routes
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const movieRoutes = require('./routes/movieRoutes');

// middleware global
app.use(express.json()); // parse JSON body

// prefix API
// mount routes  untuk di browser
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/movies', movieRoutes);

// basic error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({error : err.message || 'internal server error'})
})

// health check
app.get('/', (req, res) => {
    res.send('API berjalan - gunakan /api/auth, api/categories, dan /api/movies');
});

// jalankan server
// di terminal npm run dev untuk menjalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});



