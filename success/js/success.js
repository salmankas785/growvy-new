document.addEventListener("DOMContentLoaded", function () {
  const logos = document.querySelectorAll(".imagess img");

  logos.forEach(function (logo) {
    logo.addEventListener("click", function () {
      console.log("You clicked on:", this.alt);
    });
    logo.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1)";
      this.style.transition = "transform 0.3s ease";
    });

    logo.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
});
