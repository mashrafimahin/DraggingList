const container = document.querySelector('.display');
const search = document.querySelector('#searchNow');
const btn = document.querySelector('#searchBtn');

// function 
btn.addEventListener('click', () => {
    // get data from input field
    let searchValue = search.value.toLowerCase().trim();
    
    // checkpoint
    if (searchValue === '') {
        alert('please input valid name.');
        return;
    }

    // get data from local storage
    let data = JSON.parse(localStorage.getItem(searchValue));

    if (data === null) {
        container.innerHTML = '<p>Sorry, No data found.</p>';
        return;
    }

    // default pattern
    let pattern = 
        `<table>
            <tr>
                <td>Name</td>
                <td>${data.user}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>${data.email}</td>
            </tr>
            <tr>
                <td>Mobile</td>
                <td>${data.mobile}</td>
            </tr>
            <tr>
                <td>Message</td>
                <td>${data.message}</td>
            </tr>
            <tr>
                <td>Interests</td>
                <td>${data.interests}</td>
            </tr>
        </table>`

    // add table inside HTML
    container.innerHTML = pattern;
})