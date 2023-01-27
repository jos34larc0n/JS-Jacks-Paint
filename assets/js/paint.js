// Declare pricing information for each paint color
const paintPrices = {
    'Lime Green': 14.99,
    'Medium Brown': 11.14,
    'Royal Blue': 22.99,
    'Solid Black': 4.99,
    'Solid Cyan': 8.22,
    'Solid Purple': 11.99,
    'Solid Red': 13.42,
    'Solid White': 21.98,
    'Solid Yellow': 14.99
};

// Function to configure event listeners for image elements
function configureListeners() {
    // Select all img elements
    let images = document.querySelectorAll("img");  
    // Iterate through each image element
    images.forEach(function(image) {
        // Add mouseover event listener
        image.addEventListener("mouseover", addOpacity);
        // Add mouseout event listener
        image.addEventListener("mouseout", removeOpacity);
    });
}

// Function to add opacity to image when hovered over
function addOpacity(event) {
    // Add appropriate CSS class
    event.target.classList.add("opacity");
    // Get product information for hovered over color
    getProductInfo(event.target.id);     
}

// Function to remove opacity from image when no longer hovered over
function removeOpacity(event) {
    // Remove appropriate CSS class
    event.target.classList.remove("opacity");
    // Clear product information displayed
    clearProductInfo();
    event.preventDefault();    
}

// Function to retrieve and display product information
function getProductInfo(paintColor) {
    // Get color name from paintColor ID
    let colorName = paintColor.substr(2);
    // Get price from paintPrices object
    let price = paintPrices[colorName];
    // Update product information on page
    updateProductInfo(colorName, price);
}

// Function to clear product information displayed
function clearProductInfo() {
    let element = document.getElementById('color-price');
    element.textContent = '';
    let color = document.getElementById('color-name');
    color.textContent = ''; 
}

// Function to update product information on page
function updateProductInfo(colorName, price) {
    // Select element to display color name
    let color = document.getElementById('color-name');
    // Display color name
    color.textContent = colorName;
    // Select element to display price
    let colorPrice = document.getElementById('color-price');
    // Display price
    colorPrice.textContent = '$' + price;
}
