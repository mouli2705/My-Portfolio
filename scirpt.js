// Initialize AOS (Animate On Scroll) library
// This script ensures that elements with `data-aos` attributes
// will animate into view as the user scrolls down the page.
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 900, // Increased duration for smoother animations
        easing: 'ease-out-quad', // Changed easing for a softer start/end
        once: true, // Animations happen only once as you scroll down
        mirror: false, // elements don't animate out when scrolling back up
        anchorPlacement: 'top-bottom', // defines which position of the element should trigger the animation
    });
});

// Smooth scrolling for navigation links (adjusted for fixed header)
// This script enhances the user experience by providing a smooth scroll
// animation when clicking on navigation links that point to sections
// within the same page. It also accounts for the fixed header height
// to prevent content from being obscured.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target section ID (e.g., "#about")
        const targetElement = document.querySelector(targetId); // Select the actual target element
        const headerOffset = document.querySelector('header').offsetHeight; // Get the dynamic height of the fixed header

        if (targetElement) {
            // Calculate the position to scroll to, accounting for the header's height
            const elementPosition = targetElement.getBoundingClientRect().top; // Top position relative to viewport
            const offsetPosition = elementPosition + window.scrollY - headerOffset; // Absolute position on the page

            // Perform the smooth scroll
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});
