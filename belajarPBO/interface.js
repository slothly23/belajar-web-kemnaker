// menurunkan perilaku dari 2 orangtua
// child
var Cat = /** @class */ (function () {
    function Cat(nama, deskripsi) {
        this.nama = nama;
        this.deskripsi = deskripsi;
    }
    Cat.prototype.suara = function () {
        console.log("".concat(this.nama, " ").concat(this.deskripsi, " says meoww"));
    };
    return Cat;
}());
