// // cara kerja class kurang lebih seperti function di javascript


// class Car {
//     constructor(brand){
//         this.brand = brand;
//     }
// }

// // membuat sebuah object dari class yg dibuat sebelumnya
// // proses instantiate dari sebuah class

// // instantiate object 1
// var mobil1 = new Car('Mitsubishi');

// // cetak
// console.log(mobil1.brand);

// // mengganti brand mobil1
// mobil1.brand = "toyota";
// console.log(mobil1.brand);

// // instantiate object 2
// var mobil2 = new Car('Alphard');
// console.log(mobil2.brand);


// latihan class

// buat sebuah class dengan nama: peserta, proprti: nama, umur, program pelatihan (proglat: pblWeb)

class Peserta {
    constructor(nama, umur, proglat){
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
    }
}

// instantiate

var peserta1 = new Peserta('Daisy', 20, 'pblWeb');
console.log("nama : " + peserta1.nama);
console.log("Umur: " + peserta1.umur + " thn");
console.log("Program Pelatihan : " + peserta1.proglat);


