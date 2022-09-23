/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const btnElt = document.getElementById('convert');
const inputELt = document.getElementById('num');

btnElt.addEventListener('click', () => {
    if (+inputELt.value || +inputELt.value === 0) {
        renderConvertion(+inputELt.value);
    }
});

function renderConvertion(val) {
    document.querySelector('#length span').textContent = 
        `${val} meters = ${(val * 3.281).toFixed(3)} feet 
        | ${val} feet = ${((val === 0) ? 0 : val / 3.281).toFixed(3)} meters`;
    document.querySelector('#volume span').textContent = 
        `${val} liters = ${(val * 0.264).toFixed(3)} gallons | ${val} gallons = ${((val === 0) ? 0 : val / 0.264).toFixed(3)} liters`;
    document.querySelector('#mass span').textContent = 
        `${val} kilos = ${(val * 2.204).toFixed(3)} pounds | ${val} pounds = ${((val === 0) ? 0 : val / 2.204).toFixed(3)} kilos`;
}