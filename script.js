// Highlight active navigation link based on current page
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        // Remove 'active' from all
        link.classList.remove('active');
        // Add 'active' to the matching link
        if (
            (currentPage === '' && link.getAttribute('href') === 'index.html') ||
            link.getAttribute('href') === currentPage
        ) {
            link.classList.add('active');
        }
        // Special case for jobs.html if using #jobs
        if (
            (currentPage === 'jobs.html' && link.getAttribute('href').includes('jobs'))
        ) {
            link.classList.add('active');
        }
    });

    // Optional: Handle search button on home page
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = 'jobs.html';
        });
    }
});

