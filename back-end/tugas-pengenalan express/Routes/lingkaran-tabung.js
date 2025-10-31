const express = require('express'); // import express dari node_modules
const router = express.Router();

// menampilkan data hasil perhitungan, GET, /lingkaran-tabung/:jarijari/:tinggi
router.get('/:jarijari/:tinggi', (req, res) => {
    const pi = 3.14;
    const jariJari = parseInt(req.params.jarijari);
    const tinggi = parseInt(req.params.tinggi);

    let LuasLingkaran = pi * jariJari * jariJari;
    let KelLingkaran = 2 * pi * jariJari;
    let VolumeTabung = pi * jariJari * jariJari * tinggi;

    res.send(`
        jari-jari: ${jariJari}, tinggi: ${tinggi} 
        luas lingkaran: ${LuasLingkaran}, keliling lingkaran : ${KelLingkaran} 
        volume tabung : ${VolumeTabung}`);

})

module.exports = router;