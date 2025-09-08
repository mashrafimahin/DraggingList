const user_name = document.querySelector('#name');
const user_email = document.querySelector('#email');
const user_mobile = document.querySelector('#phone');
const user_message = document.querySelector('#message');
const user_checkbox = document.querySelectorAll('.checkbox input');
const sendBtn = document.querySelector('#send');

// get local storage data record
let user = JSON.parse(localStorage.getItem('Name')) || [];

// storage pattern
function Pattern(username, email, mobile, message, choice) {
    return {
        user: username,
        email: email,
        mobile: mobile,
        message: message,
        interests: choice
    }
}

// store data to local 
function Store(username, object) {
    // checkpoint
    let currentCheck = localStorage.getItem('Name');
    let userLower = username.toLowerCase();
    
    if (
        currentCheck !== null &&
        currentCheck.includes(userLower)
    ) {
        alert('Already added into storage using this name. Please add another name to save data.');
        return;
    }

    // push record to usesr variable
    user.push(userLower);

    // store data 
    localStorage.setItem('Name', JSON.stringify(user));
    localStorage.setItem(userLower, JSON.stringify(object));
}

// Main function 
function Data() {
    // get values
    const username = user_name.value.trim();
    const email = user_email.value.trim();
    const mobile = user_mobile.value.trim();
    const message = user_message.value.trim();

    // validation
    if (username === '') {
        alert('Please add details to save in storage.');
        return;
    }
    
    // multiple choices
    let multipleChoice = [];
    user_checkbox.forEach(item => {
        if (item.checked) {
            multipleChoice.push(item.value);
        }
    });


    // store data for pattern
    let object = Pattern(username, email, mobile, message, multipleChoice);

    // main storage
    Store(username, object)

    console.log(multipleChoice)
}

// run function on click
sendBtn.addEventListener('click', (e) => {
    // prevent page from reload
    e.preventDefault();
    // call the main function
    Data()
})