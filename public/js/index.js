window.onload = function () {
    const btnSearch = document.querySelector("#btn-search")
    const inputSearch = document.querySelector("#input-search")

    btnSearch.addEventListener("click", function () {
        if (inputSearch.style.opacity == 1) {
            inputSearch.style.opacity = 0
            inputSearch.style.pointerEvents = "none"
        } else {
            inputSearch.style.opacity = 1
            inputSearch.style.pointerEvents = "auto"
        }
    })
}
