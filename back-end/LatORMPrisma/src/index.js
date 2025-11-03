const express = require('express');
const cors = require('cors');

const app = express();

const movieRoutes =require('./routes/movieRoutes');
const categoryRoutes =require('./routes/categoryRoutes');

app.use(cors()); // kalau ga pakai cors berarti memperbolehkan akses dari semua domain