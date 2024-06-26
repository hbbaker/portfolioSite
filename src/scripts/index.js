window.onload = () => {

    var checkbox = document.querySelector("input[type=checkbox]")
    checkbox.addEventListener('change', clicked)

    function clicked(event) {
        document.body.classList.toggle("dark-theme")
    }

}

