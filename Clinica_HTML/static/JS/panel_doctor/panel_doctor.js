function click_seccion(){
    // Selecciona solo los enlaces dentro del menú
    const menuItems = document.querySelectorAll('.sidebar-menu a'); // 🎯 Ajusta la clase según tu HTML
    //
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Evita recargar si es un enlace
            
            //let pru = e.getAttribute("data-name")
            //console.log(item)
            // Remueve la clase de TODOS los elementos del menú
            menuItems.forEach(a => {
                a.classList.remove('active-item');
                a.style.background = ""; // Limpia el estilo en línea
            });
            // Aplica solo al elemento clickeado
            this.classList.add('active-item');
            this.style.background = "#A4A4A4";
        });
    });
    // Sección Clínica
    let panel_clinica = document.getElementById("panel_doctor_datos")
    panel_clinica.addEventListener("click", function(event){
        let container_datos_personal = document.getElementById("container_datos_personal")
        container_datos_personal.style.display="block"
        //
        let container_doctor_panel_doctor = document.getElementById("container_doctor_panel_doctor")
        container_doctor_panel_doctor.style.display="none"
        //
        let container_paciente_panel_doctor = document.getElementById("container_paciente_panel_doctor")
        container_paciente_panel_doctor.style.display="none"
        //
        let container_secretaria_panel_doctor = document.getElementById("container_secretaria_panel_doctor")
        container_secretaria_panel_doctor.style.display = "none"
        //
        let container_panel_doctor_todas_reservas = document.getElementById("container_panel_doctor_todas_reservas")
        container_panel_doctor_todas_reservas.style.display = "none"
    })
    // 
    let panel_doctor = document.getElementById("panel_doctor")
    panel_doctor.addEventListener("click", function(){
        let container_datos_personal = document.getElementById("container_datos_personal")
        container_datos_personal.style.display="none"
        //
        let container_doctor_panel_doctor = document.getElementById("container_doctor_panel_doctor")
        container_doctor_panel_doctor.style.display="block"
        //
        let container_paciente_panel_doctor = document.getElementById("container_paciente_panel_doctor")
        container_paciente_panel_doctor.style.display="none"
        //
        let container_secretaria_panel_doctor = document.getElementById("container_secretaria_panel_doctor")
        container_secretaria_panel_doctor.style.display = "none"
        //
        let container_panel_doctor_todas_reservas = document.getElementById("container_panel_doctor_todas_reservas")
        container_panel_doctor_todas_reservas.style.display = "none"
    })
    // //
    let panel_paciente = document.getElementById("panel_paciente")
    panel_paciente.addEventListener("click", function(event){
        let container_datos_personal = document.getElementById("container_datos_personal")
        container_datos_personal.style.display="none"
        //
        let container_doctor_panel_doctor = document.getElementById("container_doctor_panel_doctor")
        container_doctor_panel_doctor.style.display="none"
        //
        let container_secretaria_panel_doctor = document.getElementById("container_secretaria_panel_doctor")
        container_secretaria_panel_doctor.style.display = "none"
        //
        let container_panel_doctor_todas_reservas = document.getElementById("container_panel_doctor_todas_reservas")
        container_panel_doctor_todas_reservas.style.display = "none"
        //
        let container_paciente_panel_doctor = document.getElementById("container_paciente_panel_doctor")
        container_paciente_panel_doctor.style.display="block"
    })
    // //
    let panel_secretaria = document.getElementById("panel_secretaria")
    panel_secretaria.addEventListener("click", function(event){
        let container_datos_personal = document.getElementById("container_datos_personal")
        container_datos_personal.style.display="none"
        //
        let container_doctor_panel_doctor = document.getElementById("container_doctor_panel_doctor")
        container_doctor_panel_doctor.style.display="none"
        //
        let container_panel_doctor_todas_reservas = document.getElementById("container_panel_doctor_todas_reservas")
        container_panel_doctor_todas_reservas.style.display = "none"
        //
        let container_paciente_panel_doctor = document.getElementById("container_paciente_panel_doctor")
        container_paciente_panel_doctor.style.display="none"
        //
        let container_secretaria_panel_doctor = document.getElementById("container_secretaria_panel_doctor")
        container_secretaria_panel_doctor.style.display = "block"
    })
    // Cuando se le hace click al link de etiqueta a.
    let panel_reserva = document.getElementById("panel_reserva")
    panel_reserva.addEventListener("click", function(e){
        let container_datos_personal = document.getElementById("container_datos_personal")
        container_datos_personal.style.display="none"
        //
        let container_doctor_panel_doctor = document.getElementById("container_doctor_panel_doctor")
        container_doctor_panel_doctor.style.display="none"
        //
        let container_paciente_panel_doctor = document.getElementById("container_paciente_panel_doctor")
        container_paciente_panel_doctor.style.display="none"
        //
        let container_secretaria_panel_doctor = document.getElementById("container_secretaria_panel_doctor")
        container_secretaria_panel_doctor.style.display = "none"
        //
        let container_panel_doctor_todas_reservas = document.getElementById("container_panel_doctor_todas_reservas")
        container_panel_doctor_todas_reservas.style.display = "block"
    })
}
click_seccion()
//
function obtener_datos_doctor(){
    //
    const username = sessionStorage.getItem('username');
    //
    const token = sessionStorage.getItem('token');
    //
    let arr = []
    axios.get('http://127.0.0.1:8000/doctor/listar_datos_doctor',{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        console.log(typeof(response.data.dato_doctor))
        let datos = response.data.dato_doctor
        datos.forEach(element => {
            arr.push(element)
        });
        //
        var table = $('#tabla_dato_doctor').DataTable({
            data: arr,
            columns: [
                { title: 'ID', data: "id", defaultContent: '' },
                { title: 'Username', data: "username", defaultContent: '' },
                { title: 'Nombres', data: "first_name", defaultContent: '' },
                { title: 'Apellidos', data: "last_name", defaultContent: '' },
                { title: 'Email', data: "email", defaultContent: '' },
                { title: 'Edad', data: "edad", defaultContent: '' },
                { title: 'Sexo', data: "sexo", defaultContent: '' },
                { title: 'Rut', data: "rut", defaultContent: '' },
                { title: 'Contacto', data: "fono", defaultContent: '' },
                { 
                    title: 'Acciones', 
                    data: null,
                    responsivePriority: 1, // Prioridad máxima (no se oculta)
                    className: 'no-wrap', // Clase para evitar saltos de línea
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_info_doc" onclick="editar_doctor_panel_doc('+row.id+', \''+row.username+'\',\''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\')" class="btn btn-warning btn-sm">Editar</button> ';
                    }
                },
            ],
            responsive: true,
            destroy: true,
            "dom": 'Bfrtip',
            buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
            "lengthMenu": [
                [5,10, 25, 50, -1],
                ['5 Resultados', '10 Resultados', '50 Resultados', 'Mostrar Todos']
            ],
            "buttons": {
                "pageLength": {
                    _: "Mostrar %d Registros"
                }
            },
            "language": {
                "decimal": "",
                "emptyTable": "No hay información",
                "info": "Mostrando _START_ a _END_ de _TOTAL_ Datos",
                "infoEmpty": "Mostrando 0 to 0 of 0 Documentos",
                "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                "infoPostFix": "",
                "thousands": ",",
                "lengthMenu": "Mostrar _MENU_ Documentos",
                "loadingRecords": "Cargando...",
                "processing": "Procesando...",
                "search": "Buscar:",
                "zeroRecords": "Sin resultados encontrados",
                "paginate": {
                    "first": "Primero",
                    "last": "Ultimo",
                    "next": "Siguiente",
                    "previous": "Anterior"
                }
            }
        });
    })
    .catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
        }
    });
}
// Modal para editar la información del Doctor.
function editar_doctor_panel_doc(id, usuario, nombre, apellidos,email, edad,sexo,rut,contacto){
    let modal_info_doctor = document.getElementById("modal_info_doctor")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_info_doctor);
    // Abre el modal
    modalInstance.show();
    //
    let id_usuario = document.getElementById("id_usuario_doctor")
    id_usuario.value = id
    let edit_username = document.getElementById("username")
    edit_username.value = usuario
    let edit_first_name = document.getElementById("first_name")
    edit_first_name.value = nombre
    let edit_last_name = document.getElementById("last_name")
    edit_last_name.value = apellidos
    let edit_email = document.getElementById("email")
    edit_email.value = email
    let edit_edad = document.getElementById("edad")
    edit_edad.value = edad
    let edit_sexo = document.getElementsByName("sexo")
    edit_sexo.forEach(radio => {
        if (radio.value === sexo) {
            console.log(radio)
                radio.checked = true;
            }
    });
    let edit_rut = document.getElementById("rut")
    edit_rut.value = rut
    let edit_contacto = document.getElementById("contacto")
    edit_contacto.value = contacto
}
// Enviar datos edit del Doctor.
function enviar_datos_doc(){
    //
    const token = sessionStorage.getItem('token');
    //
    let id = document.getElementById("id_usuario_doctor").value
    let username = document.getElementById("username").value
    let first_name = document.getElementById("first_name").value
    let last_name = document.getElementById("last_name").value
    let email = document.getElementById("email").value
    let edad = document.getElementById("edad").value
    //------- Valor Radio Button Sexo ---------
    let sexo = document.getElementsByName("sexo")
    let valor_radio;
    sexo.forEach(radio => {
        if (radio.checked) {
            valor_radio = radio.value;
        }
    });
    let rut = document.getElementById("rut").value
    let contacto = document.getElementById("contacto").value
    //
    let datos = {
        'username':username,
        'first_name':first_name,
        'last_name':last_name,
        'email':email,
        'edad':edad,
        'sexo':valor_radio,
        'rut':rut,
        'contacto':contacto,
    }
    console.log(datos)
    let arr = []
    axios.put(`http://127.0.0.1:8000/doctor/update_panel_doctor/${id}/`,datos, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        console.warn(response.data);
        console.warn(response.status)
        if (response.status == 200) {
            Swal.fire({
                icon: "success",
                title: "Editado Correctamente",
                text: "Datos editado correctamente",
            });
            //
            let doctor = response.data.dato_doctor
            doctor.forEach(element => {
                console.log(element.username)
                arr.push(element)
            });
            console.warn(arr)
            //
            var table = $('#tabla_dato_doctor').DataTable({
                data: arr,
                columns: [
                    { title: 'ID', data: "id", defaultContent: '' },
                    { title: 'Username', data: "username", defaultContent: '' },
                    { title: 'Nombres', data: "first_name", defaultContent: '' },
                    { title: 'Apellidos', data: "last_name", defaultContent: '' },
                    { title: 'Email', data: "email", defaultContent: '' },
                    { title: 'Edad', data: "edad", defaultContent: '' },
                    { title: 'Sexo', data: "sexo", defaultContent: '' },
                    { title: 'Rut', data: "rut", defaultContent: '' },
                    { title: 'Contacto', data: "fono", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_info_doc" onclick="editar_doctor_panel_doc('+row.id+', \''+row.username+'\',\''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\')" class="btn btn-warning btn-sm">Editar</button> ';
                        }
                    },
                ],
                responsive: true,
                destroy: true,
                "dom": 'Bfrtip',
                buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
                "lengthMenu": [
                    [5,10, 25, 50, -1],
                    ['5 Resultados', '10 Resultados', '50 Resultados', 'Mostrar Todos']
                ],
                "buttons": {
                    "pageLength": {
                        _: "Mostrar %d Registros"
                    }
                },
                "language": {
                    "decimal": "",
                    "emptyTable": "No hay información",
                    "info": "Mostrando _START_ a _END_ de _TOTAL_ Datos",
                    "infoEmpty": "Mostrando 0 to 0 of 0 Documentos",
                    "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                    "infoPostFix": "",
                    "thousands": ",",
                    "lengthMenu": "Mostrar _MENU_ Documentos",
                    "loadingRecords": "Cargando...",
                    "processing": "Procesando...",
                    "search": "Buscar:",
                    "zeroRecords": "Sin resultados encontrados",
                    "paginate": {
                        "first": "Primero",
                        "last": "Ultimo",
                        "next": "Siguiente",
                        "previous": "Anterior"
                    }
                }
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
// Obtener todos los doctores de la clinica actual
function obtener_doctores(){
    //
    const username = sessionStorage.getItem('username');
    //
    const token = sessionStorage.getItem('token');
    //
    let arr = []
    //
    axios.get(`http://127.0.0.1:8000/doctor/listar_doctor/${username}`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        console.warn(response.data.dato_doctor)
        console.log(typeof(response.data.dato_doctor))
        let datos = response.data.dato_doctor
        datos.forEach(element => {
            arr.push(element)
        });
        //
        console.warn(arr)
        //
        var table = $('#listar_doctor').DataTable({
            data: arr,
            columns: [
                { title: 'ID', data: "id", defaultContent: '' },
                { title: 'Username', data: "username", defaultContent: '' },
                { title: 'Nombres', data: "first_name", defaultContent: '' },
                { title: 'Apellidos', data: "last_name", defaultContent: '' },
                { title: 'Email', data: "email", defaultContent: '' },
                { title: 'Edad', data: "edad", defaultContent: '' },
                { title: 'Sexo', data: "sexo", defaultContent: '' },
                { title: 'Rut', data: "rut", defaultContent: '' },
                { title: 'Contacto', data: "fono", defaultContent: '' },
                { 
                    title: 'Acciones', 
                    data: null,
                    responsivePriority: 1, // Prioridad máxima (no se oculta)
                    className: 'no-wrap', // Clase para evitar saltos de línea
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_info_doc" onclick="editar_doctor_panel_doc('+row.id+', \''+row.username+'\',\''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\')" class="btn btn-warning btn-sm">Editar</button> ';
                    }
                },
            ],
            responsive: true,
            destroy: true,
            "dom": 'Bfrtip',
            buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
            "lengthMenu": [
                [5,10, 25, 50, -1],
                ['5 Resultados', '10 Resultados', '50 Resultados', 'Mostrar Todos']
            ],
            "buttons": {
                "pageLength": {
                    _: "Mostrar %d Registros"
                }
            },
            "language": {
                "decimal": "",
                "emptyTable": "No hay información",
                "info": "Mostrando _START_ a _END_ de _TOTAL_ Datos",
                "infoEmpty": "Mostrando 0 to 0 of 0 Documentos",
                "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                "infoPostFix": "",
                "thousands": ",",
                "lengthMenu": "Mostrar _MENU_ Documentos",
                "loadingRecords": "Cargando...",
                "processing": "Procesando...",
                "search": "Buscar:",
                "zeroRecords": "Sin resultados encontrados",
                "paginate": {
                    "first": "Primero",
                    "last": "Ultimo",
                    "next": "Siguiente",
                    "previous": "Anterior"
                }
            }
        });
    })
    .catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
        }
    });
}
// Función para obtener todos los pacientes con tienen reserva de cita con el doctor.
function paciente_citas(){
    //
    const username = sessionStorage.getItem('username');
    //
    const token = sessionStorage.getItem('token');
    //
    let arr = []
    //
    axios.get(`http://127.0.0.1:8000/reserva/listar_paciente_doctor/${username}`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        console.warn(response.data.dato_doctor)
        console.log(typeof(response.data.reserva))
        let reserva = response.data.reserva
        reserva.forEach(element => {
            arr.push(element)
        });
        //
        console.warn(arr)
        //
        var table = $('#tabla_pac_panel_doctor').DataTable({
            data: arr,
            columns: [
                { title: 'ID', data: "id_usuario", defaultContent: '' },
                { title: 'Nombres', data: "first_name", defaultContent: '' },
                { title: 'Apellidos', data: "last_name", defaultContent: '' },
                { title: 'Email', data: "email", defaultContent: '' },
                { title: 'Edad', data: "edad", defaultContent: '' },
                { title: 'Sexo', data: "sexo", defaultContent: '' },
                { title: 'Rut', data: "rut", defaultContent: '' },
                { title: 'Contacto', data: "fono", defaultContent: '' },
                { 
                    title: 'Historial Clínico', 
                    data: null,
                    responsivePriority: 1, // Prioridad máxima (no se oculta)
                    className: 'no-wrap', // Clase para evitar saltos de línea
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_info_doc" onclick="historial_pac_panel_doc('+row.id_usuario+',\''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\')" class="btn btn-info btn-sm"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M720-240q25 0 42.5-17.5T780-300q0-25-17.5-42.5T720-360q-25 0-42.5 17.5T660-300q0 25 17.5 42.5T720-240Zm0 120q32 0 57-14t42-39q-20-16-45.5-23.5T720-204q-28 0-53.5 7.5T621-173q17 25 42 39t57 14Zm-520 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v268q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H200Zm0-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z"/></svg></button> ';
                    }
                },
            ],
            responsive: true,
            destroy: true,
            "dom": 'Bfrtip',
            buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
            "lengthMenu": [
                [5,10, 25, 50, -1],
                ['5 Resultados', '10 Resultados', '50 Resultados', 'Mostrar Todos']
            ],
            "buttons": {
                "pageLength": {
                    _: "Mostrar %d Registros"
                }
            },
            "language": {
                "decimal": "",
                "emptyTable": "No hay información",
                "info": "Mostrando _START_ a _END_ de _TOTAL_ Datos",
                "infoEmpty": "Mostrando 0 to 0 of 0 Documentos",
                "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                "infoPostFix": "",
                "thousands": ",",
                "lengthMenu": "Mostrar _MENU_ Documentos",
                "loadingRecords": "Cargando...",
                "processing": "Procesando...",
                "search": "Buscar:",
                "zeroRecords": "Sin resultados encontrados",
                "paginate": {
                    "first": "Primero",
                    "last": "Ultimo",
                    "next": "Siguiente",
                    "previous": "Anterior"
                }
            }
        });
    })
    .catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
        }
    });
}
// Obtener el historial del paciente.
function historial_pac_panel_doc(id, usuario, nombres, apellidos, email, edad, sexo, rut, fono){
    //
    let modal_info_historial_clinico_pac = document.getElementById("modal_info_historial_clinico_pac")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_info_historial_clinico_pac);
    // Abre el modal
    modalInstance.show();
    //
    const token = sessionStorage.getItem('token');
    //
    let id_user = document.getElementById("id_user_pac_historial_panel_doc")
    id_user.value = id
    //
    let arr = []
    //
    axios.get(`http://127.0.0.1:8000/reserva/listar_paciente_historial_doctor/${id}`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        console.warn(response.data.dato_doctor)
        console.log(typeof(response.data.reserva))
        let reserva = response.data.reserva
        reserva.forEach(element => {
            arr.push(element)
        });
        //
        console.warn(arr)
        //
        var table = $('#tabla_historial_paciente_panel_doc').DataTable({
            data: arr,
            columns: [
                
                { title: 'Especialidad', data: "especialidad", defaultContent: '' },
                { title: 'Nombre Doctor', data: "nombre_doctor", defaultContent: '' },
                { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                { 
                    title: 'Fecha Cita', 
                    data: "fecha_reserva", 
                    defaultContent: '',
                    render: function(data, type, row) {
                        if (!data) return ""; // Si no hay fecha, devuelve vacío
                        let fecha = new Date(data); // Convierte la fecha en un objeto Date
                        let dia = fecha.getDate().toString().padStart(2, '0'); // Obtiene el día con dos dígitos
                        let mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Obtiene el mes con dos dígitos
                        let anio = fecha.getFullYear(); // Obtiene el año
                        return `${dia}-${mes}-${anio}`; // Retorna la fecha con el formato DD-MM-YYYY
                    }
                },
                { title: 'Hora Cita', data: "hora_inicio", defaultContent: '' },
                { title: 'Hora Término', data: "hora_termino", defaultContent: '' },
                { title: 'Cod Cita', data: "cod_reserva", defaultContent: '' },
                { title: 'F. Creación Cita', data: "fecha_creacion_reserva", defaultContent: '' },
                { 
                    title: 'Historial Médico', 
                    data: null,
                    responsivePriority: 1, // Prioridad máxima (no se oculta)
                    className: 'no-wrap', // Clase para evitar saltos de línea
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" id="btn_historial_detalle_medicopanel__doc" onclick="historial_detalle_medico_pac_panel_doc(\''+row.id_reserva+'\', \''+row.cod_reserva+'\')" class="btn btn-info btn-sm"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M720-240q25 0 42.5-17.5T780-300q0-25-17.5-42.5T720-360q-25 0-42.5 17.5T660-300q0 25 17.5 42.5T720-240Zm0 120q32 0 57-14t42-39q-20-16-45.5-23.5T720-204q-28 0-53.5 7.5T621-173q17 25 42 39t57 14Zm-520 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v268q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H200Zm0-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z"/></svg></button> ';
                    }
                },
            ],
            responsive: true,
            destroy: true,
            "dom": 'Bfrtip',
            buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
            "lengthMenu": [
                [5,10, 25, 50, -1],
                ['5 Resultados', '10 Resultados', '50 Resultados', 'Mostrar Todos']
            ],
            "buttons": {
                "pageLength": {
                    _: "Mostrar %d Registros"
                }
            },
            "language": {
                "decimal": "",
                "emptyTable": "No hay información",
                "info": "Mostrando _START_ a _END_ de _TOTAL_ Datos",
                "infoEmpty": "Mostrando 0 to 0 of 0 Documentos",
                "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                "infoPostFix": "",
                "thousands": ",",
                "lengthMenu": "Mostrar _MENU_ Documentos",
                "loadingRecords": "Cargando...",
                "processing": "Procesando...",
                "search": "Buscar:",
                "zeroRecords": "Sin resultados encontrados",
                "paginate": {
                    "first": "Primero",
                    "last": "Ultimo",
                    "next": "Siguiente",
                    "previous": "Anterior"
                }
            }
        });
    })
    .catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
        }
    });
}
// Obtenemos el id del usuario para realizar la peticion correspondiente de su historial.
function historial_detalle_medico_pac_panel_doc(id_reserva){
    console.warn(id_reserva)
    //

    let arr = []
    //
    axios.get(`http://127.0.0.1:8000/reserva/listar_paciente_historial_doctor/${id}`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        console.warn(response.data.dato_doctor)
        console.log(typeof(response.data.reserva))
        let reserva = response.data.reserva
        reserva.forEach(element => {
            arr.push(element)
        });
        //
        console.warn(arr)
        //
        var table = $('#tabla_historial_paciente_panel_doc').DataTable({
            data: arr,
            columns: [
                
                { title: 'Especialidad', data: "especialidad", defaultContent: '' },
                { title: 'Nombre Doctor', data: "nombre_doctor", defaultContent: '' },
                { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                { 
                    title: 'Fecha Cita', 
                    data: "fecha_reserva", 
                    defaultContent: '',
                    render: function(data, type, row) {
                        if (!data) return ""; // Si no hay fecha, devuelve vacío
                        let fecha = new Date(data); // Convierte la fecha en un objeto Date
                        let dia = fecha.getDate().toString().padStart(2, '0'); // Obtiene el día con dos dígitos
                        let mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Obtiene el mes con dos dígitos
                        let anio = fecha.getFullYear(); // Obtiene el año
                        return `${dia}-${mes}-${anio}`; // Retorna la fecha con el formato DD-MM-YYYY
                    }
                },
                { title: 'Hora Cita', data: "hora_inicio", defaultContent: '' },
                { title: 'Hora Término', data: "hora_termino", defaultContent: '' },
                { title: 'Cod Cita', data: "cod_reserva", defaultContent: '' },
                { title: 'F. Creación Cita', data: "fecha_creacion_reserva", defaultContent: '' },
                { 
                    title: 'Historial Médico', 
                    data: null,
                    responsivePriority: 1, // Prioridad máxima (no se oculta)
                    className: 'no-wrap', // Clase para evitar saltos de línea
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" id="btn_editar_info_doc" onclick="historial_detalle_medico_pac_panel_doc('+row.id_usuario+')" class="btn btn-info btn-sm"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M720-240q25 0 42.5-17.5T780-300q0-25-17.5-42.5T720-360q-25 0-42.5 17.5T660-300q0 25 17.5 42.5T720-240Zm0 120q32 0 57-14t42-39q-20-16-45.5-23.5T720-204q-28 0-53.5 7.5T621-173q17 25 42 39t57 14Zm-520 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v268q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H200Zm0-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z"/></svg></button> ';
                    }
                },
            ],
            responsive: true,
            destroy: true,
            "dom": 'Bfrtip',
            buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
            "lengthMenu": [
                [5,10, 25, 50, -1],
                ['5 Resultados', '10 Resultados', '50 Resultados', 'Mostrar Todos']
            ],
            "buttons": {
                "pageLength": {
                    _: "Mostrar %d Registros"
                }
            },
            "language": {
                "decimal": "",
                "emptyTable": "No hay información",
                "info": "Mostrando _START_ a _END_ de _TOTAL_ Datos",
                "infoEmpty": "Mostrando 0 to 0 of 0 Documentos",
                "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                "infoPostFix": "",
                "thousands": ",",
                "lengthMenu": "Mostrar _MENU_ Documentos",
                "loadingRecords": "Cargando...",
                "processing": "Procesando...",
                "search": "Buscar:",
                "zeroRecords": "Sin resultados encontrados",
                "paginate": {
                    "first": "Primero",
                    "last": "Ultimo",
                    "next": "Siguiente",
                    "previous": "Anterior"
                }
            }
        });
    })
    .catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
        }
    });
}
// Función para cerrar la sessión.
function cerrar_session(){
    //
    const username = sessionStorage.getItem('username');
    const token = sessionStorage.getItem('token');
    //
    let datos = {
        'username': username,
        'token': token
    }
    //
    axios.post(`http://127.0.0.1:8000/usuario/cerrar_sesion`,datos, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        console.warn(response.data);
        console.warn(response.status)
        // Eliminar el token del almacenamiento local
        if (response.status == 200) {
            sessionStorage.removeItem('token');
            window.location.href = 'http://127.0.0.1:5500/index.html'
        }
    }).catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
        }
    });
}