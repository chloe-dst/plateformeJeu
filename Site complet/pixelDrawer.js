const colorPicker = document.getElementById('colorPicker');
const table = document.getElementById('table');
const clear = document.getElementById('clear');
const eraser = document.getElementById('eraser');
const eyeDropper = document.getElementById('eyeDropper');

colorPicker.addEventListener('change', watchColorPicker);
table.addEventListener('click', squareClick);
clear.addEventListener('click', clearTable);
eraser.addEventListener('click', squareEraser);
eyeDropper.addEventListener('click', eyeDropperTool);

// Bouton actif
let ul = document.querySelector('ul');
var li = document.querySelectorAll('li');

li.forEach(element => {
    element.addEventListener('click', function () {
        ul.querySelector('.active').classList.remove('active');
        element.classList.add('active');
    });
});

// Pipette
let isEyeDropperToolActive = false;

function eyeDropperTool() {
    isEyeDropperToolActive = !isEyeDropperToolActive;
}

// Choisir une couleur
let currentColor = '#000000';

function watchColorPicker(event) {
    currentColor = event.target.value
}

function squareClick(event) {
    //Si aucun TD selectionné retour outil inactif
    if (event.target.tagName != 'TD') return;{
    }
    // Colorer une case
    if (!isEyeDropperToolActive) {
        event.target.style.backgroundColor = currentColor;
    } else {
        // Capturer la couleur d'une case
        let squareColor = event.target.style.backgroundColor
        // Mettre la couleur capturée dans l'input color
        if (squareColor) {
            currentColor = squareColor
            colorPicker.value = rgbToHex(squareColor);
            // Retour outil inactif
            isEyeDropperToolActive = false
        }
    }
}

// Gomme 
function squareEraser() {
    document.body.style.cursor = "url('brush.png') 0 32, auto"

    currentColor = null;
}

// Tout effacer
function clearTable() {
    var x = document.getElementsByTagName("td");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = null;
    }
    currentColor = null;
}

// Convertir rgb en hexa
//source : https://webdevdesigner.com/q/background-color-hex-to-javascript-variable-612294/
function rgbToHex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
     return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
   }
