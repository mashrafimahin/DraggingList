const items = document.querySelectorAll('.item');
const slider = document.querySelector('.slider');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');


// universal function that will work for every item
function global() {
    // remove active class name
    items.forEach(item => item.classList.remove('active'));
    
    // add active class name to the first element of items
    document.querySelector('.item').classList.add('active')
}

// function for next button
next.addEventListener('click' , () => {
    // send the fist item to the last by appendChild
    slider.appendChild(document.querySelector('.item'));
    
    // call global function
    global()
})

// previous button function
prev.addEventListener('click' , () => {
    // insert before function to get items elements back on prevous position
    slider.insertBefore (
        document.querySelectorAll('.item')[document.querySelectorAll('.item').length - 1],
        document.querySelector('.item')
    )

    // call global function
    global()
})

// call global function
global()