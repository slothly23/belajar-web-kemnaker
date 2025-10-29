// tugas akhir

// toko elektronik
    // class laptop
        // merk, jumlah + harga
    // class kamera

// parent method => menentukan diskon

//log
// harga setelah diskon
// dapat diskon 10% dll

// data customer, pake package

// PBO > folder : namaPeserta_PBO 

const Laptop = require('./laptop.js');
const Asus = require('./lp_asus.js');
const Toshiba = require('./lp_toshiba.js');


// instantiate
var laptop1 = new Asus("Asus", 24000000, 2);
var laptop2 = new Toshiba("Toshiba L002", 7000000, 1);

// tampilkan hasil
laptop1.cekTotalHarga();
laptop2.cekTotalHarga();
