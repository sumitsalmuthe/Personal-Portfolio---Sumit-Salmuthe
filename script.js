// Dark Mode Toggle
const darkToggle = document.createElement('button');
darkToggle.innerHTML = '🌙';
darkToggle.classList.add('dark-toggle');
darkToggle.style.position = 'fixed';
darkToggle.style.bottom = '20px';
darkToggle.style.right = '20px';
darkToggle.style.padding = '0.5rem 1rem';
darkToggle.style.border = 'none';
darkToggle.style.borderRadius = '5px';
darkToggle.style.cursor = 'pointer';
darkToggle.style.backgroundColor = '#0d6efd';
darkToggle.style.color = '#fff';
darkToggle.style.zIndex = '1000';
document.body.appendChild(darkToggle);


darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkToggle.innerHTML = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});


// Scroll Animations
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});


document.querySelectorAll('section, .project-card, .hero-container, .about-me-container, .experience-education-container, .contact-container').forEach(el => {
    el.setAttribute('data-animate','');
    observer.observe(el);
});




