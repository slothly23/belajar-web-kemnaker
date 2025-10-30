//  ===== Calback Vs Promise Vs AsyncAwait =====

// versi callback
// setTimeout(() => {} , 1000);
function panggilPasien(nomor, callback) {
    setTimeout(() => {
        console.log(`memanggil pasien nomor ${nomor}`);
        callback();
    } , 1000); // tiap pasien jeda 1 detik
}

// callback hell
panggilPasien(1, () => {
    panggilPasien(2, () => {
        panggilPasien(3, () => {
            console.log("Semua pasien sudah dipanggil");
        })
    })
});

// versi promise
function panggilPasienPromise(nomor) {
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log(`Memanggil pasien nomor ${nomor}`);
            resolve();
        }, 1000);  // tiap pasien jeda 1 detik
    })
}

// then catch
// penulisan lebih rapi

panggilPasienPromise(1)
.then(() => panggilPasienPromise(2)) 
.then(() => panggilPasienPromise(3)) 
.then(() => { console.log("Semua pasien sudah dipanggil"); });

// versi looping jika antrian banyak
let chain = Promise.resolve(); // mulai dengan promise kosong

for (let i = 1; i <= 3 ; i++) {
    chain = chain.then(() => panggilPasienPromise(i)); // panggil pasien selanjutnya
    // a = a + 1
}

chain.then(() => {
    console.log("Semua pasien sudah dipanggil");
})


//async await menggantikan then catch
async function jalankanAntrian() {
    await panggilPasienPromise(1);
    await panggilPasienPromise(2);
    await panggilPasienPromise(3);
    console.log("Semua pasien sudah dipanggil");

}

// versi looping
async function jalankanAntrian() {
    for (let i = 1; i <= 3; i++) {
        await panggilPasienPromise(i);
    }
    console.log("Semua pasien sudah dipanggil");
}


jalankanAntrian();