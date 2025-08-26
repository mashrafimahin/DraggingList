// taking variables
const content = document.querySelector('#jokeText');
const title = document.querySelector('#title');
const btn = document.querySelector('#jokeBtn');

// asynchronus function
async function jokes() {
    try {
        const url_fetch = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await url_fetch.json();
        content.textContent = data.setup;
        title.textContent = data.punchline;
    }
    catch (error) {
        content.textContent = 'Opps! Something went wrong.';
        title.textContent = '';
    }
}

// link the function to the button
btn.addEventListener('click' , jokes)