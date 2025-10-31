const express = require('express');
const app = express();
const port = 3000;

// middleware global untuk parsing json
app.use(express.json());

// menjalankan server di port mana
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})