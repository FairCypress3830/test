// ============================================================
// PERSONAL PORTFOLIO - MAIN JAVASCRIPT FILE
// Author: Byron Rivera
// Description: Handles interactive functionality for the portfolio website
// ============================================================

// Wait for DOM to fully load before executing scripts
// This makes sure that all HTML elements are available for manipulation
document.addEventListener('DOMContentLoaded', () => {
    
    // ==================== MOBILE NAVIGATION TOGGLE ====================
    // Handles the hamburger menu functionality for mobile devices
    // When clicked, toggles the visibility of the navigation links
    
    // Select the hamburger menu button
    const hamburger = document.querySelector('.hamburger');
    
    // Select the navigation links container
    const navLinks = document.querySelector('.nav-links');

    // Add click event listener to hamburger menu
    // Toggles the 'active' class on nav-links to show/hide menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    

    // ==================== FUTURE ENHANCEMENTS ====================
    // Space for additional JavaScript functionality:
    // - Smooth scrolling for anchor links
    // - Form validation
    // - Animation on scroll
    // - Dark mode toggle
    // - etc.
});