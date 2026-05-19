// $(document).ready(function () {
//   function handleMegaMenu() {
//     const isMobile = $(window).width() <= 1025;

//     // Remove old events first
//     $(".header-link .nav-link").off("click");
//     $(".header-link").off("mouseenter mouseleave");

//     if (isMobile) {
//       $(".header-link").each(function () {
//         const menuItem = $(this);

//         // Skip if mega menu doesn't exist
//         if (menuItem.children(".mega-menu").length === 0) {
//           return;
//         }

//         menuItem.find(".nav-link").on("click", function (e) {
//           e.preventDefault();
//           e.stopPropagation();

//           $(".header-link").not(menuItem).removeClass("res-menu-active");

//           menuItem.toggleClass("res-menu-active");
//         });
//       });

//       $(".mega-menu").on("click", function (e) {
//         e.stopPropagation();
//       });

//       $(".main-header").removeClass("hover-active");
//     } else {
//       $(".header-link").removeClass("res-menu-active");

//       $(".header-link").on("mouseenter", function () {
//         $(".main-header").addClass("hover-active");
//       });

//       $(".header-link").on("mouseleave", function () {
//         $(".main-header").removeClass("hover-active");
//       });
//     }
//   }

//   handleMegaMenu();

//   $(window).on("resize", function () {
//     handleMegaMenu();
//   });
// });


const burgerMenu = document.querySelector(".burger-menu");

const headerLeft = document.querySelector(".header-left");

// BURGER MENU
burgerMenu.addEventListener("click", () => {

  burgerMenu.classList.toggle("active");

  headerLeft.classList.toggle("active");

});

// MEGA MENU MOBILE
const headerLinks = document.querySelectorAll(".header-link");

headerLinks.forEach((item) => {

  item.addEventListener("click", (e) => {

    // only mobile
    if (window.innerWidth <= 991) {

      // anchor stop
      e.preventDefault();

      // class add remove
      item.classList.toggle("res-menu-active");

    }

  });

});
