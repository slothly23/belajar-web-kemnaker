const express = require('express'); // import express dari node_modules
const router = express.Router();


// data
let dataOrang = [
    {id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
    {id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
    {id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
    {id: 9, name: "Shohei", umur: 28, pekerjaan: "Pemain Basebal", jenisKelamin: "L"},
    {id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
];


// soal 2
// handler dapat menerima parameter url berupa umur dan gender
// jika parameter umur diisi maka tampilkan data dengan umur >= url parameter umur
// jika gender diisi maka tampilkan data dengan gender tersebut

// http://localhost:3000/data-orang?umur=30&gender=L
// output
//  1. John - pekerjaan: penulis - umur 30 tahun 
//  2. Benzema - pekerjaan: pemain bola - umur: 34 tahun


// router.get('/', (req, res) => {
//     let hasil = dataOrang;

//     const umur = parseInt(req.query.umur);
//     const gender = req.query.gender;

//     // pake filter untuk mencari semua data yang sesuai
//     // jika umur diisi
//     if (!isNaN(umur)) {
//         hasil.filter((m) => {
//             m.umur >= umur
//         })
//     }

//     // jika gender diisi
//     if (gender) {
//         hasil.filter((m) => {
//             m.jenisKelamin.toLowerCase() === gender.toLowerCase()
//         })
//     }

//     // format output
//     const output = hasil.map((m, index) => {
//         return `${index + 1}. ${m.name} - pekerjaan: ${m.pekerjaan} - umur: ${m.umur} tahun`
//     });

//     res.send(output.join(`
//         `))

// })

router.get('/', (req, res) => {
    let hasil = dataOrang;

    const umur = parseInt(req.query.umur);
    const gender = req.query.gender;

    // filter umur jika valid
    if (!isNaN(umur)) {
        hasil = hasil.filter(m => m.umur >= umur);
    }

    // filter gender jika ada
    if (gender) {
        hasil = hasil.filter(m => m.jenisKelamin.toLowerCase() === gender.toLowerCase());
    }

    // format output
    const output = hasil.map((m, index) => {
        return `${index + 1}. ${m.name} - pekerjaan: ${m.pekerjaan} - umur: ${m.umur} tahun`;
    });

    res.send(output.join(`
        `));
});



// soal 3 
// /data-orang/1
// mau menampilkan "pak john adalah seorang penulis yang berusia 30 tahun"

// menampilkan data tertentu, GET, /data-orang/:id
router.get('/:id', (req, res) => { // pakai request params id
    const orang = dataOrang.find(m => m.id === parseInt(req.params.id));  // parseInt(req.params.id) : biasanya hasil req itu string, ubah ke integer

    // cek array orang kosong atau tidak
    if (!orang) {
        return res.status(404).send("Maaf data tidak ditemukan");
    } else {
        // /data-orang/1
        // mau menampilkan "pak john adalah seorang penulis yang berusia 30 tahun"
    }
});


module.exports = router;