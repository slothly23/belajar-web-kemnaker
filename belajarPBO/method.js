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