// taking data from HTML Doc.
const data = document.getElementById('searchInput');
const btn = document.querySelector('#searchBtn');
const container = document.querySelector('.card hidden');
const profile = document.querySelector('.profile-header img');
const userName = document.querySelector('#userName');
const userBio = document.querySelector('#userBio');
const repos = document.querySelector('#repos');
const loc = document.querySelector('#location');
const type = document.querySelector('#type');

// asynchronus Function
async function search() {
    try {
        // take query
        let query = data.value.trim().toLowerCase();

        // Api Key
        const apiKey = `https://api.github.com/search/users?q=${query}`;
        const fetchData = await fetch(apiKey);
        const responseData = await fetchData.json();

        // checkpoint

        // Fetching profile
        const login = responseData.items['0'].login;

        const secondCall = `https://api.github.com/users/${login}`;
        const fetchAgain = await fetch(secondCall);
        const responseAgain = await fetchAgain.json();

        // unlock the main container
        document.querySelector('.card').classList.add('active');

        // print values
        profile.src = responseAgain.avatar_url;
        userName.textContent = responseAgain.name || 'Opps! Not found';
        userBio.textContent = responseAgain.bio || 'Opps! Not found';
        repos.textContent = responseAgain.public_repos || 'N/A';
        loc.textContent = responseAgain.location || 'N/A';
        type.textContent = responseAgain.type || 'N/A';

        // clean search field
        data.value = ''
    }
    catch (error) {
        console.log('Opps! User not found.');
    }
}

// btn clicked
btn.addEventListener('click' , search)

// key pressed
data.addEventListener('keydown', (e) => {
    // check which key was pressed
    if (e.key === 'Enter') {
        search();
    }
})
