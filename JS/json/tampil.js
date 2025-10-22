const fs = require('fs');

// 1. baca isi file
const isiFile = fs.readFileSync('data.json', 'utf-8');

// 2. ubah string JSON jadi array
const data = JSON.parse(isiFile);

// 3. tampilkan ke konsol
console.log("isi data.json: ", data);

// 4. tampilkan tiap baris, satu persatu
data.forEach((item) => {
    console.log(`ID : ${item.id}, Nama : ${item.nama}, Umur : ${item.umur}`);
});
