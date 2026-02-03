// Project filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const devFilter = document.getElementById('dev-filter');
    const uxFilter = document.getElementById('ux-filter');
    const graphicFilter = document.getElementById('graphic-filter');

    const devProj = document.getElementById('development-proj');
    const uxProj = document.getElementById('ux-proj');
    const graphicProj = document.getElementById('graphic-proj');
    const videoProj = document.getElementById('video-proj');

    // Function to hide all projects
    function hideAllProjects() {
        devProj.style.display = 'none';
        uxProj.style.display = 'none';
        graphicProj.style.display = 'none';
        videoProj.style.display = 'none';
    }

    // Initially hide all projects
    hideAllProjects();

    // Add event listeners
    devFilter.addEventListener('click', function() {
        hideAllProjects();
        devProj.style.display = 'block';
    });

    uxFilter.addEventListener('click', function() {
        hideAllProjects();
        uxProj.style.display = 'block';
    });

    graphicFilter.addEventListener('click', function() {
        hideAllProjects();
        graphicProj.style.display = 'block';
    });
});
