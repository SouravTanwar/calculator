function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('display');
    if (display.innerText === 'Error') {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1) || '0';
    }
}

function appendCharacter(character) {
    let display = document.getElementById('display');
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = character;
    } else {
        display.innerText += character;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

function resetCalculator() {
    document.getElementById('display').innerText = '0';
}
