// menurunkan perilaku dari 2 orangtua

// interface sama seperti class => js tidak mendukung inteface harus pake typescript (file.ts)

// parent 1
interface Animal {
    nama: string;
    suara(): void;
}

// parent 2
interface Category {
    deskripsi: string;
}


// child
class Cat implements Animal, Category {
    nama: string;
    deskripsi: string;

    constructor(nama: string, deskripsi: string){
        this.nama = nama;
        this.deskripsi = deskripsi;
    }

    suara(): void {
        console.log(`${this.nama} ${this.deskripsi} says meoww`);
    }

}