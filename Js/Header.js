const navItems2 = document.querySelectorAll('.nav-item2');
const navItems = document.querySelectorAll('.nav-item');

// Evento para elementos com a classe "nav-item2"
navItems2.forEach(item => {
    item.addEventListener('click', () => {
        // Remover classe 'active' de todos os elementos com a classe 'nav-item2'
        navItems2.forEach(i => i.classList.remove('active'));
        // Adicionar classe 'active' ao elemento clicado
        item.classList.add('active');
    });
});

// Evento para elementos com a classe "nav-item"
navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remover classe 'active' de todos os elementos com a classe 'nav-item'
        navItems.forEach(i => i.classList.remove('active'));
        // Adicionar classe 'active' ao elemento clicado
        item.classList.add('active');
    });
});

const sections = document.querySelectorAll(".welcome, .events, .short-courses, .work-submission");

function updateActiveNavItem() {
    const middleOfScreen = window.innerHeight / 2;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= middleOfScreen && rect.bottom >= middleOfScreen;

        if (isVisible) {
            
            navItems2.forEach(navItem => navItem.classList.remove("active"));     
            navItems2[index].classList.add("active");        
            navItems.forEach(navItem => navItem.classList.remove("active"));        
            navItems[index].classList.add("active");
        } else {
            
            navItems2[index].classList.remove("active");
            navItems[index].classList.remove("active");
        }
    });
}

window.addEventListener("load", updateActiveNavItem);
window.addEventListener("scroll", updateActiveNavItem);



let Menubtn = document.getElementById('Menubtn');
let textmobile = document.getElementById('name-logo-mobile');
let Resmenu = document.getElementById('container-header');
let navitems = document.querySelector('.Nav-Itens');

let isExpanded = false;

function toggleMenu() {
    Menubtn.classList.toggle('fa-xmark');

    if (isExpanded) {
        Resmenu.style.height = "0vh";
        fadeOut(navitems); // Função para aplicar efeito de fade-out
        fadeOut(textmobile); // Função para aplicar efeito de fade-out
    } else {
        Resmenu.style.height = "100vh";
        fadeIn(navitems); // Função para aplicar efeito de fade-in
        fadeIn(textmobile); // Função para aplicar efeito de fade-in
    }
    isExpanded = !isExpanded;
}

// Função para aplicar efeito de fade-in
function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';

    setTimeout(function() {
        element.style.opacity = 1;
    }, 300);
}

// Função para aplicar efeito de fade-out
function fadeOut(element) {
    element.style.opacity = 1;

    setTimeout(function() {
        element.style.opacity = 0;
        element.style.display = 'none';
    }, 100); // Ajuste o tempo conforme necessário (300ms é o valor padrão para a transição)
}

// Adicione um ouvinte de clique ao botão para abrir/fechar o menu
Menubtn.addEventListener('click', toggleMenu);

// Adicione um ouvinte de redimensionamento apenas para fechar o menu quando a largura for maior que 768px
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        Resmenu.style.height = "0vh";
        fadeOut(navitems); // Função para aplicar efeito de fade-out
        fadeOut(textmobile); // Função para aplicar efeito de fade-out
        isExpanded = false;
        Menubtn.classList.remove('fa-xmark');
        Menubtn.classList.add('fa-bars-staggered');
    }
});



