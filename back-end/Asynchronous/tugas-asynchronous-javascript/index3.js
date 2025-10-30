var filterBooksPromise = require('./promise2.js');

// menggunakan promise
filterBooksPromise(true, 50)
  .then(result => console.log('Hasil:', result))
  .catch(err => console.error('Error:', err.message));

// menggunakan async await
async function checkBook() {
    await filterBooksPromise(false, 250);
}

async function checkBook() {
  try {
    const result1 = await filterBooksPromise(false, 250);
    console.log("Hasil async/await:", result1);
  } catch (err) {
    console.error("Error async/await:", err.message);
  }

  try {
    const result2 = await filterBooksPromise(true, 30);
    console.log("Hasil async/await:", result2);
  } catch (err) {
    console.error("Error async/await:", err.message);
  }
}

checkBook();
