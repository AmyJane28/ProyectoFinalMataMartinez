function Login() {
    var user = document.getElementById("user").value;
    var userEmail = document.getElementById("userEmail").value;
    var password = document.getElementById("userPass").value;

    if (user && userEmail && password) {
        sessionStorage.setItem("user", user);
        sessionStorage.setItem("userEmail", userEmail)
        sessionStorage.setItem("password", password)

        window.open("../pages/cargarAlumnos.html")

        document.getElementById("user").value = ""
        document.getElementById("userEmail").value = ""
        document.getElementById("userPass").value = ""
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Favor de llenar todos los campos!'
          })
    }

}