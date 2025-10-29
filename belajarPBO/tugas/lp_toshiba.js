const Laptop = require("./laptop");

class Toshiba extends Laptop {
    constructor(brand, harga, jumlahBarang) {
        super(brand, jumlahBarang);
        this.harga = harga;
    }

    cekTotalHarga() {
        this.totalHarga = this.harga * this.jumlahBarang;
        this.cekDiskon();
    }
}

module.exports = Toshiba;