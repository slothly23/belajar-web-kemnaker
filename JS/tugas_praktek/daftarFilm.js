const fs = require('fs');

let dataFilmBaru = [
    {
        judul: "Agak Laen",
        tahun: 2024,
        genre: ["Horor", "Komedi"],
    },
    {
        judul: "Habibie & Ainun",
        tahun: 2012,
        genre: ["Drama", "Romantis"],
    },
    {
        judul: "Dilan 1990",
        tahun: 2018,
        genre: ["Romantis"],
    },
];

// Menyimpan data ke file film.jsom 
fs.writeFileSync("film.json", JSON.stringify(dataFilmBaru, null, 2));
// console.log("Data Film berhasil ditulis ke file film.json");

let data = fs.readFileSync('film.json', 'utf-8');
let filmArray = JSON.parse(data);

console.log("Daftar Film:");
filmArray.forEach((film, i) => {
    console.log(`${i + 1}. ${film.judul} (${film.tahun}) - ${film.genre.join(", ")}`);
});