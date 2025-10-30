var filterCarsPromise = require('../promise3.js');

filterCarsPromise("black", 2019)
    .then(result => console.log(result))
    .catch(err => console.log(err))

filterCarsPromise("silver", 2017)
    .then(result => console.log(result))
    .catch(err => console.log(err))

async function checCars() {
    try {
        const result = await filterCarsPromise("grey", 2019);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }

    try {
        const result = await filterCarsPromise("grey", 2018);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }

    try {
        const result = await filterCarsPromise("black", 2020);
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

checCars();