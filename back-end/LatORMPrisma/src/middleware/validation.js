const validationBodyMovies = (req, res, next) => {
    let { title, year } = req.body;

    //validasi ada variabel kosong
    if (title === undefined || year === undefined) {
        res.status(400).json({message: "title and year is required"});
    } else {
        next();
    }
}

const validationBodyCategories = (req, res, next) => {
    let { name } = req.body;

    //validasi jika variabel nama kosong
    if (name === undefined) {
        res.status(400).json({message: "name is required"});
    } else {
        next();
    }
}

// export middleware untuk di pakai di route
module.exports = {
    validationBodyMovies, validationBodyCategories
}
