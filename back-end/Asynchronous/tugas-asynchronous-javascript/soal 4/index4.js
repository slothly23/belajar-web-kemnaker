var filterCarsPromise = require('./promise3.js');

// cari mobil hitam tahun 2019
filterCarsPromise("black", 2019)
    .then((result) => {
        console.log("mobil hitam tahun 2019: ", result)
    })
    .catch((err) => {
        console.log(err)
    })

// cari mobil silver tahun 2017
filterCarsPromise("silver", 2017)
    .then((result) => {
        console.log("mobil silver tahun 2017", result)
    })
    .catch((err) => {
        console.log(err)
    })

async function checkCars() {
    // cari mobil abu-abu tahun 2019
    try {
        const result = await filterCarsPromise("grey", 2019);
        console.log("mobil abu-abu tahun 2019: ", result);
    } catch (error) {
        console.error(error.message);
    }

    // cari mobil abu-abu tahun 2018
    try {
        const result = await filterCarsPromise("grey", 2018);
        console.log("mobil abu-abu tahun 2018: ", result);
    } catch (error) {
        console.error(error.message);
    }

    // cari mobil hitam tahun 2020
    try {
        const result = await filterCarsPromise("black", 2020);
        console.log("mobil hitam tahun 2020: ", result);
    } catch (error) {
        console.error(error.message);
    }
}

checkCars();