const header = document.querySelector('[data-header]');
const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');
const counters = document.querySelectorAll('[data-count]');
const tabs = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('[data-panel]');
const tiltCard = document.querySelector('.tilt-card');
const magneticButtons = document.querySelectorAll('.magnetic');
const navLinks = document.querySelectorAll('.primary-nav a[href^="#"]');
const sections = document.querySelectorAll('section[id]');
const progressBar = document.querySelector('[data-scroll-progress]');
const protectedDownloads = document.querySelectorAll('[data-protected-download]');
const downloadPassword = 'admin4321!';

const revealItems = document.querySelectorAll('[data-reveal], .reveal, .reveal-left, .reveal-right, .reveal-scale');

function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 18);
}

function updateActiveNav() {
  let current = '';
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;
}

function onScroll() {
  updateHeader();
  updateActiveNav();
  updateScrollProgress();
  updateParallax();
}

function updateParallax() {
  const els = document.querySelectorAll('.parallax');
  els.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const speed = parseFloat(el.dataset.speed) || 0.1;
    const y = rect.top * speed;
    el.style.transform = `translateY(${y}px)`;
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

function getStaggerDelay(element, index) {
  const parent = element.parentElement;
  if (!parent) return index * 100;
  const children = [...parent.children].filter((c) => c.matches('[data-reveal]'));
  const cols = getComputedStyle(parent).gridTemplateColumns.split(' ').length;
  const row = Math.floor(children.indexOf(element) / cols);
  const col = children.indexOf(element) % cols;
  const stagger = parseInt(element.dataset.stagger || 100);
  const rowStagger = parseInt(element.dataset.rowStagger || 120);
  return (row * rowStagger) + (col * stagger);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const parent = el.parentElement;
        const siblings = parent ? [...parent.children].filter((c) => c.matches('[data-reveal]')) : [el];
        if (siblings.length > 1 && parent.contains(el)) {
          siblings.forEach((sibling, i) => {
            const delay = parseInt(sibling.dataset.delay) || getStaggerDelay(sibling, i);
            setTimeout(() => sibling.classList.add('visible'), delay);
            revealObserver.unobserve(sibling);
          });
        } else {
          const delay = parseInt(el.dataset.delay) || 0;
          setTimeout(() => el.classList.add('visible'), delay);
          revealObserver.unobserve(el);
        }
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

revealItems.forEach((item) => revealObserver.observe(item));

function animateCounter(counter) {
  const target = Number(counter.dataset.count || 0);
  const suffix = target === 100 ? '%' : '';
  const duration = 1200;
  const startedAt = performance.now();

  function tick(now) {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    counter.textContent = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => counterObserver.observe(counter));

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    tabs.forEach((item) => item.classList.toggle('active', item === tab));
    panels.forEach((panel) => panel.classList.toggle('active', panel.dataset.panel === target));
  });
});

if (tiltCard) {
  tiltCard.addEventListener('pointermove', (event) => {
    const rect = tiltCard.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    tiltCard.style.transform = `rotateY(${x * 8}deg) rotateX(${y * -8}deg) translateY(-4px)`;
  });

  tiltCard.addEventListener('pointerleave', () => {
    tiltCard.style.transform = 'rotateY(0deg) rotateX(0deg) translateY(0)';
  });
}

magneticButtons.forEach((button) => {
  button.addEventListener('pointermove', (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.12}px, ${y * 0.16}px) translateY(-3px)`;
  });

  button.addEventListener('pointerleave', () => {
    button.style.transform = '';
  });
});

protectedDownloads.forEach((link) => {
  link.addEventListener('click', (event) => {
    const password = window.prompt('Enter the temporary download password:');
    if (password !== downloadPassword) {
      event.preventDefault();
      if (password !== null) {
        window.alert('Incorrect password.');
      }
    }
  });
});
