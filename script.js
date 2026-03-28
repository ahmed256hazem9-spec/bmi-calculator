function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100;

    let bmi = weight / (height * height);

    let result = document.getElementById("result");

    if (bmi < 18.5) {
        result.innerText = "Underweight ";
    } else if (bmi >= 18.5 && bmi < 25) {
        result.innerText = "Normal ";
    } else if (bmi >= 25 && bmi < 30) {
        result.innerText = "Overweight ";
    } else {
        result.innerText = "Obese ";
    }
}
