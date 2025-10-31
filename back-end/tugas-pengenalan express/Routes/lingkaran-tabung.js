const express = require('express'); // import express dari node_modules
const router = express.Router();

// menampilkan data hasil perhitungan, GET, /lingkaran-tabung/:jarijari/:tinggi
router.get('/:jarijari/:tinggi', (req, res) => {
    const pi = 3.14;
    const jariJari = Number(req.params.jarijari);
    const tinggi = Number(req.params.tinggi);;

    // Validasi input
    if (isNaN(jariJari) || isNaN(tinggi)) {
        res.status(400).send("Input harus berupa angka untuk jari-jari dan tinggi.");
        return;
    }

    // Perhitungan
    let luasLingkaran = pi * jariJari * jariJari;
    let kelLingkaran = 2 * pi * jariJari;
    let volumeTabung = pi * jariJari * jariJari * tinggi;

    res.send(`
        jari-jari: ${jariJari}, tinggi: ${tinggi} 
        luas lingkaran: ${luasLingkaran.toFixed(2)}, keliling lingkaran : ${kelLingkaran.toFixed(2)} 
        volume tabung : ${volumeTabung.toFixed(2)}`);

})

module.exports = router;