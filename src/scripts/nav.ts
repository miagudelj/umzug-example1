export function initNav(): void {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const mobNav = document.getElementById('mobNav');

  if (!nav || !burger || !mobNav) return;

  // Scroll effect
  window.addEventListener(
    'scroll',
    () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    },
    { passive: true },
  );

  // Hamburger toggle
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobNav.classList.toggle('open');
    document.body.style.overflow = mobNav.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile nav on link click
  mobNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      mobNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
