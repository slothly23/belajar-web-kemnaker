// buat variabel yg nilainya diambil dari class
var Car = class {
    constructor(brand){
        this.brand = brand;
    }
}

// penulisan lain, bisa menentukan nama classnya
var Car2 = class Car3{
    constructor(brand){
        this.brand = brand;
    }
}

// instantiate
var mobil1 = new Car('Toyota');
console.log(mobil1.brand);

