//btn.onclick = () => alert("hello world");
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert('Hello world');
});
function alertFunction() {
    alert("Yay!Yay!");
}
btn.onclick = alertFunction;
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});
//Buttons is a node list. It looks and acts much like an array
const buttons = document.querySelectorAll('button');
// We use the .forEach method to iterate through each button
buttons.forEach((button) => {
    // and for each one we add a click listener
    button.addEventListener('click', () => {
        alert(button.id);
    })
});