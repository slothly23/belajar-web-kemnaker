class Orang {
    constructor(nama) {
        this._nama = nama;
    }
    get nama() {
        console.log("Mengambil nama...");
        return this._nama;
    }
    set nama(value) {
        console.log("Mengubah nama...");
        if (value.length < 3) {
            console.log("nama terlalu pendek");
        } else {
            this._nama = value; // *
        }
    }
}

// instamtiate
const orang1 = new Orang("Nilam");
console.log(orang1.nama);

// inputan yg salah
orang1.nama = "Ni"

orang1.nama = "Yiswi"
// menampilkan yiswi harus pake console karena di * tiadak ada console
console.log(orang1.nama);


