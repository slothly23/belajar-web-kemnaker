var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'Komik', timeSpent: 1000},
]


readBooks(10000, books[0], function() {
    readBooks(7000, books[1], function() {
        readBooks(5000, books[2], function() {
            readBooks(1000, books[3], function() {
                console.log("semua buku sudah dibaca...");
            })
        })
    })
});
