var Car = class {
        // encaptulation
    constructor(brand){
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
}

newcar = new Car('pajero');
// s
// _ adalah encaptulation / di private masih bisa diakses diluar class
// _carname bukan variabel
console.log(newcar.carname);
console.log(newcar._carname);


// yang benar-benar privat, hanya bisa diakses di dalam class saja
var Car1 = class {
    // encaptulation, carname dibuat private
    #carname // harus bikin field nya dulu sebelum constractor
    constructor(brand){
        this.#carname = brand;
    }
    get carname() {
        return this.#carname;
    }
    set carname(x) {
        this.#carname = x;
    }
}

newcar1 = new Car1('pajero');
console.log(newcar.carname);
console.log(newcar.#carname); // carname ga bisa di akses
