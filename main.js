const generateBtn = document.querySelector('button')
const minInput = document.querySelector('.min')
const maxInput = document.querySelector('.max')


console.log(generateBtn)
function Random() {
    let minValue = Number(minInput.value)
    let maxValue = Number(maxInput.value)

    console.log(minValue, maxValue)
}


generateBtn.addEventListener('click', Random)