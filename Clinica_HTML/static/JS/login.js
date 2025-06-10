function login(){
    //
    let username = document.getElementById("username").value
    let paswword = document.getElementById("password").value
    //
    let datos = {
        'username': username,
        'password': paswword

    }
    console.warn(datos)
    axios.post('http://127.0.0.1:8000/login',datos)
        .then(function (response) {
            console.log(response.data)
            // Capturamos el token que generamos en el back-end.
            let token = response.data.token
            console.warn(token)
            let username = response.data.user.username;
            console.warn(response.data.grupo)
            let arr = response.data.grupo
            let grupo = arr.toString()
            if (response.data.grupo == 'Administrador'){
                console.log("Administrador")
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('username', username)
                //localStorage.setItem('usuarios', response.data.list_users)
                window.location.href = 'http://127.0.0.1:5500/static/Templates/Admin/template_admin.html'; // URL para administradores
            }
            if (response.data.grupo == 'Doctor'){
                //console.log( response.data.username)
                sessionStorage.setItem('token', response.data.token);
                sessionStorage.setItem('username',username)
                window.location.href = 'http://127.0.0.1:5500/static/Templates/Doctor/template_doctor.html';
            }
        })
        .catch(error => {
            if (error.response) {
                console.log('Error Response:', error.response.data);
                console.log('Error Status:', error.response.status);
                console.log('Error Headers:', error.response.headers);
                if (error.response.data == 1) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "No existe el grupo!",
                    });
                }
                if (error.response.data == 2) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "No existe el grupo!",
                    });
                }
                if (error.response.data == 3) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "No existe el grupo!",
                    });
                }
            }
        });
}