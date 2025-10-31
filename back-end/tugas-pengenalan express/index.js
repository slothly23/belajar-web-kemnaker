const express = require('express');
const app = express();
const port = 3000;

lingkaranTabungRoute = require('./Routes/lingkaran-tabung');
dataOrangRoutes = require('./Routes/data-orang');

// middleware global untuk parsing json
app.use(express.json());

app.use('/lingkaran-tabung',lingkaranTabungRoute);
app.use('/data-orang', dataOrangRoutes);

// menjalankan server di port mana
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
})