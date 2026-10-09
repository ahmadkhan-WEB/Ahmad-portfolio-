(function () {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!navbar || !toggle || !links) return;

  function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = links.querySelectorAll("a[href^='#']");

  function setActive() {
    let current = "home";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.id;
      }
    });
    navAnchors.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
    });
  }

  window.addEventListener("scroll", () => {
    onScroll();
    setActive();
  });

  onScroll();
  setActive();
})();
