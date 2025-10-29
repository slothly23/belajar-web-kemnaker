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

const Cannon = require('./cam_cannon.js');
const Laptop = require('./laptop.js');
const Asus = require('./lp_asus.js');
const Toshiba = require('./lp_toshiba.js');


// instantiate Laptop
var laptop1 = new Asus("Asus", 24000000, 2);
var laptop2 = new Toshiba("Toshiba L002", 7000000, 1);

// instantiate Camera
var camera1 = new Cannon("Cannon x2", 24000000, 2);

// tampilkan hasil
laptop1.cekTotalHarga();
laptop2.cekTotalHarga();

camera1.cekTotalHarga();


