// Scroll suave para los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación al hacer scroll
window.addEventListener('scroll', function() {
    const productos = document.querySelectorAll('.producto');
    const triggerBottom = window.innerHeight / 5 * 4;
    
    productos.forEach(producto => {
        const productoTop = producto.getBoundingClientRect().top;
        
        if (productoTop < triggerBottom) {
            producto.style.opacity = '1';
            producto.style.transform = 'translateY(0)';
        } else {
            producto.style.opacity = '0';
            producto.style.transform = 'translateY(50px)';
        }
    });
});

// Inicializar animaciones
document.addEventListener('DOMContentLoaded', function() {
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        producto.style.transition = 'opacity 0.5s, transform 0.5s';
        producto.style.opacity = '0';
        producto.style.transform = 'translateY(50px)';
    });
    
    // Trigger inicial
    window.dispatchEvent(new Event('scroll'));
});

// Cambiar color del header al hacer scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#6B3410';
    } else {
        header.style.backgroundColor = '#8B4513';
    }
});