// Bill Wallace stats object
const wallaceStats = {
    name: "Bill 'Superfoot' Wallace",
    record: "23-0",
    knockouts: 13,
    championships: [
        "PKA World Middleweight Champion",
        "Undefeated Professional Record",
        "Black Belt Hall of Fame"
    ],
    signatureMoves: [
        "Left Roundhouse Kick",
        "Left Hook Kick",
        "Speed Combinations"
    ]
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Load stats
    loadStats();
    
    // Check for saved theme preference
    checkThemePreference();
    
    // Set up event listeners
    setupEventListeners();
});

function loadStats() {
    const container = document.getElementById('stats-container');
    
    const stats = [
        { title: "Professional Record", value: wallaceStats.record },
        { title: "Knockouts", value: wallaceStats.knockouts },
        { title: "Championships", value: wallaceStats.championships.length }
    ];
    
    container.innerHTML = stats.map(stat => `
        <div class="stat-card">
            <h3>${stat.title}</h3>
            <p>${stat.value}</p>
        </div>
    `).join('');
}

function checkThemePreference() {
    const savedTheme = localStorage.getItem('themePreference');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }
}

function setupEventListeners() {
    // Example: Theme toggle button if added later
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    
    // Form submission handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const theme = document.body.classList.contains('dark-theme') ? 'dark-theme' : '';
    localStorage.setItem('themePreference', theme);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    
    // Simple validation
    if (!formValues.name || !formValues.email) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Save to localStorage
    localStorage.setItem('lastContact', JSON.stringify(formValues));
    
    // Show success message
    alert('Thank you for your message!');
    form.reset();
}

// Gallery functionality for gallery.html
function loadGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    
    const images = [
        { src: 'images/wallace-fight1.jpg', alt: 'Bill Wallace in competition' },
        { src: 'images/wallace-training.jpg', alt: 'Training session' },
        { src: 'images/wallace-seminar.jpg', alt: 'Teaching seminar' }
    ];
    
    gallery.innerHTML = images.map(img => `
        <figure>
            <img src="${img.src}" alt="${img.alt}" loading="lazy">
            <figcaption>${img.alt}</figcaption>
        </figure>
    `).join('');
}

// Call gallery load if on gallery page
if (window.location.pathname.includes('gallery.html')) {
    loadGallery();
}
