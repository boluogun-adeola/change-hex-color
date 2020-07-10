const body = document.querySelector('body');
const button = document.getElementById("btn");
const value = document.getElementById("hex-value");
const hexValues= ['A','B','C','D','E','F',0,1,2,3,4,5,6,7,8,9];


 changeHexNumber = () => {
    let hexNumber='#';
    for (let i = 0; i < 6; i++){
        const hexColor = Math.floor(Math.random()*hexValues.length);
        hexNumber += hexValues[hexColor];
    }
    body.style.backgroundColor = hexNumber;
    value.textContent = hexNumber;
   
    }

button.onclick = changeHexNumber;



