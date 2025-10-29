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
        console.log(`Total Harga: ${this.totalHarga}`);
        console.log(`Dapat diskon: ${diskon * 100} %`);
        
        // console.log(`Nama: ${this.nama}, Umur: ${this.umur}, Program Pelatihan: ${this.proglat}, Nilai: ${Math.round(this.nilai)}, Keterangan: ${ket}`);
    }
}

// var laptop1 = new Laptop("Asus", 24000000);
// laptop1.cekDiskon();