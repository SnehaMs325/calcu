const display= document.getElementById("display");
let erroroccur=false;

function appendToDisplay(value) {
    if(erroroccur) {
        clearDisplay();
        erroroccur = false;
    }
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";   
        erroroccur = true;    
    }
}

function clearDisplay() {
    display.value = "";
}
