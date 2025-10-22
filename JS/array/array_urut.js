// pengurutan array 

// urut alfabet
// array.sort ga pakai function
console.log("urut alfabet");
let nama = ["saif", "yoga", "selly", "ika"]
nama.sort();
console.log(nama);
console.log();

// urut angka
// array.sort angka, pakai function

console.log("urut decending");
let angkaDesc = [40, 100, 1, 5, 25, 10];
angkaDesc.sort(function(a,b) {
    return b-a; // urut acending a-b
});
console.log(angkaDesc);
console.log();

// urut object
console.log("urut object");
let siswa = [
    {nama: "ali", nilai: 85},
    {nama: "budi", nilai: 92},
    {nama: "cici", nilai: 75}
];

// arrow function
siswa.sort((a,b) => b.nilai - a.nilai);
console.log(siswa);

// function biasa
siswa.sort(function(a,b){
    return b.nilai - a.nilai;
});
console.log(siswa);