(function () {
  const canvas = document.getElementById("particles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let w = 0;
  let h = 0;
  let raf = null;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

  function createParticles() {
    const count = Math.min(55, Math.floor((w * h) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      a: Math.random() * 0.45 + 0.15,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(96, 165, 250, ${p.a})`;
      ctx.fill();
    }
    raf = requestAnimationFrame(draw);
  }

  function init() {
    resize();
    createParticles();
    cancelAnimationFrame(raf);
    draw();
  }

  window.addEventListener("resize", () => {
    resize();
    createParticles();
  });

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    resize();
    return;
  }

  init();
})();
