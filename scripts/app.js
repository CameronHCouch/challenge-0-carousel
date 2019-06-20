// grab carousel image from document, and locate its URL string
let imageDiv = document.getElementById("image");
let imageUrl = imageDiv.style.backgroundImage;

// determine which number image we are currently viewing
let imageUrlNumber = parseInt(imageUrl.match(/\d+/)[0]);

(function rotateCarousel() {
    // increment image approx every 3 seconds
    // if image is largest image, reset to first image
    setInterval(() => {
        if (imageUrlNumber !== 3){
            imageUrlNumber++;
        } else {
            imageUrlNumber = 0;
        }
        // replace the current imageUrlNumber with new number
        imageUrl = imageUrl.slice(0,25) + imageUrlNumber + imageUrl.slice(26);
        // set imageDiv's background image to new url string         
        imageDiv.style.backgroundImage = imageUrl;
    }, 3000)
})()

