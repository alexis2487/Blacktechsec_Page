// Theme toggle and section animation logic (moved from inline script)
const themeToggle = document.querySelector('.theme-toggle');

// Determine initial theme: prefer localStorage, otherwise use prefers-color-scheme
let darkModeRaw = localStorage.getItem('darkMode');
let darkMode = false;
if (darkModeRaw === null) {
  darkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
} else {
  darkMode = darkModeRaw === 'true';
}

function applyTheme() {
  document.body.classList.toggle('dark-mode', darkMode);
  if (themeToggle) themeToggle.textContent = darkMode ? '☀️' : '🌙';
  localStorage.setItem('darkMode', darkMode);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    applyTheme();
  });
}

// Section animations using IntersectionObserver
document.querySelectorAll('section').forEach((section, index) => {
  // set css variable index for staggered delays
  section.style.setProperty('--i', index);
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  observer.observe(section);
});

// Initialize theme on load
applyTheme();

// Scroll progress bar and parallax
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    document.querySelector('.scroll-progress').style.width = scrollPercent + '%';

    // Parallax for header
    const headerEl = document.querySelector('header');
    if (headerEl) {
      const rate = scrollTop * -0.25;
      headerEl.style.transform = 'translateY(' + rate + 'px)';
    }
});


// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('¡Mensaje enviado exitosamente! Gracias por contactarme.');
            form.reset();
        } else {
            alert('Error al enviar el mensaje. Inténtalo de nuevo.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al enviar el mensaje. Inténtalo de nuevo.');
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
});

// Typewriter effect for name
function typewriterEffect() {
    const element = document.getElementById('typewriter');
    const text = element.textContent;
    element.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    setTimeout(type, 400); // Start quickly for snappier feel
}

// Initialize typewriter
typewriterEffect();

// Register service worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/Blacktechsec_Page/sw.js')
            .then(() => console.log('SW registered'))
            .catch(error => console.log('SW registration failed', error));
    });
}
