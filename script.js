function toggleMenu() {
  const menuLinks = document.querySelector(".menu-links");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  menuLinks.classList.toggle("open");
  hamburgerIcon.classList.toggle("open");
}

document
  .getElementById("dark-mode-toggle")
  .addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // Toggle icon sources
    document.querySelectorAll(".icon").forEach((icon) => {
      const darkSrc = icon.getAttribute("data-dark-src");
      const lightSrc = icon.getAttribute("data-light-src");
      if (document.body.classList.contains("dark-mode")) {
        icon.setAttribute("src", darkSrc);
      } else {
        icon.setAttribute("src", lightSrc);
      }
    });

    const toggleIcon = document.getElementById("dark-mode-toggle");
    const darkSrc = toggleIcon.getAttribute("data-dark-src");
    const lightSrc = toggleIcon.getAttribute("data-light-src");
    if (document.body.classList.contains("dark-mode")) {
      toggleIcon.setAttribute("src", darkSrc);
    } else {
      toggleIcon.setAttribute("src", lightSrc);
    }
  });

// Mouse cursor effect
document.addEventListener("mousemove", (e) => {
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  cursorOutline.style.left = `${posX}px`;
  cursorOutline.style.top = `${posY}px`;

  cursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" },
  );
});
