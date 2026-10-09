(function () {
  const nums = document.querySelectorAll(".stat-num");
  if (!nums.length) return;

  function animate(el) {
    const target = Number(el.dataset.target || 0);
    const duration = 1400;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(target * eased);
      if (progress < 1) requestAnimationFrame(frame);
      else el.textContent = String(target);
    }

    requestAnimationFrame(frame);
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animate(entry.target);
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  nums.forEach((n) => observer.observe(n));
})();
