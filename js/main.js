// Opens and closes the navigation menu on small screens (the ☰ button).
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.links');

menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
});
