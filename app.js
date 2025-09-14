// taking values inside variable
const container = document.querySelector('.draggable-list');
const lists = document.querySelectorAll('li');

// Dragging function
function Dragging() {

    lists.forEach(list => {
        // add class name dragging on drag start
        list.addEventListener('dragstart', () => {
            list.classList.add('dragging');
        })
        // remove class name dragging on drag end
        list.addEventListener('dragend', () => {
            list.classList.remove('dragging');
        })
    })
}

// main function when drag over the main container
container.addEventListener('dragover', (e) => {
    // target the list with class name dragging
    const dragItem = container.querySelector('.dragging');

    // select all the lists without dragging class name and set the Nodelist inside array for apply (find, map, reduce etc) methods 
    const sortableList = [...document.querySelectorAll('li:not(.dragging)')];

    // return a condition with clientY and list top + height using find method
    let nextSibling = sortableList.find(item => {
        return e.clientY <= item.offsetTop + item.offsetHeight / 2;
    })

    // add the dragging list on targeted position using insertBefore
    container.insertBefore(dragItem, nextSibling);
});

// Initialize function
Dragging()