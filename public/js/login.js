window.onload = function () {
    let pwdField = document.querySelectorAll("input[type='password']")

    let i1 = document.querySelector("#eye")
    input_field1 = pwdField[0]

    if (i1) {
        i1.onclick = () => {
            if (input_field1.type === "password") {
                input_field1.type = "text"
                i1.classList.add("active")
            } else {
                input_field1.type = "password"
                i1.classList.remove("active")
            }
        }
    }
}

