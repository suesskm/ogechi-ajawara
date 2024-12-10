let slideIndex = 1; // Default slide index
showSlides(slideIndex);

// Function to go to the next or previous slide
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to go to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main function to display the slides
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // If n exceeds the total number of slides, reset to the first slide
    if (n > slides.length) { slideIndex = 1; }
    // If n is less than 1, go to the last slide
    if (n < 1) { slideIndex = slides.length; }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and mark the corresponding dot as active
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
