const Camera = require("./camera");

class Cannon extends Camera {
    constructor(brand, harga, jumlahBarang) {
        super(brand, jumlahBarang);
        this.harga = harga;
    }

    cekTotalHarga() {
        this.totalHarga = this.harga * this.jumlahBarang;
        this.cekDiskon();
    }
}

module.exports = Cannon;