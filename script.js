/* ========================================
   REFACTORED PORTFOLIO JAVASCRIPT
   Clean, Efficient, Production-Ready
   ======================================== */

// ========================================
// INITIALIZE APP
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    setupThemeToggle();
    setupTypingAnimation();
    setupSmoothScroll();
    setupFormHandling();
    setupScrollEffects();
}

// ========================================
// NAVIGATION
// ========================================

function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
    
    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ========================================
// THEME TOGGLE
// ========================================

function setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Load saved theme or use system preference
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    // Apply theme to both data attribute (used by CSS variables) and a body class (legacy/compat)
    applyTheme(initialTheme);

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-color-scheme') || (document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('theme', next);
    });
}

function applyTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-color-scheme', 'dark');
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    } else {
        document.documentElement.setAttribute('data-color-scheme', 'light');
        document.body.classList.remove('dark-mode');
        updateThemeIcon(false);
    }
}

function updateThemeIcon(isDark) {
    const icon = document.getElementById('themeToggle');
    icon.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// ========================================
// TYPING ANIMATION
// ========================================

function setupTypingAnimation() {
    const typingElement = document.getElementById('typing');
    if (!typingElement) return;
    
    const phrases = [
        'empower communities',
        'solve real-world problems',
        'build scalable applications',
        'drive digital transformation',
        'create innovative solutions'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const delayBetweenPhrases = 2000;
    
    function typeAnimation() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            setTimeout(() => { isDeleting = true; }, delayBetweenPhrases);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeAnimation, 100);
            return;
        }
        
        const speed = isDeleting ? deleteSpeed : typeSpeed;
        setTimeout(typeAnimation, speed);
    }
    
    typeAnimation();
}

// ========================================
// SMOOTH SCROLL
// ========================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ========================================
// SCROLL EFFECTS
// ========================================

function setupScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe project cards and skill categories
    document.querySelectorAll('.project-card, .skill-category, .repo-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// ========================================
// FORM HANDLING
// ========================================

function setupFormHandling() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    try {
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Submit form via Netlify
        const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(new FormData(form))
        });
        
        if (response.ok) {
            showNotification('Message sent successfully! 🎉', 'success');
            form.reset();
        } else {
            showNotification('Failed to send message. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showNotification('An error occurred. Please try again.', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
}

// ========================================
// NOTIFICATIONS
// ========================================

function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getIconForType(type)}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Auto hide after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function getIconForType(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'times-circle',
        'info': 'info-circle',
        'warning': 'exclamation-circle'
    };
    return icons[type] || 'info-circle';
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Debounce helper
function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}

// Throttle helper
function throttle(fn, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            return fn.apply(this, args);
        }
    };
}

// ========================================
// ADD NOTIFICATION STYLES DYNAMICALLY
// ========================================

const notificationStyles = `
    .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 16px 24px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 300ms ease;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-success {
        color: #2ecc71;
        border-left: 4px solid #2ecc71;
    }
    
    .notification-error {
        color: #e74c3c;
        border-left: 4px solid #e74c3c;
    }
    
    .notification-info {
        color: #3498db;
        border-left: 4px solid #3498db;
    }
    
    .notification-warning {
        color: #f39c12;
        border-left: 4px solid #f39c12;
    }
    
    @media (max-width: 480px) {
        .notification {
            bottom: 10px;
            right: 10px;
            left: 10px;
            transform: translateY(150px);
        }
        
        .notification.show {
            transform: translateY(0);
        }
    }
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log(
  "%c🚀 Welcome to Ambuj Malik's Portfolio!",
  "font-size: 16px; font-weight: bold; color: #21808d;"
);

console.log(
    '%cCheck out the code on GitHub: https://github.com/ambujmalik',
    'font-size: 14px; color: #666;'
);
