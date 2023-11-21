var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");

        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Increment slide index and reset if necessary
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        // Display the current slide
        slides[slideIndex - 1].style.display = "grid";

        // Call showSlides function again after 2 seconds (2000 milliseconds)
        setTimeout(showSlides, 5000);
    }