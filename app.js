// takng varibales
const btns = document.querySelectorAll('.buttons button');
const display =  document.querySelector('#displayCount'); 

// special characters & empty variable for result
const opearators = ['%', '/', '*', '-', '+', '='];
let result = '';

// function
function calc(value) {
    
    // if equal button pressed and value is not empty then inside the result variable change every string into code by using eval() function.
    if (value === '=' && value !== '') {
        result = eval(result.replace('%', '/100'));
    } 
    // check another condition when it says the button value is clearAll = All empty
    else if (value === 'clearAll') result = '';
    // check another condition when it says the button value is just clear = cut numbers from the last
    else if (value === 'clear') {
        result = result.toString().slice(0, -1)
    }
    // and finally if the button value is empty and it value includes the operator array then simply return false and close the declaration of output. Then simply say, result += button value
    else {
        if (value === '' && opearators.includes(value)) return;
        result += value;
    }

    // print the value inside the final output attribute
    display.textContent = result;
}

// call the function on each button clicked by using event listener
btns.forEach(btn => {
    btn.addEventListener('click', (e) => calc(e.target.value))
})