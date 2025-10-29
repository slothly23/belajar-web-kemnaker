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
console.log("=========================================");


// latihan getter - setter
// yg method cekNilai() atur agar ga bisa input nilai selain 0-100

class Peserta {
    constructor(nama, umur, proglat, nilai) {
        this.nama = nama;
        this.umur = umur;
        this.proglat = proglat;
        this.score = nilai; // gunakan setter agar validasi jalan
    }

    get score() {
        return this._nilai;
    }

    set score(value) {
        if (typeof value !== 'number' || value < 0 || value > 100) {
            console.log("Nilai harus berupa angka di antara 0 dan 100");
            this._nilai = 0; // default ke 0 jika invalid
            return;
        }
        this._nilai = value;
    }

    cekNilai() {
        let ket = ""

        if (this._nilai >= 90) {
            ket = "Sangat Baik";
        } else if (this._nilai >= 80) {
            ket = "Baik";
        } else if (this._nilai >= 70) {
            ket = "Cukup";
        } else if (this._nilai >= 60) {
            ket = "Kurang";
        } else {
            ket = "Tidak Lulus";
        }

        console.log(`Nama : ${this.nama}, Nilai : ${this._nilai}, Keterangan: ${ket}`);
    }
}

// instantiate
var peserta1 = new Peserta('Daisy', 20, 'pbl Web', -190); // otomatis ditolak dan diset ke 0

// tampilkan
peserta1.cekNilai();

