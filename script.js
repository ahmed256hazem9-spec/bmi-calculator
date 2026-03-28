function calculateBMI() {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const result = document.getElementById("result");
  const weight = parseFloat(weightInput.value);
  const heightCm = parseFloat(heightInput.value);
  if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
    result.innerText = "Enter valid weight and height";
    result.style.color = "#555";
    return;
  }
  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const bmiRounded = bmi.toFixed(1);

  if (bmi < 18.5) {
    result.innerText = `BMI: ${bmiRounded} - Underweight`;
    result.style.color = "#f59e0b";
  } else if (bmi < 25) {
    result.innerText = `BMI: ${bmiRounded} - Normal`;
    result.style.color = "#10b981";
  } else if (bmi < 30) {
    result.innerText = `BMI: ${bmiRounded} - Overweight`;
    result.style.color = "#f97316";
  } else {
    result.innerText = `BMI: ${bmiRounded} - Obese`;
    result.style.color = "#ef4444";
  }
}
