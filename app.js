// ===============================
// SaaS Dashboard - Main App Logic
// ===============================

// Sidebar toggle (mobile + small screens)
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle-btn");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

// Smooth scroll behavior for navigation links
const navLinks = document.querySelectorAll(".sidebar a");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Simple card hover interaction effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.transition = "0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0px)";
  });
});

// Fake live data update (for portfolio effect)
function updateStats() {
  const values = document.querySelectorAll(".stat-value");

  values.forEach(value => {
    let current = parseInt(value.innerText);
    let change = Math.floor(Math.random() * 10 - 4); // random up/down

    value.innerText = current + change;
  });
}

// Update every 3 seconds (simulation of live dashboard)
setInterval(updateStats, 3000);

// Page load animation trigger hook (GSAP ready)
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});