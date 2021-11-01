window.onload = function () {
    const btnSearch = document.querySelector("#btn-search")
    const inputSearch = document.querySelector("#input-search")
    const formSearch = document.querySelector("#search-user")

    formSearch.addEventListener('submit', e => {
        let key = inputSearch.value;
        inputSearch.value = ""
        inputSearch.style.opacity = 0
        inputSearch.style.pointerEvents = "none"
        e.preventDefault()
        searchUser(key)
    })

    function searchUser(key) {
        let user_list = $('.users-list')
        fetch(`http://localhost:3000/search/${key}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-url-encoded' },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.length)
                if (data.length != 0) {
                    data.forEach(element => {
                        user_list.append(`
                    <a href="./chat/${element.slug}">
                        <div class="content">
                            <div class="img-group">
                                <i class="fas fa-circle"></i>
                                <img src="${element.image}" alt="">
                            </div>
                            <div class="details">
                                <span>${element.name}</span>
                                <p>
                                ${element.name}
                                </p>
                            </div>
                        </div>
                    </a>
                   `)
                    });
                }
            })
            .catch(err => console.log(err))
    }
}
