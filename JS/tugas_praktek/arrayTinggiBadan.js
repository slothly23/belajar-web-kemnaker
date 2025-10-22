let tinggi = [
    {
        nama: "Rose",
        tinggi: 178,
    },
    {
        nama: "Magnolia",
        tinggi: 153,
    },
    {
        nama: "Daisy",
        tinggi: 165,
    },
    {
        nama: "Jasmine",
        tinggi: 161,
    },
    {
        nama: "Violet",
        tinggi: 159,
    },
];

// mengurutkan array object berdasarkan nama
tinggi.sort((a, b) => a.nama.localeCompare(b.nama));

console.log("Urutan berdasarkan nama (A ke Z):");
tinggi.forEach((data, i) => {
    console.log(`${i + 1}. ${data.nama} memiliki tinggi ${data.tinggi} cm`);
});
