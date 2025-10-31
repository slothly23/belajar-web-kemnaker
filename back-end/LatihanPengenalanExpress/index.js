const express = require('express');
const app = express();
const port = 3000;

// middleware global untuk parsing json
app.use(express.json());

// route sederhana
app.get('/', (req, res) => {
    res.send("Hello world dari express");
})

// menjalankan server di port mana
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})