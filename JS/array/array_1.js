// array 1 dimensi
console.log("array 1 di mensi");
let buah = ["apel", "jeruk", "nangka"];
console.log(buah[0]);
console.log(buah[2]);
console.log();


// array of object
console.log("array of object");
let mobil = [
    {merk : "BMW", warna : "merah", tipe: "sedan"},
    {merk : "toyota", warna : "hitam", tipe: "box"},
    {merk : "audi", warna : "biru", tipe: "sedan"}
];

console.log(mobil[1].tipe);
console.log(mobil[2].merk);
console.log();


// panjang array
console.log("panjang array");
console.log(buah.length);
console.log(mobil.length);
console.log();


// foreach
console.log("foreach array");
buah.forEach(function(elemen, index) {
    console.log("index ke - " + index + ": " + elemen);    
})
console.log();

// foreach object
console.log("foreach array of object");
mobil.forEach(function (item, index) {
    console.log(`mobil ke-${index + 1}`);
    console.log(`merk : ${item.merk}`);
    console.log(`merk : ${item.warna}`);
    console.log(`merk : ${item.tipe}`);
});
console.log();

// map
console.log("array map");
let arrayWarna = mobil.map(function(item) {
    return item.warna;
});
console.log(arrayWarna);
console.log();

// filter
console.log("array filter");
let arrayMobilFilter = mobil.filter(function(item) {
    return item.tipe != "sedan";
});
console.log(arrayMobilFilter);
console.log();

