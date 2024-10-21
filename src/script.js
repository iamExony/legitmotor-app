/* Script for Hamburger Menu Toggle  */
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    // Toggle between hamburger and close icon
    if (mobileMenu.classList.contains('hidden')) {
        menuIcon.innerHTML = `<path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />`;
    } else {
        menuIcon.innerHTML = `<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l10 10M7 17L17 7"/>`;
    }
});