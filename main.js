let slideIndex = 0;
        const slides = document.querySelector('.slides');
        const totalSlides = slides.children.length;

        function showSlide(index) {
            if (index >= totalSlides) {
                slideIndex = 0;
            } else if (index < 0) {
                slideIndex = totalSlides - 1;
            } else {
                slideIndex = index;
            }
            slides.style.transform = `translateX(-${slideIndex * 100}%)`;
        }