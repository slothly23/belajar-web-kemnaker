var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'Komik', timeSpent: 1000},
]



readBooks(10000, books[0], function(sisaWaktu1) {
  readBooks(sisaWaktu1, books[1], function(sisaWaktu2) {
    readBooks(sisaWaktu2, books[2], function(sisaWaktu3) {
      readBooks(sisaWaktu3, books[3], function(sisaWaktu4) {
        console.log("Semua buku selesai dibaca atau waktu habis!");
      });
    });
  });
});
