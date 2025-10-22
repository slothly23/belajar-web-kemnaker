// menambah/ menghapus elemen array

// push
console.log("menambah elemen di akhir");
let buah = ["apel", "jeruk"];
buah.push("anggur");
console.log(buah);
console.log();

// pop
console.log("menghapus elemen di akhir");
let buah1 = ["apel", "mangga", "jeruk"];
buah.pop();
console.log(buah1);
console.log();

// unshift
console.log("menambah elemen di awal");
let buah2 = ["apel", "jeruk"];
buah2.unshift("stroberi");
console.log(buah2);
console.log();

// shift
console.log("menghapus elemen di awal");
let buah3 = ["stroberi", "mangga", "jeruk"];
buah3.shift();
console.log(buah3);
console.log();

//menambah elemen di posisi tertentu
let angka = [1,2,4,5];
angka.splice(2,0,3);
console.log(angka);
console.log();

//menghapus elemen di posisi tertentu
let angka2 = [1,2,3,4,5];
angka2.splice(2,2);
console.log(angka2);
console.log();

//menghapus elemen di posisi tertentu
let angka3 = [1,2,3,4,5];
// start index 1
// sampai sebelum index 4
let potong = angka3.slice(1,4);
console.log(angka3);
console.log(potong);
console.log();


