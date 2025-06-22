document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".pricing-cards .cta-button");

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove active from all
        buttons.forEach((b) => b.classList.remove("active-plan"));
        btn.classList.add("active-plan");
      });
    });
  });