function bagiAngka(a, b) {
    let hasil = a / b;

    // tampilkan error jika b = 0
    try {
        if (b == 0) {
            throw new Error("Tidak bisa membagi dengan nol!"); // buat custom error menggunakan throw statement
        }
        console.log("Hasil pembagian :", hasil); // kalau tidak ada error, program menampilkan hasil
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message); // jika terjadi error di blok try, tampilkan error message
    }
}

let angka1 = 10;
let angka2 = 2;

// tampilkan error jika ada variabel yang tidak dideklarasi
try {
    bagiAngka(angka1, angka3);
} catch (error) {
    console.error("Terjadi kesalahan lain:", error.message); // jika terjadi error di blok try, tampilkan error message
}

console.log("Program selesai.");
