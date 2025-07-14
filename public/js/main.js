// --- Lógica de menú móvil eliminada; se maneja dentro de Navbar.astro ---
document.addEventListener('DOMContentLoaded', () => {
  // (removido) const menuBtn = document.querySelector('.mobile-menu-btn');
  // (removido) const navLinks = document.querySelector('.nav-links');
  // (removido) const navItems = document.querySelectorAll('.nav-item');
  
  // --- Fin bloque eliminado ---
  /* bloque eliminado */ if (false) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', 
        menuBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });
  }
  
  // Close mobile menu when clicking on a nav item
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 992) { // Match your mobile breakpoint
        navLinks.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
  
  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navItems.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
      const href = link.getAttribute('href');
      if (href === currentPage || 
          (currentPage === '' && href === 'index.html') ||
          (currentPage === 'index.html' && href === '/')) {
        item.classList.add('active');
        link.setAttribute('aria-current', 'page');
      }
    }
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Adjust for fixed header
        behavior: 'smooth'
      });
    }
  });
});
