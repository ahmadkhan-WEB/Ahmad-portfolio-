(function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (!form || !status) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();

    status.hidden = false;
    status.textContent = `Thanks${name ? `, ${name}` : ""}! Your message is ready — connect your email service to send it.`;
    form.reset();
  });
})();
