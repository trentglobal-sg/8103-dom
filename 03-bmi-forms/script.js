let calculateBtn = document.querySelector("#calculateBtn");
calculateBtn.addEventListener("click", function(){

    // Extract out the values from the INPUT
    let weightTextbox = document.querySelector("#weight");
    let weight = parseFloat(weightTextbox.value);

    let heightTextbox = document.querySelector("#height");
    let height = parseFloat(heightTextbox.value);

    let selectedUnitRadio = document.querySelector(".units:checked");
    let unit = selectedUnitRadio.value;

    console.log(weight, height, unit);

    // Processing
    let bmi = null;
    if (unit == "imperial") {
        bmi = weight / height ** 2 * 703;
    }
    if (unit == "metric") {
        bmi = weight / height ** 2;
    }
    let resultDiv = document.querySelector("#results");
    resultDiv.innerHTML = `<h3>Your BMI is ${bmi}</h3>`;
})