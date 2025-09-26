// Simple JavaScript for the landing page
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling behavior (already handled by CSS, but adding JS fallback)
    const navbar = document.querySelector('.navbar');
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Add click handlers for social links (placeholder functionality)
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Social link clicked:', this.getAttribute('aria-label'));
            // In a real implementation, these would link to actual social media profiles
        });
    });

    // Simple fade-in animation trigger
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.content-container');
    animatedElements.forEach(el => observer.observe(el));
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    } else if (e.key === 'Escape') {
        // Remove focus from any focused element
        document.activeElement.blur();
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});