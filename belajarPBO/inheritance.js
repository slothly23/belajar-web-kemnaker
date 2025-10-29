// buat siapa yg jadi orang tua dan siapa yang jadi anak

// buat class parent, namanya bebas ini contoh Parent
class Parent {
    constructor(greeting) {
        this.greeting = greeting;
    }

    // method milik parent
    parentSay() {
        console.log(`${this.greeting} this is the parent greeting`);
    }
}

// child class
// mewarisi class parent
// bisa memakai properti dari parent class

class Child extends Parent { // extends ... deklarasi bahwa ini adalah child dari parent class
    constructor(greeting, name) {
        super(greeting); // untuk menggunakan properti dari parent
        this.name = name;
    }

    // method child
    childSay() {
        console.log(`${this.greeting}, ${this.name} this is the child greeting`);
    }
}

// instantiate
var parent1 = new Parent("Hai");
parent1.parentSay();

var child1 = new Child("Hello", "Nilam");
child1.childSay();