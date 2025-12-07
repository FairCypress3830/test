// ============================================================
// PERSONAL PORTFOLIO - MAIN JAVASCRIPT FILE
// Author: Byron Rivera
// Description: Handles interactive functionality for the portfolio website
// ============================================================

// Wait for DOM to fully load before executing scripts
// This makes sure that all HTML elements are available for manipulation
document.addEventListener('DOMContentLoaded', () => {
    
    // ==================== MOBILE NAVIGATION TOGGLE ====================
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // ==================== DARK MODE TOGGLE ====================
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // 1. Check if user already has a preference saved in LocalStorage
    const currentTheme = localStorage.getItem('theme');
    
    // If saved theme is 'dark', apply it immediately
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun'); // Change icon to sun
    }
    
    // 2. Add Event Listener for Click
    themeToggle.addEventListener('click', () => {
        // Toggle the class on body
        body.classList.toggle('dark-mode');
        
        // Switch the icon class (Moon <-> Sun)
        if (body.classList.contains('dark-mode')) {
            themeToggle.classList.remove('fa-moon');
            themeToggle.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark'); // Save preference
        } else {
            themeToggle.classList.remove('fa-sun');
            themeToggle.classList.add('fa-moon');
            localStorage.setItem('theme', 'light'); // Save preference
        }
    });

    // ==================== FUTURE ENHANCEMENTS ====================
    // Space for additional JavaScript functionality:
    // - Smooth scrolling for anchor links
    // - Form validation
    // - Animation on scroll
    // - etc.
});