const navItems2 = document.querySelectorAll('.nav-item2');

navItems2.forEach(item => {
    item.addEventListener('click', () => {

        navItems2.forEach(i => i.classList.remove('active'));

        item.classList.add('active');
    });
});

const sections = document.querySelectorAll(".welcome, .events, .short-courses, .work-submission");

const navItems = document.querySelectorAll(".nav-item2");

function updateActiveNavItem() {
    const middleOfScreen = window.innerHeight / 2;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= middleOfScreen && rect.bottom >= middleOfScreen;

        if (isVisible) {
            navItems.forEach(navItem => navItem.classList.remove("active"));
            navItems[index].classList.add("active");
        } else {
            navItems[index].classList.remove("active");
        }
    });
}

window.addEventListener("load", updateActiveNavItem);
window.addEventListener("scroll", updateActiveNavItem);
