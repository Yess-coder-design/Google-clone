const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const luckyButton = document.querySelector("#luckyButton");

function searchGoogle() {
    const query = searchInput.value.trim();

    if (query !== "") {
        window.location.href =
            `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    searchGoogle();
});

luckyButton.addEventListener("click", function () {
    searchGoogle();
});