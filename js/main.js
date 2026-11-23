// Opens and closes the navigation menu on small screens (the ☰ button).
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.links');

menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen);
});


// Assignment pop-ups (education-nus.html).
// Clicking a tile with data-dialog="x" opens the <dialog id="x">.
document.querySelectorAll('[data-dialog]').forEach((tile) => {
    const dialog = document.getElementById(tile.dataset.dialog);

    tile.addEventListener('click', () => {
        // Only load the PDF when the pop-up is first opened, and only on bigger
        // screens: phone browsers can't show a PDF inside a page, so phones get
        // the "Open PDF" button instead.
        const pdf = dialog.querySelector('iframe[data-src]');
        if (pdf && !pdf.src && window.matchMedia('(min-width: 901px)').matches) {
            pdf.src = pdf.dataset.src;
        }
        dialog.showModal(); // shows the pop-up and blurs the page behind it
    });
});

document.querySelectorAll('.assignment-dialog').forEach((dialog) => {
    // The × button closes it (the Esc key also works automatically)
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());

    // Clicking the blurred background (outside the white box) closes it too
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
    });
});
