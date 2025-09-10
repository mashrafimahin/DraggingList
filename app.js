// get the values inside variable
const fileInput = document.querySelector('#fileInput')
const preview = document.querySelector('.preview')
const placeholder = document.querySelector('#placeholder')

// main change function
fileInput.addEventListener('change', () => {
    // store file lists inside variable
    const files = fileInput.files;
    
    // validation for placeholder
    if (files.length > 0) {
        placeholder.style.display = 'none';
    }

    // loop to see through each file
    for (const file of files) {
        
        // creating image url
        let imageLink = URL.createObjectURL(file);
        
        // creating elements with attributes
        let image = document.createElement('div');
        image.setAttribute('class', 'image');
        let img = document.createElement('img');
        img.src = imageLink;
        img.setAttribute('draggable', false);
        let icon = document.createElement('i');
        icon.setAttribute('class', 'fa-solid fa-times');
        let size = document.createElement('p');
        
        // set image size value as null initially 
        let sizeValue = null;
        
        // calculate the size of image
        if ((file.size / 1024) <= 1024) {
            sizeValue = Math.floor((file.size / 1024)) + ' KB'
        } 
        else if ((file.size / 1024) > 1024) {
            sizeValue = Math.ceil((file.size / 1024) / 1024) + ' MB'
        } 

        // add size inside the targeted variable
        size.textContent = sizeValue;
        
        // append all the elements inside HTML
        image.append(img, icon, size);
        preview.append(image);
        
        // memory free up method
        img.onload = () => {
            URL.revokeObjectURL(imageLink);
        }
        
        // cross icon close function
        icon.addEventListener('click', (e) => {
            e.currentTarget.parentElement.remove()

            // if there's no image div then put back the placeholder
            if (preview.children.length === 1) {
                placeholder.style.display = 'block';
            }
        })
    }
})