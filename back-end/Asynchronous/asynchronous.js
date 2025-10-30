// urutan menapilkan

function selesai() {
    console.log("proses selesai"); 
}

console.log("mulai proses"); // 1
setTimeout(selesai, 5000); // 3 fungsi selesai() ditampilkan setelah 2 detik 
console.log("proses lain berjalan"); // 2
