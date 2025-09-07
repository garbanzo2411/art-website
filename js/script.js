document.addEventListener("DOMContentLoaded", () => {
    // Slideshow functionality
    const bg = document.getElementById("slideshow-bg");
    const images = document.querySelectorAll('div[style*="display: none"] img');
    const indicatorsContainer = document.getElementById("indicators");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    let currentIndex = 0;
    let isTransitioning = false;
    let slideInterval;

    // Create indicators
    images.forEach((_, index) => {
        const indicator = document.createElement("div");
        indicator.className = "indicator";
        if (index === 0) indicator.classList.add("active");
        indicator.addEventListener("click", () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    const indicators = document.querySelectorAll(".indicator");

    function goToSlide(index) {
        if (isTransitioning) return;
        isTransitioning = true;

        currentIndex = index;
        const imgSrc = images[index].src;
        
        // Update background
        bg.style.backgroundImage = `url('${imgSrc}')`;
        
        // Update indicators
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });

        setTimeout(() => {
            isTransitioning = false;
        }, 1000);
    }

    function nextSlide() {
        const nextIndex = (currentIndex + 1) % images.length;
        goToSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        goToSlide(prevIndex);
    }

    // Event listeners
    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetInterval();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetInterval();
    });

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 4000);
    }

    // Initialize slideshow
    goToSlide(0);
    slideInterval = setInterval(nextSlide, 4000);

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Animated counters
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.stat-number');
                const target = parseInt(counter.getAttribute('data-count'));
                animateCounter(counter, target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.stat-item').forEach(item => {
        observer.observe(item);
    });

    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            element.textContent = Math.floor(current);
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            }
        }, 30);
    }

    // Smooth scrolling for scroll indicator
    document.querySelector('.scroll-indicator').addEventListener('click', () => {
        document.querySelector('.preview-section').scrollIntoView({
            behavior: 'smooth'
        });
    });
});