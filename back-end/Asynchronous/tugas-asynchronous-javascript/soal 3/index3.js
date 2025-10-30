var filterBooksPromise = require('./promise2.js');

// menggunakan promise
// buku berwarna dan jumlah halamannya 50
filterBooksPromise(true, 50)
  .then((books) => {console.log('buku berwarna dan jumlah halamannya 50: ', books)})
  .catch((err) => {console.error('Error:', err.message)});

// menggunakan async await
async function checkBook() {
  // cari buku hitam putih, jumlah halaman 250
  try {
    const result = await filterBooksPromise(false, 250);
    console.log("buku hitam putih, jumlah halaman 250: ", result);
  } catch (err) {
    console.error("Error async/await:", err.message);
  }

  // buku berwarna dan jumlah halamannya 30
  // buku tidak tersedia
  try {
    const result = await filterBooksPromise(true, 30);
    console.log("buku berwarna dan jumlah halamannya 30: ", result);
  } catch (err) {
    console.error("Error: ", err.message);
  }
}

// cara lain
// bisa buat 2 async function terpisah untuk setiap kasus
  // cariBukuHitamPutih()
  // cariBukuTidakTersedia()

checkBook();
