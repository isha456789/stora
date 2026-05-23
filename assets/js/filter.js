const filterButtons = document.querySelectorAll(".filter-btn");
const allItems = document.querySelectorAll(".filter-item");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        // ACTIVE CLASS
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        // CURRENT CATEGORY
        const currentFilter = this.getAttribute("data-filter-category");

        // FILTER ITEMS
        allItems.forEach(item => {

            const itemCategory = item.getAttribute("data-filter-category");

            if (
                currentFilter === "all" ||
                itemCategory === currentFilter
            ) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }

        });

    });

});