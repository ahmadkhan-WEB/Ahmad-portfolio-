(function () {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  items.forEach((el) => {
    const delay = el.dataset.delay;
    if (delay) el.style.transitionDelay = `${delay}ms`;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  items.forEach((el) => observer.observe(el));
})();
