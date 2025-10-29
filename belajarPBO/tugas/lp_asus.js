const Laptop = require("./laptop");

class Asus extends Laptop {
    constructor(brand, harga, jumlahBarang) {
        super(brand);
        this.harga = harga;
        this.jumlahBarang = jumlahBarang;
    }

    cekTotalHarga() {
        this.totalHarga = this.harga * this.jumlahBarang;
        this.cekDiskon();

        
    }
}

module.exports = Asus;