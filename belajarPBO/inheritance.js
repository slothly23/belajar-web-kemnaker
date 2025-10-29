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
console.log("=========================================");
console.log();



// Latihan inheritance
    // yg method cekNilai() di parent, TIK (jurusan)
    // nama, umur, proglat di child

// -- program studi --
// child satu web, nilai rata-rata (3 matkul)
// child satu kontenVisual, nilai rata-rata (2 matkul)

// nilai panggil dari method parent


// parent class, hitung nilai siswa jurusan TIK
class Tik {
    constructor(nama, umur, proglat, nilai) {
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
        this.nilai = nilai; 
    }

    cekNilai() {
        let ket = ""

        if (this.nilai >= 90) {
            ket = "Sangat Baik";
        } else if (this.nilai >= 80) {
            ket = "Baik";
        } else if (this.nilai >= 70) {
            ket = "Cukup";
        } else if (this.nilai >= 60) {
            ket = "Kurang";
        } else {
            ket = "Tidak Lulus";
        }

        console.log(`Nama: ${this.nama}, Umur: ${this.umur}, Program Pelatihan: ${this.proglat}, Nilai: ${this.nilai.toFixed(2)}, Keterangan: ${ket}`);
        // .toFixed(2) => pembulatan sampai 2 angka dibelangkang koma
    }
}


// child 1
class Web extends Tik{
    constructor(nama, umur, proglat, nDatabase, nJavascript, nSql) { // nilai ga usah ditambahkan ke properti constructor karena ga diinput dari class child
        super(nama, umur, proglat); // urutan parameter harus sama persis dengan parent
        this.nDatabase = nDatabase;
        this.nJavascript = nJavascript;
        this.nSql = nSql;
    }

    // method web, cari nilai rata-rata
    nilaiAkhir() {
        this.nilai = (this.nDatabase + this.nJavascript + this.nSql) / 3;
        this.cekNilai(); // panggil method dari parent
    }
}

// child 2
class KontenVisual extends Tik{
    constructor(nama, umur, proglat, nCopywriting, nVideo) {
        super(nama, umur, proglat); 
        this.nCopywriting = nCopywriting;
        this.nVideo = nVideo;
    }

    // method konten visual
    nilaiAkhir() {
        this.nilai = (this.nCopywriting + this.nVideo) / 2;
        this.cekNilai(); // panggil method dari parent
    }
}

// buat object Web
var peserta1 = new Web("Dina", 20, "Web", 60, 70, 80); 
var peserta2 = new Web("Lia", 21, "Web", 60, 45, 80); 

// buat object Web
var peserta3 = new KontenVisual("Andi", 19, "Konten Visual", 100, 80); 
var peserta4 = new KontenVisual("Sinta", 18, "Konten Visual", 40, 50); 


// tampilkan hasil
peserta1.nilaiAkhir(); // panggil method dari class child
peserta2.nilaiAkhir();
peserta3.nilaiAkhir();
peserta4.nilaiAkhir();