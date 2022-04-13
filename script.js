//Pesan selamat datang
alert(`Selamat datang di game tebak angka
kamu diminta untuk menebak angka 1 - 3
dan kamu akan bermain dalam 5 ronde.
player yang berhasil mengumpulkan tebakan terbanyak akan menang
SELAMAT BERMAIN!!!`);

//Inisialisasi permainan
let skorP1 = 0;
let skorP2 = 0;
let ronde = 1;
let stop = true;

while (stop) {
  //Meminta input dari kedua pemain
  let p1 = parseInt(prompt("Player 1: masukan angka"));
  let p2 = parseInt(prompt("Player 2: masukan angka"));
  //Mendapatkan angka random 1-3
  let random = getRandom();
  //Validasi aturan tebakan kedua pemain
  let ulangi = validasi(p1, p2);

  //Pilihan mengulangi permainan
  if (!ulangi) {
    stop = window.confirm("Ulangi?");
  } else {
    if (p1 !== random && p2 !== random) {
      alert("Tidak ada yang benar. hasil SERI");
    } else {
      if (p1 === random) {
        alert("Player 1 Win");
        skorP1++;
      }
      if (p2 === random) {
        alert("Player 2 Win");
        skorP2++;
      }
    }

    alert(`
    Nilai yang dicari: ${random}
    -----------------------------------
    - Player 1: ${skorP1}
    - Player 2: ${skorP2}`);

    //Logic untuk memainkan psikologi kedua pemain
    ronde++;
    if (ronde <= 5) {
      stop = window.confirm("Ronde " + ronde + "?");
    } else {
      //Memuji player 1
      if (skorP1 > skorP2) {
        alert("Good Jobs Player 1");
        stop = false;
      } else if (skorP1 < skorP2) {//Memuji player 2
        alert("Good Jobs Player 2");
        stop = false;
      } else {
        //Reset ke angka awal jika pertarungan seri terus-menerus
        alert(`Wow pertarungan yang sangat sengit`);
        ronde = 1;
        skorP1 = 0;
        skorP2 = 0;
        stop = window.confirm("mau main lagi?");
      }
    }
  }
}

//Hukum yang berlaku di permainan antar player
function validasi(player1, player2) {
  //Tebakan tidak boleh sama
  if (player1 === player2) {
    alert("tebakan tidak boleh sama");
    return false;
  }
  //Tebakan hanya rentang angka 1-3
  if (player1 < 1 || player2 < 1) {
    alert("tebakan tidak boleh lebih kecil dari 1");
    return false;
  }
  if (player1 > 3 || player2 > 3) {
    alert("tebakan tidak boleh lebih besar dari 3");
    return false;
  }
  //Jika salah satu atau keduanya tidak mengisi angka tebakan
  if (isNaN(player1) || isNaN(player2)) {
    alert("salah satu player belum menebak");
    return false;
  }
  //Mengakhiri validasi
  return true;
}

//Definisikan fungsi untuk mendapat angka random 1-3
function getRandom() {
  const range = [1, 2, 3];
  let isNotRandom = true;
  while (isNotRandom) {
    let random = Math.floor(Math.random() * 10);
    let ketemu = range.find((r) => r === random);
    if (ketemu) {
      isNotRandom = false;
      return random;
    }
  }
}
//Tampilkan angka random di console
console.log(getRandom());
