function filterCarsPromise(color, year) {
    return new Promise(function(resolve, reject) {
        var cars = [
            {brand: 'toyota', name: 'avanza', year: 2019, color: 'black'},
            {brand: 'daihatsu', name: 'xenia', year: 2017, color: 'silver'},
            {brand: 'lamborghini', name: 'gallardo', year: 2018, color: 'grey'},
            {brand: 'honda', name: 'brio', year: 2019, color: 'black'},
            {brand: 'toyota', name: 'agya', year: 2020, color: 'black'},
            {brand: 'honda', name: 'jazz', year: 2018, color: 'grey'},
            {brand: 'suzuki', name: 'ertiga', year: 2019, color: 'silver'}
        ]

        var filteredCars = cars.filter(x => x.color === color && x.year === year)
        if (filteredCars.length > 0) {
            resolve(filteredCars);
        } else {
            var reason = new Error("Maaf data tidak ditemukan");
            reject(reason);
        }
    });
}

module.exports = filterCarsPromise;