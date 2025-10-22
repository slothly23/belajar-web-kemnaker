const { log } = require('console');
const fs = require('fs');
// fs = module bawaan Node.js
// require('fs') = untuk membaca, menulis, dan mengelola file 

// membuka dan membaca file JSON
const teks = fs.readFileSync("data.json", "utf-8");
// utf-8: untuk membaca file sebagai teks biasa

// mengubah string JSON menjadi array/object
const data = JSON.parse(teks);

console.log("isi awal: ", data);

// menulis data baru ke file data.json
// masukkin data
data.push({id: 1, nama: "Inayah", umur: 28});

// menyimpan data 
fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
// stringify : mengubah data menjadi object/array
// null,2 : membuat format 2 spasi per indentasi

console.log("Data berhasil ditambahkan");
