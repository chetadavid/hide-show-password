let demo = document.getElementById('demo');

demo.style.color='blue';
demo.style.fontSize='40px';

demo.innerHTML = "anything";


console.log("hey dear")

let P = 10000;
let R = 5/100
let T = 6;

let SI = P * R * T;

demo.textContent = SI;
console.log(SI)