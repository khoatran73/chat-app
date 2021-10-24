window.onload = function () {
    const btnSearch = document.querySelector("#btn-search")
    const inputSearch = document.querySelector("#input-search")

    btnSearch.addEventListener("click", function () {
        inputSearch.style.opacity = 1
        inputSearch.style.pointerEvents = "auto"
    })

}
