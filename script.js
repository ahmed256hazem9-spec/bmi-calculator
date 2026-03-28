function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value / 100;
  let result = document.getElementById("result");

  if (weight === "" || height === "") {
    result.innerText = "Please enter all values";
    return;
  }

  let bmi = (weight / (height * height)).toFixed(1);

  if (bmi < 18.5) {
    result.innerText = "Underweight";
  } else if (bmi < 25) {
    result.innerText = "Normal";
  } else if (bmi < 30) {
    result.innerText = "Overweight";
  } else {
    result.innerText = "Obese";
  }
}
