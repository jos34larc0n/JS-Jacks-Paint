function configureListeners() {
    let images = document.querySelectorAll("img");  // select img elements  
    images.forEach(function(image) {
        // add mouseover event listener
        image.addEventListener("mouseover", addOpacity);
        // add mouseout event listener
        image.addEventListener("mouseout", removeOpacity);
    });
}


// function to add opacity and display product information when image is hovered over
function addOpacity(event) {
    // add "opacity" CSS class to hovered over image
    event.target.classList.add("opacity");
    // call function to display product information
    getProductInfo(event.target.id);     
}

// function to remove opacity and hide product information when image is no longer hovered over
function removeOpacity(event) {
    // remove "opacity" CSS class from image
    event.target.classList.remove("opacity");
    // clear product information from the page
    let element = document.getElementById('color-price');
    element.textContent = '';
    let color = document.getElementById('color-name');
    color.textContent = ''; 
//This line of code makes sure that the browser does not follow the link when the mouse pointer moves out of the image.
    event.preventDefault();    
}

// function to display product information based on hovered over image's id
function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
 // set variables for price and color name and invoke a function to update the price
        case 'pn1':           
            price = 14.99;
            colorName = "Lim Gre";
            updatePrice(colorName, price);     
            break;           
// set variables for price and color name and invoke a function to update the price
            case 'pn2':
            price = 11.14;
            colorName = "Med Bro";
            updatePrice(colorName, price);  
            break; 
 // set variables for price and color name and invoke a function to update the price           
        case 'pn3':
            price = 22.99;
            colorName = "Roy Blu";
            updatePrice(colorName, price);  
            break;   
// set variables for price and color name and invoke a function to update the price
        case 'pn4':
            price = 4.99;
            colorName = "Sol Bla";
            updatePrice(colorName, price);  
            break;   
// set variables for price and color name and invoke a function to update the price
        case 'pn5':
            price = 8.22;
            colorName = "Sol Cya";
            updatePrice(colorName, price);  
            break;   
// set variables for price and color name and invoke a function to update the price
        case 'pn6':
            price = 11.99;
            colorName = "Sol Purp";
            updatePrice(colorName, price);  
            break;   
// set variables for price and color name and invoke a function to update the price
        case 'pn7':
            price = 13.42;
            colorName = "Sol Red";
            updatePrice(colorName, price);  
            break;   
// set variables for price and color name and invoke a function to update the price
        case 'pn8':
            price = 21.98;
            colorName = "Sol Whi";
            updatePrice(colorName, price);  
            break;   
// set variables for price and color name and invoke a function to update the price
        case 'pn9':
            price = 14.99;
            colorName = "Sol Yel";
            updatePrice(colorName, price);  
            break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
        let colorPrice = document.getElementById('color-price');// select element with corresponding id
        // display price
        colorPrice.textContent = price
        let color = document.getElementById('color-name');//select element with corresponding name
        //display color name
        color.textContent = colorName;
    }
    
}
