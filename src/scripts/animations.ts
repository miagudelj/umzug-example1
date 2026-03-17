export function initLoader(): void {
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('loader')?.classList.add('done');
      animateHero();
    }, 800);
  });
}

function animateHero(): void {
  const selectors = ['.hero-eyebrow', '.hero h1', '.hero-p', '.hero-btns'];
  selectors.forEach((sel, i) => {
    const el = document.querySelector(sel) as HTMLElement | null;
    if (!el) return;
    setTimeout(() => {
      el.style.transition =
        'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, i * 150);
  });
}

export function initScrollReveal(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' },
  );

  document.querySelectorAll('.rv').forEach((el) => observer.observe(el));
}

export function initCounters(): void {
  function countUp(
    el: HTMLElement,
    target: number,
    suffix: string,
    decimals: number,
  ): void {
    const duration = 2000;
    const start = performance.now();

    function tick(now: number): void {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      const val =
        decimals > 0 ? (target * eased).toFixed(decimals) : Math.floor(target * eased);
      el.textContent = val + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.target || '0');
          const suffix = el.dataset.suffix || '';
          const decimals = parseInt(el.dataset.decimals || '0');
          countUp(el, target, suffix, decimals);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );

  document.querySelectorAll('.why-num').forEach((el) => observer.observe(el));
}

export function initStepsProgress(): void {
  const container = document.getElementById('stepsContainer');
  if (!container) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          container.classList.add('animated');
          observer.unobserve(container);
        }
      });
    },
    { threshold: 0.3 },
  );

  observer.observe(container);
}

export function initParallaxOrbs(): void {
  // Removed — no orbs in light design
}
