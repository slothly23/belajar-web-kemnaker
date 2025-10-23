let sepatuDibeli = [
    {
        nama: "New Balance",
        harga: 390000
    },
    {
        nama: "Nike Vomero",
        harga: 350000
    },
    {
        nama: "Adidas Samba",
        harga: 180000
    },
    {
        nama: "Onitsuka Tiger Mexico",
        harga: 420000
    },
];
    
let uangBayar = 1200000;

let totalBelanja = 0; 
let diskon = 0;
let totalBayar;
let kembalian;

sepatuDibeli.forEach((data, i) => {
    // menampilkan daftar sepatu
    console.log(`${i + 1}. ${data.nama} - Rp. ${data.harga}`);

    // menghitung total belanja dari daftar sepatu yang dibeli
    totalBelanja += sepatuDibeli[i].harga;
});

// Logika diskon
if (totalBelanja >= 800000) {
  diskon = 0.15; // 15%
} else if (totalBelanja >= 500000) {
  diskon = 0.1; // 10%
} else if (totalBelanja >= 250000) {
  diskon = 0.05; // 5%
} else {
  diskon = 0; // tidak dapat diskon
}

// total setelah diskon
totalBayar = totalBelanja - (totalBelanja * diskon);
kembalian = uangBayar - totalBayar;

console.log("======= Rincian Belanja Sepatu =======");
console.log();
console.log("Total Belanja = Rp. " + totalBelanja);
console.log("Diskon = " + (diskon * 100) + "%");
console.log("Total Setelah Diskon = Rp. " + totalBayar);
console.log("Pembayaran = Rp. " + uangBayar);
console.log("Kembalian = Rp. " + kembalian);