class Laptop {
    constructor(brand, totalHarga) {
        this.brand = brand;
        this.totalHarga = totalHarga;
    }

    cekDiskon() {
        let diskon = 0;

        // logika diskon
        if (this.totalHarga >= 60000000) {
            diskon = 0.2; // 20%
        } else if (this.totalHarga >= 30000000) {
            diskon = 0.15; // 15%
        } else if (this.totalHarga >= 25000000) {
            diskon = 0.1; // 10%
        } else if (this.totalHarga >= 10000000) {
            diskon = 0.05; // 5%
        } else {
            diskon = 0; // tidak dapat diskon
        }
        let totalDiskon = this.totalHarga * diskon;
        let totalHargaSetelahDiskon = this.totalHarga - totalDiskon;

        
        console.log(`Total Harga: ${this.totalHarga}`);
        console.log(`Dapat Diskon: ${diskon * 100} %`);
        console.log(`Total Diskon: ${totalDiskon}`);
        console.log(`Total Harga setelah Diskon: ${totalHargaSetelahDiskon}`);
    }
}



module.exports = Laptop;