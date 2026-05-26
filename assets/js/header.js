$(document).ready(function () {
  function handleMegaMenu() {
    const isMobile = $(window).width() <= 1025;

    // Remove old events first
    $(".header-link .nav-link").off("click");
    $(".header-link").off("mouseenter mouseleave");

    if (isMobile) {
      $(".header-link").each(function () {
        const menuItem = $(this);

        // Skip if mega menu doesn't exist
        if (menuItem.children(".mega-menu").length === 0) {
          return;
        }

        menuItem.find(".nav-link").on("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          $(".header-link").not(menuItem).removeClass("res-menu-active");

          menuItem.toggleClass("res-menu-active");
        });
      });

      $(".mega-menu").on("click", function (e) {
        e.stopPropagation();
      });

      $(".main-header").removeClass("hover-active");
      $("body").removeClass("menu-blur");
    } else {
      $(".header-link").removeClass("res-menu-active");

      $(".header-link").on("mouseenter", function () {
        if ($(this).children(".mega-menu").length > 0) {
          $(".main-header").addClass("hover-active");
          $("body").addClass("menu-blur");
        }
      });

      $(".header-link").on("mouseleave", function () {
        $(".main-header").removeClass("hover-active");
        $("body").removeClass("menu-blur");
      });
    }
  }

  handleMegaMenu();

  $(window).on("resize", function () {
    handleMegaMenu();
  });
});

const burgerMenu = document.querySelector(".burger-menu");
const headerLeft = document.querySelector(".header-left");
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  headerLeft.classList.toggle("active");
});
const headerLinks = document.querySelectorAll(".header-link");
headerLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (window.innerWidth <= 1025) {
      e.preventDefault();
      item.classList.toggle("res-menu-active");
    }
  });
});
