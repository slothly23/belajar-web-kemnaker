class Car {
    // method pada class => tanpa properti (yang this.---)
    sound() {
        // perilaku
        return "vroom... vroom";
    }
}

// instantiate
var mobil1 = new Car();
console.log(mobil1.sound());

console.log(); // satu baris kosong

// method dengan parameter
class Car2 {
    // method 
    sound(x) {
        // perilaku
        return x + ", suara mobil saya vroom";
    }
}

// instantiate
var mobil2 = new Car2();
console.log(mobil2.sound("Haiii"));
console.log(); // satu baris kosong


// class dengan percabangan
// identifikasi kekuatan baterai laptop dengan menggunakan percabangan (if, switch)

// class kombinasi properti + method
class Laptop {
    constructor(merk, baterai){
        this.merk = merk; // ini properti
        this.baterai = baterai; // ini properti
    }
    // method
    // perilaku methodnya adalah percabangan
    cekBaterai(){
        if (this.baterai >= 80) {
            console.log(`${this.merk} : Baterai Penuh (${this.baterai}%)`);
        } else if (this.baterai >= 30) {
            console.log(`${this.merk} : Baterai Sedang (${this.baterai}%)`);
        } else {
            console.log(`${this.merk} : Baterai Lemah (${this.baterai}%)`);
        }
    }
}

// instantiate
const laptop1 = new Laptop("Asus", 90);
// untuk menampilkan langsung panggil method karena di dalamnya sudah ada console.log
laptop1.cekBaterai();
console.log(); // satu baris kosong




// LATIHAN METHOD
/* 
properti nilai, 

ketentuan 100 - 90 sangat baik
89 - 80 baik
79 - 70 cukup
69 - 60 kurang
< 59 tidak lulus
*/

class Peserta {
    constructor(nama, umur, proglat, nilai){
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
        this.nilai = nilai;
    }
    // method menentukan predikat nilai
    cekNilai() {
        // console.log bisa taruh sini aja biar sekali aja untuk menampilkan nama,umur,proglat : taruh di satu variabel
        if(this.nilai >= 90) {
            console.log(`Nama : ${this.nama}, Nilai : ${this.nilai}, Keterangan: Sangat Baik`);
        } else if(this.nilai >= 80) {
            console.log(`Nama : ${this.nama}, Nilai : ${this.nilai}, Keterangan: Baik`);
        } else if(this.nilai >= 70) {
            console.log(`Nama : ${this.nama}, Nilai : ${this.nilai}, Keterangan: Cukup`);
        } else if(this.nilai >= 60) {
            console.log(`Nama : ${this.nama}, Nilai : ${this.nilai}, Keterangan: Kurang`);
        } else {
            console.log(`Nama : ${this.nama}, Nilai : ${this.nilai}, Keterangan: Tidak Lulus`);
        }
    }
}

// instantiate
var peserta1 = new Peserta('Daisy', 20, 'pbl Web', 90),
    peserta2 = new Peserta('Rose', 20, 'pbl Web', 87),
    peserta3 = new Peserta('Sunny', 20, 'pbl Web', 77),
    peserta4 = new Peserta('lina', 20, 'pbl Web', 65),
    peserta5 = new Peserta('dhea', 20, 'pbl Web', 50);


// tampilkan
peserta1.cekNilai();
peserta2.cekNilai();
peserta3.cekNilai();
peserta4.cekNilai();
peserta5.cekNilai();


