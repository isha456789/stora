

    $(document).ready(function () {

        $(".style-hub-faq-header").click(function () {

            let currentItem = $(this).closest(".style-hub-faq-card");

            $(".style-hub-faq-card")
                .not(currentItem)
                .removeClass("active")
                .find(".style-hub-faq-body")
                .slideUp(400);

            currentItem.toggleClass("active");

            currentItem
                .find(".style-hub-faq-body")
                .stop(true, true)
                .slideToggle(400);

        });

    });


