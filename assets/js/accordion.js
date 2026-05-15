$(document).ready(function () {
  // $(".closet-header").first().addClass("active").next(".closet-content").slideDown();

  $(".closet-header").click(function () {
    $(this).toggleClass("active").next(".closet-content").slideToggle();
    $(".closet-header")
      .not(this)
      .removeClass("active")
      .next(".closet-content")
      .slideUp();
  });
});

// accordion.js

// const faqItems = document.querySelectorAll(".faq-item");

// faqItems.forEach((item) => {
//     const question = item.querySelector(".faq-question");
//     question.addEventListener("click", () => {
//         faqItems.forEach((faq) => {
//             if (faq !== item) {
//                 faq.classList.remove("active");
//             }
//         });
//         item.classList.toggle("active");
//     });

// });

$(document).ready(function () {

  $(".faq-question").click(function () {

    $(this)
      .parent(".faq-item")
      .toggleClass("active")
      .find(".faq-answer")
      .stop(true, true)
      .slideToggle(400);

    $(".faq-question")
      .not(this)
      .parent(".faq-item")
      .removeClass("active")
      .find(".faq-answer")
      .stop(true, true)
      .slideUp(400);

  });

});
$(document).ready(function () {

    $(".style-hub-faq-header").click(function () {

        alert("clicked");

    });

});
