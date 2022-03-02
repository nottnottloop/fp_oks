const resultText = document.querySelector("#result")

const loadRandomColour = () => {
    fetch('http://localhost:4002/something-new')
    .then(response => response.json())
    .then(result => {
        console.log(result.colour);
        resultText.innerHTML = `<h3 style="color: ${result.colour}">${result.colour}</h3>`
        //the variable was "result.colours" instead of "result.colour"
    })
}

const loadAllColours = () => {
    fetch('http://localhost:4002/find-yours')
    .then(response => response.json())
    .then(result => {
        console.log(result);
        result.forEach(e => {
            resultText.insertAdjacentHTML("beforeend", `<h3 style="color: ${e.colour}">${e.colour}</h3><br>`);
        })
        //the variable was "result.colours" instead of "result.colour"
    })
}

const allColours = document.querySelector('#btn')
const generateColour = document.querySelector('#generate')

generateColour.addEventListener('click', () => {
    loadRandomColour();
})

allColours.addEventListener('click', () => {
    loadAllColours();
})
