let question;
let answer;
let questionQuantity = 0;
let correct = 0;
let wrong = 0;
let message;

user = window.prompt("Masukkan Nama Anda ");

while (questionQuantity < 3) {
  if (questionQuantity == 0) {
    question = window.prompt("Tahun Berapa Indonesia Merdeka ?");
    question = question.toLowerCase();
    answer = "1945";
  }

  if (questionQuantity == 1) {
    question = window.prompt(message + "\n\n" + "2 + 3 = ?");
    answer = "5";
  }

  if (questionQuantity == 2) {
    question = window.prompt(
      message + "\n\n" + "Pelukis Penyebab Perang Dunia Ke 2?"
    );
    question = question.toLowerCase();
    answer = "hitler";
  }

  if (question == answer) {
    correct += 1;
    message = "Jawaban Anda Benar";
  } else {
    wrong += 1;
    message = "Jawaban Anda Salah";
  }
  questionQuantity += 1;
}

document.writeln(" <h1></h1><hr />");
document.writeln(
  "<p>Anda Menjawab : <b>" +
    correct +
    "</b> dari <b>" +
    questionQuantity +
    "</b> question dengan benar!</p>"
);

let text = "Selamat " + user + " Telah Menyelesaikan Quiz";
let outputCharacters = text.split("");
let i = 0;
let interval = setInterval(writeText, 100);

function writeText() {
  let congratsElement = document.getElementsByTagName("h1")[0];
  if (i < outputCharacters.length) {
    congratsElement.innerHTML += outputCharacters[i];
    i++;
  }
}
