var soal;
var jawaban;
var jumlahSoal = 0;
var benar = 0;
var salah = 0;

var pesan;

user = window.prompt("Masukkan Nama Anda ");

while (jumlahSoal < 3) {
  if (jumlahSoal == 0) {
    soal = window.prompt("Tahun Berapa Indonesia Merdeka ?");
    soal = soal.toLowerCase();
    jawaban = "1945";
  }

  if (jumlahSoal == 1) {
    soal = window.prompt(pesan + "\n\n" + "2 + 3 = ?");
    jawaban = "5";
  }

  if (jumlahSoal == 2) {
    soal = window.prompt(
      pesan + "\n\n" + "Pelukis Penyebab Perang Dunia Ke 2?"
    );
    soal = soal.toLowerCase();
    jawaban = "hitler";
  }

  if (soal == jawaban) {
    benar += 1;
    pesan = "Jawaban Anda Benar";
  } else {
    salah += 1;
    pesan = "Jawaban Anda Salah";
  }
  jumlahSoal += 1;
}

document.writeln(" <h1></h1><hr />");
document.writeln(
  "<p>Anda Menjawab : <b>" +
    benar +
    "</b> dari <b>" +
    jumlahSoal +
    "</b> soal dengan benar!</p>"
);
var text = "Selamat " + user + "Telah Menyelesaikan Quiz";
var word = text.split("");
var i = 0;
var interval = setInterval(writeText, 100);
function writeText() {
  var congrats = document.getElementsByTagName("h1")[0];
  if (i < word.length) {
    congrats.innerHTML += word[i];
    i++;
  }
}
