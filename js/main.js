/* Varga's Music Hub Brașov — interacțiuni site */
(function () {
  "use strict";

  // ---- Meniu mobil (hamburger) ----
  var burger = document.querySelector(".hamburger");
  var menu = document.getElementById("mobileMenu");
  var closeBtn = document.querySelector(".mm-close");

  function openMenu() {
    if (!menu) return;
    menu.classList.add("open");
    if (burger) burger.classList.add("open");
    burger && burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeMenu() {
    if (!menu) return;
    menu.classList.remove("open");
    if (burger) burger.classList.remove("open");
    burger && burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  if (burger) {
    burger.addEventListener("click", function () {
      menu && menu.classList.contains("open") ? closeMenu() : openMenu();
    });
  }
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (menu) {
    menu.querySelectorAll(".mm-nav a, .mm-cta a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // ---- An curent în footer ----
  var y = document.querySelectorAll(".js-year");
  y.forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // ---- Reveal la scroll ----
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // ---- Formular contact (Formsubmit, AJAX) ----
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("formStatus");
      var btn = form.querySelector('button[type="submit"]');
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (status) {
        status.hidden = false;
        status.style.color = "var(--text-muted)";
        status.textContent = "Se trimite...";
      }
      if (btn) { btn.disabled = true; }
      fetch("https://formsubmit.co/ajax/contact.smartweb.ro@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form)
      })
        .then(function (r) { return r.json(); })
        .then(function () {
          if (status) {
            status.style.color = "var(--auriu-2)";
            status.textContent = "Îți mulțumim! Am primit cererea ta și revenim în cel mai scurt timp.";
            status.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          form.reset();
        })
        .catch(function () {
          if (status) {
            status.style.color = "#b3261e";
            status.textContent = "A apărut o eroare la trimitere. Te rugăm sună-ne la 0740 057 211 sau scrie-ne pe WhatsApp.";
          }
        })
        .then(function () { if (btn) { btn.disabled = false; } });
    });
  }
})();
