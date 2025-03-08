document.addEventListener('DOMContentLoaded', () => {
    function validarRut(rut) {
        // Limpiar el RUT (quitar puntos, guión y convertir a mayúscula)
        const rutLimpio = rut.replace(/\./g, '').replace(/-/g, '').toUpperCase();
        
        // Validar formato básico
        if (!/^\d+K?$/.test(rutLimpio)) return false;
        
        // Separar números y dígito verificador
        const cuerpo = rutLimpio.slice(0, -1);
        const dvIngresado = rutLimpio.slice(-1);
        
        // Calcular dígito verificador esperado
        let suma = 0;
        let multiplicador = 2;
        
        // Recorrer el cuerpo de derecha a izquierda
        for (let i = cuerpo.length - 1; i >= 0; i--) {
            suma += parseInt(cuerpo.charAt(i)) * multiplicador;
            multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
        }
        
        const resto = suma % 11;
        let dvEsperado = 11 - resto;
        
        // Manejar casos especiales
        if (dvEsperado === 10) dvEsperado = 'K';
        if (dvEsperado === 11) dvEsperado = '0';
        
        return dvIngresado === dvEsperado.toString();
    }
});
//
function registrar_paciente(e){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let first_name = document.getElementById("first_name").value
    let last_name = document.getElementById("last_name").value
    let email = document.getElementById("email").value
    let edad = document.getElementById("edad").value
    let fono = document.getElementById("fono").value
    let rut = document.getElementById("rut").value
    let num_vivienda = document.getElementById("num_vivienda").value
    //------- Valor Radio Button Sexo ---------
    let sexo = document.getElementsByName("sexo")
    let valor_radio;
    sexo.forEach(radio => {
        if (radio.checked) {
            valor_radio = radio.value;
        }
    });
    //------- Fin Valor Radio Button Sexo ---------
    //------- Valor Radio Button Vivienda---------
    let vivienda = document.getElementsByName("tipo_vivienda")
    let valor_vivienda;
    vivienda.forEach(radio => {
        if (radio.checked) {
            valor_vivienda = radio.value;
        }
    });
    console.log(valor_vivienda)
    //------- Fin Valor Radio Button Vivienda ---------
    //-------------------- Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Región.
    let id_region = document.getElementById("region").value
    let region = document.getElementById("region_" + id_region).getAttribute("data-region")
    console.log(region)
    //------ Fin Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Comuna.
    let comuna = document.getElementById("comuna").value
    console.log(comuna)
    //------ Fin Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Comuna.
    //-----  Creamos el array de bjetos. -------------
    let datos = {
        'username': username ,
        'password': password ,
        'first_name': first_name ,
        'last_name': last_name ,
        'email': email ,
        'edad': edad ,
        'fono': fono ,
        'rut': rut ,
        'num_vivienda': num_vivienda ,
        'sexo': valor_radio ,
        'vivienda': valor_vivienda ,
        'region': region ,
        'comuna': comuna ,
    }
    console.log(datos)
    axios.post(`http://127.0.0.1:8000/usuario/registrar_usuario`,datos, {
        
    })
    .then(function (response) {
        console.warn(response.data);
        console.warn(response.status)
        if (response.status == 200) {
            Swal.fire({
                icon: "success",
                title: "Usuario Registrado  Correctamente",
                text: "usuario registrado",
            });
        }
    })
    .catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
            if (error.response.data.error == 3) {
                Swal.fire({
                    icon: "error",
                    title: "El usuario ya existe",
                    text: "El usuario fue creado anteriormente!",
                });
            }
        }
    });
}