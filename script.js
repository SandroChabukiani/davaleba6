"use strict";

//pirveli davaleba
const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('modal');
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
//meore davaleba
const colorInput = document.getElementById('colorInput');
const changeColorButton = document.getElementById('changeColorButton');

changeColorButton.addEventListener('click', () => {
    const color = colorInput.value.toLowerCase(); 
    const validColors = ["red", "blue", "green", "black", "white"];

    if (validColors.includes(color)) {
        document.body.style.backgroundColor = color;
    } else {
        alert("Invalid color. Please enter red, blue, green, black, or white.");
    }
});
//mesame davaleba
const numbersInput = document.getElementById('numbersInput');
const calculateAverageButton = document.getElementById('calculateAverageButton');
const averageResult = document.getElementById('averageResult');

calculateAverageButton.addEventListener('click', () => {
    const inputText = numbersInput.value;
    const numbers = inputText.split(':').map(Number);

    if (numbers.length > 0) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const average = sum / numbers.length;
        averageResult.textContent = `Average: ${average.toFixed(2)}`;
    } else {
        averageResult.textContent = "Please enter valid numbers separated by ':'";
    }
}); 