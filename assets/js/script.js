// Initialize when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Bootstrap Initialization
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Auto-Close
    document.querySelectorAll('.nav-link').forEach(navLink => {
        navLink.addEventListener('click', () => {
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navbarCollapse).toggle();
            }
        });
    });
});












// Feedback Form Star Rating
document.querySelectorAll('.star-container input').forEach(star => {
    star.addEventListener('change', function() {
        const ratingValue = this.value;
        // Add any additional rating handling here
    });
});










// Dashboard Charts
function initCharts() {
    // Sentiment Chart
    const sentimentCtx = document.getElementById('sentimentChart').getContext('2d');
    new Chart(sentimentCtx, {
        type: 'doughnut',
        data: {
            labels: ['Positive', 'Neutral', 'Negative'],
            datasets: [{
                data: [65, 20, 15],
                backgroundColor: [
                    '#4CAF50',
                    '#FFC107',
                    '#F44336'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Category Ratings Chart
    const categoryCtx = document.getElementById('categoryChart').getContext('2d');
    new Chart(categoryCtx, {
        type: 'bar',
        data: {
            labels: ['Food', 'Venue', 'Organization', 'Content', 'Staff'],
            datasets: [{
                label: 'Average Rating',
                data: [4.5, 4.2, 4.7, 4.3, 4.6],
                backgroundColor: '#4FACFE',
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    
    // Other dashboard-specific scripts
    // Add any filter functionality here
});