class Car {
    // method pada class => tanpa properti (yang this.---)
    sound() {
        // perilaku
        return "vroom... vroom";
    }
}

// instantiate
var mobil1 = new Car();
console.log(mobil1.sound());

console.log();

// method dengan parameter
class Car2 {
    // method 
    sound(x) {
        // perilaku
        return x + ", suara mobil saya vroom";
    }
}

// instantiate
var mobil2 = new Car2();
console.log(mobil2.sound("Haiii"));


// class dengan percabangan
// identifikasi kekuatan baterai laptop dengan menggunakan percabangan (if, switch)

// class kombinasi properti + method
class Laptop {
    constructor(merk, baterai){
        this.merk = merk;
        this.baterai = baterai;
    }
    // method
    // perilaku methodnya adalah percabangan
    cekBaterai(){
        if (this.baterai >= 80) {
            console.log(`${this.merk} : Baterai Penuh (${this.baterai}%)`);
        } else if (this.baterai >= 30) {
            console.log(`${this.merk} : Baterai Sedang (${this.baterai}%)`);
        } else {
            console.log(`${this.merk} : Baterai Lemah (${this.baterai}%)`);
        }
    }
}

// instantiate
const laptop1 = new Laptop("Asus", 90);
laptop1.cekBaterai();