const display=document.getElementById('display');
const buttons=document.querySelectorAll('.btn');
let currentInput= '';
let previousInput= '';
let operator= '';
buttons.forEach(button => {
    button.addEventListener('click',() => {
        const value= button.getAttribute('data-value');

        if(value=== 'C') {
            currentInput= '';
            previousInput= '';
            operator= '';
            display.textContent= '0';
        }
        else if(['+','-','*','/'].includes(value)) {
            operator= value;
            previousInput= currentInput;
            currentInput= '';
        }
        else if(value=== '='){
            if(previousInput && currentInput && operator) {
                currentInput= String(
                    eval(`${previousInput} ${operator} ${currentInput}`)
                );
                display.textContent= currentInput;
                previousInput= '';
                operator= '';
            }
        }
        else {
            currentInput+= value;
            display.textContent= currentInput;
        }
    });
});