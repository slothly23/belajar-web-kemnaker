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



// var laptop1 = new Laptop("Asus", 24000000);
// laptop1.cekDiskon();

var laptop1 = new Asus("Asus", 24000000, 2);
laptop1.cekTotalHarga();