(function () {
  const bars = document.querySelectorAll(".bar");
  if (!bars.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const bar = entry.target;
        const value = bar.dataset.value || "0";
        const fill = bar.querySelector("span");
        if (fill) fill.style.width = `${value}%`;
        obs.unobserve(bar);
      });
    },
    { threshold: 0.4 }
  );

  bars.forEach((bar) => observer.observe(bar));
})();
