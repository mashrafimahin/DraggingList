// get data from html
const select = document.querySelector('#select');
const input = document.querySelector('#input');
const btn = document.querySelector('#btn');

// auto check function with attribute changes
function autoFill() {
    
    // run function on selection changes
    select.addEventListener('change', () => {
        if (select.value === 'hsx') {
            input.setAttribute('placeholder', '000000')
        }
        else {
            input.setAttribute('placeholder', 'red, green, blue')
        }
    })
}

// color change on button click
btn.addEventListener('click', () => {
    // get values
    let selectValue = select.value;
    let inputData = input.value.trim();
    
    // checkpoint
    if (inputData === '') {
        alert('You must have to add color code.');
        return;
    }

    // default code
    let code = '';

    // set color code by following condition
    if (selectValue === 'hsx') {
        code = `#${inputData}`
    }
    else if (selectValue === 'rgb') {
        code = `rgb(${inputData})`
    }

    // change the body background with inputed values
    document.body.style.background = code;
})

// Initialize the auto check function
autoFill();