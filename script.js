function calculateBMI() {
  let weight = parseFloat(document.getElementById("weight").value);
  let heightCm = parseFloat(document.getElementById("height").value);
  let result = document.getElementById("result");

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    result.innerText = "Enter your weight and height";
    result.style.color = "#555";
    return;
  }

  let heightM = heightCm / 100;
  let bmi = (weight / (heightM * heightM)).toFixed(1);

  if (bmi < 18.5) {
    result.innerText = `BMI: ${bmi} - Underweight`;
    result.style.color = "#f59e0b";
  } else if (bmi < 25) {
    result.innerText = `BMI: ${bmi} - Normal`;
    result.style.color = "#10b981";
  } else if (bmi < 30) {
    result.innerText = `BMI: ${bmi} - Overweight`;
    result.style.color = "#f97316";
  } else {
    result.innerText = `BMI: ${bmi} - Obese`;
    result.style.color = "#ef4444";
  }
}
