
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        console.log('The length of pin is 3 found and pin is ', pin);
        return getPin();
    }
}


function generatePin() {
    const pinNumber = getPin();
    document.getElementById('display-pin').value = pinNumber;

}


document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {

        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;

        calcInput.value = newNumber;
    }

})

function verifyPin() {
    const pinNumber = document.getElementById('display-pin').value;
    const typedPin = document.getElementById('typed-numbers').value;

    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');

    if (pinNumber == typedPin) {

        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
    }
    else {
        notifySuccess.style.display = 'none';
        notifyFail.style.display = 'block';
    }
}




