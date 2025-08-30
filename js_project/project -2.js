const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault();

    const height1 = parseInt(document.querySelector("#height").value);
    const weight1 = parseInt(document.querySelector("#weight").value);

    const result = document.querySelector("#results")

    if(height1 === ''|| height1 < 0 || isNaN(height1)){
        result.innerHTML = `Please provide a valid height ${height1}`;
    }
    else if(weight1 === ''|| weight1 < 0 || isNaN(weight1)){
        result.innerHTML = `Please provide a valid weight ${weight1}`;
    }
    else{
        const bmi = (weight1 / ((height1/100) ** 2)).toFixed(2);
        // result.innerHTML = `<span>Your BMI is ${bmi}</span>`;
        let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    result.innerHTML = `Your BMI is ${bmi} (${category})`;     
     }
});