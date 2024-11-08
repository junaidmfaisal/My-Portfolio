function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active'); // Toggle the 'active' class
}


// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to add 'visible' class to elements in viewport
function handleScrollAnimation() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Run animation on scroll and on page load
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('DOMContentLoaded', handleScrollAnimation);


// Function to load skill bar animation when it comes into view
function loadSkillBar(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target;
            const skillLevel = skillBar.getAttribute('data-skill');
            skillBar.style.width = skillLevel + '%'; // Set width to the data-skill value
            skillBar.classList.add('loaded');
            observer.unobserve(skillBar); // Stop observing after animation
        }
    });
}

// Set up IntersectionObserver to trigger when skill bars come into view
const observerOptions = {
    threshold: 0.5, // Trigger when 50% of the skill bar is visible
};

const observer = new IntersectionObserver(loadSkillBar, observerOptions);

// Target all skill bars for observation
const skillBars = document.querySelectorAll('.skill-bar');
skillBars.forEach(skillBar => observer.observe(skillBar));