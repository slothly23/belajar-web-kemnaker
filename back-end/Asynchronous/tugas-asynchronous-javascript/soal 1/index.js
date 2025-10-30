var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'Komik', timeSpent: 2000}
]



// readBooks(10000, books[0], function(sisaWaktu1) {
//   readBooks(sisaWaktu1, books[1], function(sisaWaktu2) {
//     readBooks(sisaWaktu2, books[2], function(sisaWaktu3) {
//       readBooks(sisaWaktu3, books[3], function(sisaWaktu4) {
//         console.log("Semua buku selesai dibaca atau waktu habis!");
//       });
//     });
//   });
// });


// function readAllBooks(index, time) {
//   if (index < books.length) {
//     readBooks(time, books[index], function (sisaWaktu) {
//       // lanjut ke buku berikutnya pakai sisa waktu
//       readAllBooks(index + 1, sisaWaktu);
//     });
//   } 
// }

// cara bu chika
function readAllBooks(index, time) {
  if (index < books.length && time > 0) {
    const book = books[index];
    if (time >= book.timeSpent) {
      readBooks(time, book, (sisa) => readAllBooks(index + 1, sisa));
    } else {
      console.log(`Waktu ${time}ms tidak cukup untuk ${book.name}`);
      console.log("proses berhenti");
    }
  } else {
    console.log("semua buku sudah dibaca");
  } 
}

readAllBooks(0, 10000);