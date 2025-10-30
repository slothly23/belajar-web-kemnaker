var readBooksPromise = require('./promise.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'Komik', timeSpent: 1000},
]

readBooksPromise(10000, books[0])
.then(() => readBooksPromise(7000, books[1])).catch(() => {})
.then(() => readBooksPromise(5000, books[2])).catch(() => {})
.then(() => readBooksPromise(1000, books[3])).catch(() => {})
.then(() => readBooksPromise(0, books[1])).catch(() => {}) // sisa waktu sudah habis


