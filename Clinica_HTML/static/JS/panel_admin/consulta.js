function consulta(){
    // Realizaremos las validaciones de los camposre                    
    let nombre = document.getElementById("nombre").value
    let ap_paterno = document.getElementById("apPaterno").value
    let ap_materno = document.getElementById("apMaterno").value
    let email = document.getElementById("email").value
    let consulta = document.getElementById("mensaje").value
    if (nombre == '' || nombre == null || ap_paterno == '' || ap_paterno == null || ap_materno == '' || ap_materno == null || email == '' || email == null || consulta == '' || consulta == null) {
        Swal.fire({
            icon: "error",
            title: "Ooops",
            text: "Debe completar todos los campos",
        });
    }
    // Creamos el Objeto JSON.
    let datos = {
        'nombre':nombre,
        'ap_paterno':ap_paterno,
        'ap_materno':ap_materno,
        'email':email,
        'consulta':consulta,
    }
    // Realizamos el envío por AXIOS.
    axios.post('http://127.0.0.1:8000/consulta',datos)
        .then(function (response) {
            console.log(response.data)
            if (response.data.status = 200) {
                Swal.fire({
                    icon: "success",
                    title: "Éxito",
                    text: "Consulta Enviada!",
                });
                setTimeout(function() {
                    location.reload();
                }, 3000);
            }
        })
        .catch(error => {
            if (error.response) {
                console.log('Error Response:', error.response.data);
                console.log('Error Status:', error.response.status);
                console.log('Error Headers:', error.response.headers);
                if (error.status.error == 2) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Debe llenar los campos del formulario!",
                    });
                }
            }
        });
}