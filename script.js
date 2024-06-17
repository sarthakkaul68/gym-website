// // carousel box

// manual slideshow function

// Initialize slideIndex
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls for the slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}


// Event listeners for navigation buttons
document.addEventListener("DOMContentLoaded", function() {
    // Show first slide when the page loads
    plusSlides(-1);

    // Event listener for "prev" button
    document.querySelector(".prev").addEventListener("click", function() {
        plusSlides(-1);
    });

    // Event listener for "next" button
    document.querySelector(".next").addEventListener("click", function() {
        plusSlides(1);
    });
});









// registration form

function openForm() {
    document.querySelector(".form").style.display = "block";
  }
  
  function closeForm() {
    document.querySelector(".form").style.display = "none";
  }