// 1. Renderizar portfólio dinamicamente
const videoGrid = document.getElementById('video-grid');
const servicesList = document.getElementById('services-list');

portfolioVideos.forEach(video => {
  const card = document.createElement('article');
  card.className = 'video-card';
  card.innerHTML = `
    <div class="video-wrapper">
      <video controls preload="metadata" poster="${video.poster}" playsinline>
        <source src="${video.videoSrc}" type="video/mp4">
        Seu navegador não suporta vídeos HTML5.
      </video>
    </div>
    <div class="video-info">
      <h3>${video.title}</h3>
      <p>${video.description}</p>
    </div>
  `;
  videoGrid.appendChild(card);
});

services.forEach(service => {
  const li = document.createElement('li');
  li.textContent = service;
  servicesList.appendChild(li);
});

// 2. Header scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// 3. Mobile menu toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navUl = document.querySelector('nav ul');

if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    navUl.classList.toggle('mobile-menu-active');
    mobileBtn.textContent = navUl.classList.contains('mobile-menu-active') ? '✕' : '☰';
  });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    navUl.classList.remove('mobile-menu-active');
    mobileBtn.textContent = '☰';
  });
});

// 4. Form handling
const form = document.getElementById('quote-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Simulação de envio (substitua pelo seu backend)
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  
  setTimeout(() => {
    alert('✅ Mensagem enviada com sucesso! Entrarei em contato em breve.');
    form.reset();
    btn.textContent = originalText;
    btn.disabled = false;
  }, 1500);
});

// 5. Lazy loading para vídeos (performance)
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const video = entry.target.querySelector('video');
      if (video) {
        video.src = video.querySelector('source').src;
        video.load();
        videoObserver.unobserve(entry.target);
      }
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.video-card').forEach(card => {
  videoObserver.observe(card);
});