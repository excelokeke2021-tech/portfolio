document.addEventListener("DOMContentLoaded", () => {

    const navContainers = document.querySelectorAll("nav");

    navContainers.forEach((nav) => {

        nav.innerHTML = `
      <div class="logo">EXCEL</div>

      <div class="menu-toggle">☰</div>

      <div class="nav-links">
        <a href="../index.html">Home</a>
        <a href="../about.html">About</a>
        <a href="../projects.html">Projects</a>
        <a href="../contact.html">Contact</a>
      </div>
    `;

        const toggle = nav.querySelector(".menu-toggle");
        const links = nav.querySelector(".nav-links");

        toggle?.addEventListener("click", () => {
            links.classList.toggle("active");
        });

    });

});