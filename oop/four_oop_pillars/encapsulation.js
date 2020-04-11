// Initial case
function Ongkir(berat) {
  this.pajak = 500000000;
  this.biaya = function () {
    return berat * 1000;
  };

  this.totalBiaya = function () {
    return this.biaya() + this.pajak;
  };
}

const laptop = new Ongkir(4);

// console.log(laptop.totalBiaya(), "--initial");

laptop.pajak = 100;

// console.log(laptop.totalBiaya(), "--modified by public");

// encapsulation
function OngkirEncapsulate(berat) {
  const pajak = 500;
  this.alamat = "Ruang Kreasi";
  let biaya = function () {
    return berat * 1000;
  };

  this.totalBiaya = function () {
    return biaya() + pajak;
  };

  this.showAlamat = function () {
    return this.alamat;
  };
}

let laptop1 = new OngkirEncapsulate(4);
laptop1.pajak = 1000;
// console.log(laptop1.showAlamat());
