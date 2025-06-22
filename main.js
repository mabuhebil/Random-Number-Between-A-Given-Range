const generateBtn = document.querySelector('button')
const minInput = document.querySelector('.min')
const maxInput = document.querySelector('.max')
const resultDiv = document.querySelector('.result')


console.log(generateBtn)
function Random() {
    let minValue = Number(minInput.value)
    let maxValue = Number(maxInput.value)

    if (minValue > maxValue) {

        minValue = minValue + maxValue;
        maxValue = minValue - maxValue;
        minValue = minValue - maxValue;
        minInput.value = minValue;
        maxInput.value = maxValue;
    }

    let num = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    resultDiv.textContent = num
}


generateBtn.addEventListener('click', Random)