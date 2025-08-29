const textField = document.querySelector('#clipboard-input');
const stats = document.querySelector('#status');
const btns = document.querySelectorAll('.btn');

// function for copy full text
function copy() {

    // get the inputed value
    const input = textField.value.trim();

    // check if there's no value inside textarea
    if (!input) {
        alert('Plase input something')
        return
    }

    // copying animation
    stats.style.display = 'block';

    // set timeout function to add some animation
    setTimeout(() => {
        stats.style.display = 'none';
    }, 1000)
    
    // return value with copy
    return navigator.clipboard.writeText(input)
}

// set function for each button
btns.forEach(btn => {

    // set event listener for each button
    btn.addEventListener('click', (e) => {

        // set the target value inside a variable
        const targetedItem = e.target;

        // check if the button is copy button then simply run the copy function
        if (targetedItem.className === 'btn btn-primary') {
            copy()
        }

        // if the button is reset button then simply remove all value from text field
        else if (targetedItem.className === 'btn btn-ghost') {
            textField.value = ''
        }
    })
})