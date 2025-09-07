// ------------------------------
// 📌 Get DOM elements
// ------------------------------
const names = document.querySelector('#name');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const btn = document.querySelector('#calculate');
const output = document.querySelector('#result');
let content = document.querySelector('.data');

// ------------------------------
// 📌 Load existing names from LocalStorage
// ------------------------------
let user_storage = JSON.parse(localStorage.getItem('Names')) || [];


// ------------------------------
// 📌 Save data to LocalStorage
// ------------------------------
function storage(user, object) {
    // Get previously saved names
    let getNames = JSON.parse(localStorage.getItem('Names'));

    // Prevent duplicate user name
    if (getNames !== null && getNames.includes(user)) {
        alert('Already added into storage.');
        return;
    }

    // Add new user into array
    user_storage.push(user);

    // Save updated names list
    localStorage.setItem('Names', JSON.stringify(user_storage));

    // Save this user's BMI record
    localStorage.setItem(user, JSON.stringify(object));
}


// ------------------------------
// 📌 Create a data pattern object
// ------------------------------
function pattern(height, weight, bmi) {
    return {
        Height: height,
        Weight: weight,
        BMI: bmi
    }
}


// ------------------------------
// 📌 Fetch and display stored data
// ------------------------------
function fetching() {
    let per_name = JSON.parse(localStorage.getItem('Names'));

    // Stop if nothing saved yet
    if (per_name === null) return;

    // Clear previous HTML before re-rendering
    content.innerHTML = `<h2>Previous Data</h2>`;

    // Loop through each saved user
    per_name.forEach(item => {
        let current = JSON.parse(localStorage.getItem(item));

        // Create an HTML block for each entry
        let HTML_pattern = 
        `<div class="content">
            <div class="info">
                <h2>Name: ${item}</h2>
                <div class="list">
                    <p>Height: ${current.Height}</p>
                    <p>Weight: ${current.Weight}</p>
                    <p>BMI: ${current.BMI}</p>
                </div>
            </div>
        </div>`;

        // Insert into .data container
        content.insertAdjacentHTML('beforeend', HTML_pattern);
    });
}


// ------------------------------
// 📌 Handle button click
// ------------------------------
btn.addEventListener('click' , () => {
    // Get input values
    let user = names.value.trim();
    let heightValue = height.value;
    let weightValue = weight.value;

    // Validation
    if (user === '' || heightValue === '' || weightValue === '') {
        alert('Please input all fields');
        return;
    }

    // Convert height to meters & calculate BMI
    let heightInNum = Number(heightValue) / 100;
    let weightInNum = Number(weightValue);
    let sum = weightInNum / (heightInNum * heightInNum);

    // Show BMI result
    output.innerHTML = `${sum.toFixed(2)} kg/m<sup>2</sup>`;

    // Prepare object
    let pattern_data = pattern(heightInNum, weightInNum, (Math.round(sum * 1000) / 1000));

    // Save data
    storage(user, pattern_data);

    // 🔄 Reload page to refresh data display
    location.reload();
});


// ------------------------------
// 📌 Initial fetch when page loads
// ------------------------------
fetching();
