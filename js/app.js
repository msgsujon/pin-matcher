function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const getString = pin + '';
    if(getString.length == 4) {
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin() {
    document.getElementById('display-pin').value = getPin();
}


// bubble 

document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const InputNumber = document.getElementById('typed-numbers');
    
    if(isNaN(number)){
        if(number == 'C'){
            InputNumber.value = '';
        }
    }   
    else{
        const previousNumber = InputNumber.value;
        const newNumber = previousNumber + number;
        InputNumber.value = newNumber;
    }

})


function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers= document.getElementById('typed-numbers').value;
    if(pin == typedNumbers){
        document.getElementById('notify-success').style.display='block';
        document.getElementById('notify-fail').style.display='none';

    }
    else{
        document.getElementById('notify-fail').style.display='block';
        document.getElementById('notify-success').style.display='none';
    }
}