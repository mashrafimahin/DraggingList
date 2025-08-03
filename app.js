const input = document.querySelector('#password');
const bars = document.querySelectorAll('.bar');

input.addEventListener('input' , () => {

    // input value
    let inputValue = input.value;

    // length validation
    if (inputValue.length > 12) {
        alert('Your password must be in 12 characters');
        input.value = inputValue.slice(0, 12);
        inputValue = input.value;
        return;
    }

    // remove bars active classes
    bars.forEach(bar => bar.classList.remove('weak' , 'medium' , 'strong'));

    // set custom condition and index

      // Regex Pattern
      const meduimPattern = /^(?=.*[a-zA-Z])(?=.*\d).+$/;
      const hardPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[?!@#$&]).+$/    

      // set logic
      let customIndex = 0;

      if (inputValue.length > 0) {customIndex = 1};
      if (inputValue.length > 5 && meduimPattern.test(inputValue)) {customIndex = 2};
      if (inputValue.length > 7 && hardPattern.test(inputValue)) {customIndex = 3};

    // activation divs/bars
    bars.forEach((bar , index) => {

        // check bars index < customIndex
        if (index < customIndex) {

            // check customIndex to bars index number
            if (customIndex === 1) {
                bar.classList.add('weak');
            }
            else if (customIndex === 2) {
                bar.classList.add('medium');
            }
            else if (customIndex === 3) {
                bar.classList.add('strong');
            }
        }
    })
});


// Show/Hide Button
const btn = document.querySelector('#togglePassword');

// functionality
btn.addEventListener('click' , () => {

    // exchanging button classes
    btn.classList.toggle('fa-eye');
    btn.classList.toggle('fa-eye-slash');

    // show/hide
    let type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type' , type);
})