window.onload = function () {
    let password = document.querySelector("#password")

    let eye = document.querySelector("#eye")

    if (eye) {
        eye.onclick = () => {
            if (password.type === "password") {
                password.type = "text"
                eye.classList.remove("fa-eye")
                eye.classList.add("fa-eye-slash")
            } else {
                password.type = "password"
                eye.classList.remove("fa-eye-slash")
                eye.classList.add("fa-eye")
            }
        }
    }
}

