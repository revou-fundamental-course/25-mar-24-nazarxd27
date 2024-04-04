function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;

  if (weight === "" || height === "") {
    alert("Masukkan Berat Badan dan Tinggi Badan");
    return;
  }

  var bmi = weight / ((height / 100) * (height / 100));
  var hasil = "BMI kamu adalah\n" + bmi.toFixed(2);

  if (bmi < 18.5) {
    hasil += "\nAnda kekurangan berat badan";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    hasil += "\nBerat badan anda normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    hasil += "\nAnda kelebihan berat badan";
  } else {
    hasil += "\nAnda mengalami obesitas";
  }

  document.getElementById("result").innerText = hasil;
}

function resetInput() {
  document.getElementById("weight").value = "";
  document.getElementById("height").value = "";
}
