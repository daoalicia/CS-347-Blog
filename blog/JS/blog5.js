const submitButton = document.getElementById('submit');
const name = document.getElementById('name');

submitButton.addEventListener('click', () => {
    alert(`Hello ${name.value}!`);
});