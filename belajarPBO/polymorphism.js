// POLYMORPHISM - OVERLOADING => javascript belum mendukung => diakalin menggunakan percabangan
// method satu, bisa inisiasi beberapa

// POLYMORPHISM - OVERRIDE
// menimpa, ciri : nama method di child sama dengan method di parent 

class Vehicle {
    sound() {
        console.log("This vehicle make a sound");
    }
}

// child 1
class Car extends Vehicle {
    sound() {
        console.log("Vroom... Vroom");
    }
}

// child 1
class Bike extends Vehicle {
    sound() {
        console.log("Ring... Ring");
    }
}

// buat object => instantiate
var vehicle1 = new Vehicle();
vehicle1.sound();

var vehicle2 = new Car();
vehicle2.sound(); // menampilkan hasil method .sound() class Car : method child menimpa method parent