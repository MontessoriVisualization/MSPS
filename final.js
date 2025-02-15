document.addEventListener("DOMContentLoaded", function () {
    // Select the navigation menu links
    const navLinks = document.querySelectorAll("#nav-menu li a");

    // Get the current page file name
    const currentPage = window.location.pathname.split("/").pop();

    // Loop through all navigation links and highlight the active one
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Add 'active' class to highlight the selected tab
        }

        // Add click event listener to the Home button
        if (link.getAttribute("id") === "main_page") {
            link.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent default anchor behavior
                window.location.href = "mainhomepage.html"; // Redirect to the main page
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling when clicking "Gallery" in the navbar
  document.querySelector(".nav-gallery").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#gallery-section").scrollIntoView({ behavior: "smooth" });
  });
  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4, // Show 4 images at once
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      500: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  });
});

//nav bar
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
});

