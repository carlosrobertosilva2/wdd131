// Update copyright year
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    
    // Optional: Add last modified date if needed
    const lastModified = document.createElement('p');
    lastModified.textContent = 'Last Modified: ' + document.lastModified;
    document.querySelector('footer').appendChild(lastModified);
});
