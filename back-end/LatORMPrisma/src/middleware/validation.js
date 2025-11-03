const validationBodyMovies = (req, res, next) => {
    let { title, year } = req.body;

    //validasi jika salah satu kosong
    if (title === undefined || year === undefined) {
        res.status(400).json({message: "title and year is required"});
    } else {
        next();
    }
}

const validationBodyCategories = (req, res, next) => {
    let { name } = req.body;

    //validasi jika salah satu kosong
    if (name === undifined) {
        res.status(400).json({message: "name is required"});
    } else {
        next();
    }
}

module.exports = {
    validationBodyMovies, validationBodyCategories
}