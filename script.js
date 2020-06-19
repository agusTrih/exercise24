// pertama kita ubah semua string kedalam huruf kecil
// kedua kita split agar semua setiap kata bisa menjadi sub string, sehingga tiap array indeks 0 adalah huruf pertamanya
// lalu ambil indeks 0  dan buat dia menjadi capital setelah itu ambil sisa string kecuali yg sudah kapital
// lalu kita sambungkan kembali semua huruf depan dan sisanya
// finish
String.prototype.toTittleCase = function () {
    function capFirst(str) {
        if (str.length === 0) {
            return str;
        } else {
            return str[0].toUpperCase() + str.substr(1);
        }
    }
    return this.toLowerCase().split(" ").map(capFirst).join(" ");
};
let a = "agus trihanton";
console.log(a.toTittleCase());
