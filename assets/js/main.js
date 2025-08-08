/**
 * Main JavaScript for Excel Academy Website
 * Handles common functionality across all pages
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle aria-expanded attribute for accessibility
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuButton.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref && (linkHref === currentPage || 
                         (currentPage === '' && linkHref === 'index.html') ||
                         (currentPage === 'index.html' && linkHref === './'))) {
            link.classList.add('text-blue-600', 'font-medium');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('text-blue-600', 'font-medium');
            link.removeAttribute('aria-current');
        }
    });
    
    // Initialize any page-specific scripts
    initPageScripts();
});

/**
 * Initialize page-specific scripts
 */
function initPageScripts() {
    // Gallery page scripts
    if (document.querySelector('#gallery-grid')) {
        initGallery();
    }
    
    // Contact page scripts
    if (document.querySelector('#contactForm')) {
        initContactForm();
    }
    
    // FAQ accordion
    if (document.querySelector('.faq-toggle')) {
        initFAQAccordion();
    }
}

/**
 * Initialize gallery functionality
 */
function initGallery() {
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-blue-600', 'text-white');
                btn.classList.add('border-gray-200', 'hover:bg-gray-100');
            });
            
            button.classList.add('active', 'bg-blue-600', 'text-white');
            button.classList.remove('border-gray-200', 'hover:bg-gray-100');
            
            // Filter items
            const filter = button.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Load more functionality
    const loadMoreBtn = document.getElementById('load-more');
    if (loadMoreBtn) {
        let currentItems = 8;
        
        loadMoreBtn.addEventListener('click', () => {
            const items = Array.from(document.querySelectorAll('.gallery-item'));
            
            for (let i = currentItems; i < currentItems + 4; i++) {
                if (items[i]) {
                    items[i].style.display = 'block';
                }
            }
            
            currentItems += 4;
            
            // Hide button if no more items
            if (currentItems >= items.length) {
                loadMoreBtn.style.display = 'none';
            }
        });
    }
}

/**
 * Initialize contact form
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Here you would typically send the data to a server
            console.log('Contact form submitted:', formObject);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
}

/**
 * Initialize FAQ accordion
 */
function initFAQAccordion() {
    document.querySelectorAll('.faq-toggle').forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            // Toggle the content
            content.classList.toggle('hidden');
            
            // Rotate the icon
            icon.classList.toggle('transform');
            icon.classList.toggle('rotate-180');
            
            // Close other open FAQs
            document.querySelectorAll('.faq-toggle').forEach(otherButton => {
                if (otherButton !== button) {
                    otherButton.nextElementSibling.classList.add('hidden');
                    const otherIcon = otherButton.querySelector('i');
                    otherIcon.classList.remove('rotate-180');
                }
            });
        });
    });
}

// Export functions for use in other scripts if needed
window.ExcelAcademy = {
    initPageScripts,
    initGallery,
    initContactForm,
    initFAQAccordion
};
