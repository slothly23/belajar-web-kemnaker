function filterBooksPromise(colorful, amountOfPage) {
    return new Promise((resolve, reject) => {
        var books = [
            {name: 'shinchan', totalPage: 50, isColorful: true},
            {name: 'kalkulus', totalPage: 250, isColorful: false},
            {name: 'doraemon', totalPage: 50, isColorful: true},
            {name: 'algoritma', totalPage: 250, isColorful: false},
        ] 

        if (amountOfPage >= 40) {
            resolve(books.filter(x => x.totalPage == amountOfPage && x.isColorful == colorful));
        } else {
            var reason = new Error("Maaf buku dibawah halaman 40 tidak tersedia");
            reject(reason);
        }
    })
}

module.exports = filterBooksPromise;