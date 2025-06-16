function click_seccion(){
    // Selecciona solo los enlaces dentro del menú
    const menuItems = document.querySelectorAll('.sidebar-menu a'); // 🎯 Ajusta la clase según tu HTML
    //
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Evita recargar si es un enlace
            
            //let pru = e.getAttribute("data-name")
            console.log(item)
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
    // let panel_clinica = document.getElementById("seccion_clinica")
    // panel_clinica.addEventListener("click", function(event){
    //     let container_paciente = document.getElementById("container_paciente")
    //     container_paciente.style.display="none"
    //     //
    //     let opcion_secre_doc_pasc = document.getElementById("opcion_secre_doc_pasc")
    //     opcion_secre_doc_pasc.style.display="none"
    //     //
    //     let container_secretaria = document.getElementById("container_secretaria")
    //     container_secretaria.style.display="none"
    //     //
    //     let container_grupo = document.getElementById("container_grupo")
    //     container_grupo.style.display = "none"
    //     //
    //     let container_espe_doctor = document.getElementById("container_espe_doctor")
    //     container_espe_doctor.style.display="none"
    //     //
    //     let container_cita_user_info = document.getElementById("container_cita_user_info")
    //     container_cita_user_info.style.display="none"
    //     //
    //     let container_clinica = document.getElementById("container_clinica")
    //     container_clinica.style.display="block"
    //     seccion_clinica()
    // })
    //
    let panel_secretaria_datos = document.getElementById("panel_secretaria_datos")
    panel_secretaria_datos.addEventListener("click", function(){
        let panel_secretaria = document.getElementById("container_secretaria_panel_doctor")
        panel_secretaria.style.display="none"
        let panel_doctor = this.getAttribute("data-name")
        //
        let container_paciente = document.getElementById("container_paciente_panel_doctor")
        container_paciente.style.display="none"
        //
        let container_doctor = document.getElementById("container_doctor_panel_doctor")
        container_doctor.style.display="none"
        //
        let container_secretaria = document.getElementById("container_datos_personal")
        container_secretaria.style.display="block"
        //
        // let container_clinica = document.getElementById("container_clinica")
        // container_clinica.style.display="none"
    })
    //
    let panel_doctor = document.getElementById("panel_doctor")
    panel_doctor.addEventListener("click", function(){
        let panel_doctor = this.getAttribute("data-name")
        //
        let container_paciente = document.getElementById("container_datos_personal")
        container_paciente.style.display="none"
        //
        let container_doctor_panel_doctor = document.getElementById("container_doctor_panel_doctor")
        container_doctor_panel_doctor.style.display="block"
        //
        let container_doctor = document.getElementById("container_paciente_panel_doctor")
        container_doctor.style.display="none"

        let panel_secretaria = document.getElementById("container_secretaria_panel_doctor")
        panel_secretaria.style.display="none"
        // let container_clinica = document.getElementById("container_clinica")
        // container_clinica.style.display="none"
    })
    //
    let panel_paciente = document.getElementById("panel_paciente")
    panel_paciente.addEventListener("click", function(event){
        //
        let ocultar_container_paciente = document.getElementById("container_paciente_panel_doctor")
        ocultar_container_paciente.style.display="block"
        //
        let container_espe_doctor = document.getElementById("container_doctor_panel_doctor") 
        container_espe_doctor.style.display="none"
        //
        let container_secretaria = document.getElementById("container_datos_personal")
        container_secretaria.style.display="none" 
        
        let panel_secretaria = document.getElementById("container_secretaria_panel_doctor")
        panel_secretaria.style.display="none"
        // Llamamos a la función del63 Full calendar.
        //reserva_calendar()
    })
    //
    let panel_secretaria = document.getElementById("panel_secretaria")
    panel_secretaria.addEventListener("click", function(event){
        //
        let container_paciente = document.getElementById("container_paciente_panel_doctor")
        container_paciente.style.display="none"
        //
        let ocultar_container_doctor = document.getElementById("container_doctor_panel_doctor")
        ocultar_container_doctor.style.display="none"
        //
        // let container_espe_doctor = document.getElementById("container_espe_doctor")
        // container_espe_doctor.style.display="none"
        //
        // let container_cita_user_info = document.getElementById("container_cita_user_info")
        // container_cita_user_info.style.display = "none"
        //
        let container_secretaria = document.getElementById("container_datos_personal")
        container_secretaria.style.display="none"
        //
        let panel_secretaria = document.getElementById("container_secretaria_panel_doctor")
        panel_secretaria.style.display="block"
    })

    // Cuando se le hace click al link de etiqueta a.
    // let seleccion_panel_modulos_usuario = document.getElementById("seleccion_panel_modulos_usuario")
    // seleccion_panel_modulos_usuario.addEventListener("click", function(e){
    //     let opcion_secre_doc_pasc = document.getElementById("opcion_secre_doc_pasc")
    //     opcion_secre_doc_pasc.style.display = "block"
    //     //
    //     let container_grupo = document.getElementById("container_grupo")
    //     container_grupo.style.display = "none"
    //     //
    //     let container_esp = document.getElementById("container_secretaria")
    //     container_esp.style.display = "none"
    //     //
    //     let container_espe_doctor = document.getElementById("container_espe_doctor")
    //     container_espe_doctor.style.display="none"
    //     //
    //     let container_cita_user_info = document.getElementById("container_cita_user_info")
    //     container_cita_user_info.style.display = "none"
    //     //
    //     let container_clinica = document.getElementById("container_clinica")
    //     container_clinica.style.display="none"
    //     //
    //     let ocultar_container_doctor = document.getElementById("container_doctor")
    //     ocultar_container_doctor.style.display="none"
    // })
    // 
    // let seleccion_panel_modulos_info_citas = document.getElementById("seleccion_panel_modulos_info_citas")
    // seleccion_panel_modulos_info_citas.addEventListener("click", function (){
    //     //
    //     let opcion_secre_doc_pasc = document.getElementById("opcion_secre_doc_pasc")
    //     opcion_secre_doc_pasc.style.display = "none"
    //     //
    //     let container_grupo = document.getElementById("container_grupo")
    //     container_grupo.style.display = "none"
    //     //
    //     let container_esp = document.getElementById("container_secretaria")
    //     container_esp.style.display = "none"
    //     //
    //     let container_espe_doctor = document.getElementById("container_espe_doctor")
    //     container_espe_doctor.style.display="none"
    //     //
    //     let container_cita_user_info = document.getElementById("container_cita_user_info")
    //     container_cita_user_info.style.display = "block"
    //     //
    //     historial_citas()
    // })
}
click_seccion()
//
function obtener_datos_secretaria(){
    //
    const username = sessionStorage.getItem('username');
    //
    const token = sessionStorage.getItem('token');
    //
    let arr = []
    axios.get(`http://127.0.0.1:8000/secretaria/listar_datos_secretaria/${username}`, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        console.log(typeof(response.data.secretaria))
        let datos = response.data.secretaria
        datos.forEach(element => {
            arr.push(element)
        });
        //
        if ($.fn.DataTable.isDataTable('#tabla_dato_secretaria_panel_secretaria')) {
            $('#tabla_dato_secretaria_panel_secretaria').DataTable().destroy();
            $('#tabla_dato_secretaria_panel_secretaria').empty(); // Limpia la tabla antes de inicializarla nuevamente
        }
        
        var table = $('#tabla_dato_secretaria_panel_secretaria').DataTable({
            data: arr,
            columns: [
                { title: 'ID', data: "id_user", defaultContent: '' },
                { title: 'Username', data: "username", defaultContent: '' },
                { title: 'Primer Nombre', data: "primer_nombre", defaultContent: '' },
                { title: 'Segundo Nombre', data: "segundo_nombre", defaultContent: '' },
                { title: 'Apellido P.', data: "ap_paterno", defaultContent: '' },
                { title: 'Apellido M.', data: "ap_materno", defaultContent: '' },
                { title: 'Email', data: "email", defaultContent: '' },
                { title: 'Edad', data: "edad", defaultContent: '' },
                { title: 'Sexo', data: "sexo", defaultContent: '' },
                { title: 'Contacto', data: "fono", defaultContent: '' },
                { 
                    title: 'Acciones', 
                    data: null,
                    responsivePriority: 1, // Prioridad máxima (no se oculta)
                    className: 'no-wrap', // Clase para evitar saltos de línea
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" data-id="'+row.id_user+'" id="btn_editar_info_secretaria" onclick="editar_secretaria_panel_secre('+row.id_user+', \''+row.username+'\',\''+row.primer_nombre+'\', \''+row.segundo_nombre+'\', \''+row.ap_paterno+'\', \''+row.ap_materno+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\')" class="btn btn-warning btn-sm">Editar</button> ';
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
// Modal Datos Secretaria.
function editar_secretaria_panel_secre(id_user, username,primer_nombre, segundo_nombre, ap_paterno, ap_materno, email, edad, sexo, rut, fono){
    //
    let modal_info_secretaria = document.getElementById("modal_info_secretaria")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_info_secretaria);
    // Abre el modal
    modalInstance.show();
    let id_user_secret = document.getElementById("id_usuario_user_secretaria");
    id_user_secret.value = id_user;
    let username_secret = document.getElementById("secretaria_username");
    username_secret.value = username;
    let primer_nombre_secret = document.getElementById("secretaria_edit_primer_nombre");
    primer_nombre_secret.value = primer_nombre;
    let segundo_nombre_secret = document.getElementById("secretaria_edit_segundo_nombre");
    segundo_nombre_secret.value = segundo_nombre;
    let ap_paterno_secret = document.getElementById("secretaria_edit_ap_paterno");
    ap_paterno_secret.value = ap_paterno;
    let ap_materno_secret = document.getElementById("secretaria_edit_ap_materno");
    ap_materno_secret.value = ap_materno;
    let email_secret = document.getElementById("secretaria_email");
    email_secret.value = email;
    let edad_secret = document.getElementById("secretaria_edad");
    edad_secret.value = edad;
    //------- Valor Radio Button Sexo ---------
    let edit_sexo = document.getElementsByName("sexo")
    edit_sexo.forEach(radio => {
        if (radio.value === sexo) {
            console.log(radio)
                radio.checked = true;
            }
    });
    let rut_secret = document.getElementById("secretaria_rut");
    rut_secret.value = rut;
    let fono_secret = document.getElementById("secretaria_contacto");
    fono_secret.value = fono;
    //
}
//
function enviar_datos_sec(){
    //
    const token = sessionStorage.getItem('token');
    //
    let id_user = document.getElementById("id_usuario_user_secretaria").value
    let username_secret = document.getElementById("secretaria_username").value
    let primer_nombre_secret = document.getElementById("secretaria_edit_primer_nombre").value
    let segundo_nombre_secret = document.getElementById("secretaria_edit_segundo_nombre").value
    let ap_paterno_secret = document.getElementById("secretaria_edit_ap_paterno").value
    let ap_materno_secret = document.getElementById("secretaria_edit_ap_materno").value
    let email_secret = document.getElementById("secretaria_email").value
    let edad_secret = document.getElementById("secretaria_edad").value
    let edit_pass = document.getElementById("secretaria_edit_password").value.trim();
    console.warn(edit_pass)
    if (!edit_pass) {
        console.warn("El campo está vacío");
        edit_pass = "0"
    } else {
        console.log("Contraseña ingresada:", edit_pass);
    }
    //------- Valor Radio Button Sexo ---------
    let sexo = document.getElementsByName("sexo")
    let valor_radio;
    sexo.forEach(radio => {
        if (radio.checked) {
            valor_radio = radio.value;
        }
    });
    let rut_secret = document.getElementById("secretaria_rut").value
    let fono_secret = document.getElementById("secretaria_contacto").value
    //
    let datos = {
        'id_usuario': id_user,
        'username':username_secret,
        'password': edit_pass,
        'primer_nombre':primer_nombre_secret,
        'segundo_nombre':segundo_nombre_secret,
        'ap_paterno': ap_paterno_secret,
        'ap_materno': ap_materno_secret,
        'email':email_secret,
        'edad':edad_secret,
        'sexo':valor_radio,
        'rut':rut_secret,
        'fono':fono_secret,
    }
    console.log(datos)
    let arr = []
    axios.put(`http://127.0.0.1:8000/secretaria/update_panel_secretaria/${id_user}/`,datos, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        console.warn(response.data);
        console.warn(response.status)
        //
        if (response.status == 200) {
            Swal.fire({
                icon: "success",
                title: "Editado Correctamente",
                text: "Datos editado correctamente",
            });
            console.log(response.data.cerrar_session)
            if (response.data.cerrar_session === 1) {
                // Eliminar sesión
                sessionStorage.clear(); // Si usas sessionStorage
                alert("Debe iniciar Sesión nuevamente")
                window.location.href = 'http://127.0.0.1:5500/login.html';
            }
            //
            let secretarias = response.data.secretarias
            secretarias.forEach(element => {
                console.log(element.username)
                arr.push(element)
            });
            console.warn(arr)
            //
            var table = $('#tabla_dato_secretaria_panel_secretaria').DataTable({
                data: arr,
                columns: [
                    { title: 'ID', data: "id_user", defaultContent: '' },
                    { title: 'Username', data: "username", defaultContent: '' },
                    { title: 'Primer Nombre', data: "primer_nombre", defaultContent: '' },
                    { title: 'Segundo Nombre', data: "segundo_nombre", defaultContent: '' },
                    { title: 'Apellido P.', data: "ap_paterno", defaultContent: '' },
                    { title: 'Apellido M.', data: "ap_materno", defaultContent: '' },
                    { title: 'Email', data: "email", defaultContent: '' },
                    { title: 'Edad', data: "edad", defaultContent: '' },
                    { title: 'Sexo', data: "sexo", defaultContent: '' },
                    { title: 'Contacto', data: "fono", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id_user+'" data-name="'+row.primer_nombre+'" id="btn_editar_info_secret_pan_secre" onclick="editar_secretaria_panel_secre('+row.id_user+', \''+row.username+'\',\''+row.primer_nombre+'\', \''+row.segundo_nombre+'\', \''+row.ap_paterno+'\', \''+row.ap_materno+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\')" class="btn btn-warning btn-sm">Editar</button> ';
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
    axios.get(`http://127.0.0.1:8000/doctor/listar_doctor`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        console.warn(response.data.list_doctor)
        let datos = response.data.list_doctor
        // Recorrer los doctores y organizar su información
        datos.forEach(element => {
            let doctorInfo = {
                id_doctor: element.id_doctor,
                username: element.username,
                primer_nombre: element.primer_nombre,
                segundo_nombre: element.segundo_nombre,
                ap_paterno: element.ap_paterno,
                ap_materno: element.ap_materno,
                email: element.email,
                edad: element.edad,
                sexo: element.sexo,
                rut: element.rut,
                fono: element.fono,
                doctor_uuid: element.doctor_uuid,
                clinicas: element.clinicas.map(clinica => clinica.nombre_clinica).join(", "), // Convertir a string
                especialidades: element.especialidad.map(especialidad => especialidad.nombre_especialidad).join(", ") // Convertir a string
            };
            // Pasamos los datos al array.
            arr.push(doctorInfo);
        });
        console.warn(arr);
        //
        var table = $('#listar_doctor').DataTable({
            data: arr,
            columns: [
                { title: 'ID', data: "id_doctor", defaultContent: '' },
                { title: 'Username', data: "username", defaultContent: '' },
                { title: 'Primer Nombre', data: "primer_nombre", defaultContent: '' },
                { title: 'Segundo Nombre', data: "segundo_nombre", defaultContent: '' },
                { title: 'Apellido P.', data: "ap_paterno", defaultContent: '' },
                { title: 'Apellido M.', data: "ap_materno", defaultContent: '' },
                { title: 'Email', data: "email", defaultContent: '' },
                { title: 'Edad', data: "edad", defaultContent: '' },
                { title: 'Sexo', data: "sexo", defaultContent: '' },
                { title: 'Contacto', data: "fono", defaultContent: '' },
                { title: 'Clinicas', data: "clinicas", defaultContent: '' },
                { title: 'Especialidades', data: "especialidades", defaultContent: '' },
                // { 
                //     title: 'Acciones',
                //     data: null,
                //     responsivePriority: 1,
                //     className: 'no-wrap',
                //     orderable: false,
                //     render: function(data, type, row) {
                //         return `<button type="button" data-id="${row.id_doctor}" id="btn_editar_info_doc"
                //                 onclick="editar_doctor_panel_doc(${row.id_doctor}, '${row.username}','${row.primer_nombre}', '${row.segundo_nombre}', '${row.ap_paterno}','${row.ap_materno}','${row.email}', '${row.edad}', '${row.sexo}', '${row.rut}', '${row.fono}')"
                //                 class="btn btn-warning btn-sm">Editar</button>`;
                //     }
                // }
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
//
function obtener_pac_todo(){
    //
    const username = sessionStorage.getItem('username');
    //
    const token = sessionStorage.getItem('token');
    //
    let arr = []
    //
    axios.get(`http://127.0.0.1:8000/paciente/listar_paciente`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        let datos = response.data.pacientes
        //
        var table = $('#listar_todos_pac_panel_doc').DataTable({
            data: datos,
            columns: [
                { title: 'ID Usuario', data: "id_usuario", defaultContent: '' },
                { title: 'Primer Nombre', data: "primer_nombre", defaultContent: '' },
                { title: 'Segundo Nombre', data: "segundo_nombre", defaultContent: '' },
                { title: 'Ap. Paterno', data: "ap_paterno", defaultContent: '' },
                { title: 'Ap. Materno', data: "ap_materno", defaultContent: '' },
                { title: 'Email', data: "email", defaultContent: '' },
                { title: 'Edad', data: "edad", defaultContent: '' },
                { title: 'Sexo', data: "sexo", defaultContent: '' },
                { title: 'Contacto', data: "fono", defaultContent: '' },
                { title: 'Vivienda', data: "vivienda", defaultContent: '' },
                { title: 'Región', data: "region", defaultContent: '' },
                { title: 'Comuna', data: "comuna", defaultContent: '' },
                { title: 'Num Vivienda', data: "num_vivienda", defaultContent: '' },
                { 
                    title: 'Acciones',
                    data: null,
                    responsivePriority: 1,
                    className: 'no-wrap text-center',
                    orderable: false,
                    render: function(data, type, row) {
                        return `<button type="button" data-id="${row.id_usuario}" id="btn_edit_pac_sec"
                                    onclick="edit_pac_secretaria_panel_sec(\'${row.id_usuario}'\,\'${row.primer_nombre}'\,\'${row.segundo_nombre}'\,\'${row.ap_paterno}'\,\'${row.ap_materno}'\,\'${row.email}'\,\'${row.edad}'\,\'${row.sexo}'\,\'${row.rut}'\,\'${row.fono}'\,\'${row.vivienda}'\,\'${row.region}'\,\'${row.comuna}'\,\'${row.num_vivienda}'\)"
                                    class="btn btn-warning btn-sm">Editar
                                </button>  
                        `;
                    }
                },
                { 
                    title: 'Seguimiento',
                    data: null,
                    responsivePriority: 1,
                    className: 'no-wrap text-center',
                    orderable: false,
                    render: function(data, type, row) {
                        return `<button type="button" data-id="${row.id_usuario}" id="btn_info_pac_doc"
                                    onclick="info_pac_secretaria_panel_sec(\'${row.id_usuario}'\)"
                                    class="btn btn-sm" style='background: #ceebf2; border-color: blue;'><span class="material-symbols-outlined">clinical_notes
                                </span>
                            </button>
                        `;
                    }
                }
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
        //
    })
    .catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
        }
    });
}
//
function edit_pac_secretaria_panel_sec(id_user, primer_nombre,segundo_nombre,ap_paterno,ap_materno,email,edad,sexo,rut,contacto,vivienda,region,comuna,num_vivienda){
    //
    let modal_edit_pac_panel_secretaria = document.getElementById("modal_edit_pac_panel_secretaria")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_edit_pac_panel_secretaria);
    // Abre el modal
    modalInstance.show();
    //
    let id_usuuario_pac = document.getElementById("id_usuario_pac")
    id_usuuario_pac.value = id_user
    let pac_primer_nombre = document.getElementById("edit_secret_paciente_primer_nombre")
    pac_primer_nombre.value = primer_nombre
    let pac_segundo_nombre = document.getElementById("edit_secret_paciente_segundo_nombre")
    pac_segundo_nombre.value = segundo_nombre
    let edit_adm_paciente_ap_paterno= document.getElementById("edit_secret_ap_paterno")
    edit_adm_paciente_ap_paterno.value = ap_paterno
    let edit_adm_paciente_ap_materno= document.getElementById("edit_secret_ap_materno")
    edit_adm_paciente_ap_materno.value = ap_materno
    let edit_adm_paciente_email = document.getElementById("edit_secret_paciente_email")
    edit_adm_paciente_email.value = email
    let edit_adm_paciente_edad = document.getElementById("edit_secret_paciente_edad")
    edit_adm_paciente_edad.value = edad
    let edit_adm_paciente_fono = document.getElementById("edit_secret_paciente_fono")
    edit_adm_paciente_fono.value = contacto
    let edit_adm_paciente_rut = document.getElementById("edit_secret_paciente_rut")
    edit_adm_paciente_rut.value = rut
    let edit_adm_paciente_num_viviendanum_vivienda = document.getElementById("edit_secret_paciente_num_vivienda")
    edit_adm_paciente_num_viviendanum_vivienda.value = num_vivienda
    //---------------------- Vivienda --------------------
    let adm_paciente_tipo_vivienda = document.getElementsByName("edit_secret_paciente_tipo_vivienda")
    adm_paciente_tipo_vivienda.forEach(radio => {
        if (radio.value === vivienda) {
            console.log(radio)
                radio.checked = true;
            }
    });
    //---------------------- Fin Vivienda ----------------
    //---------------------- Sexo --------------------
    let edit_sexo = document.getElementsByName("edit_secret_paciente_sexo")
    edit_sexo.forEach(radio => {
        if (radio.value === sexo) {
            console.log(radio)
                radio.checked = true;
            }
    });
    //---------------------- Fin Sexo ----------------
    //------- Valor Radio Button Sexo ---------
    let edit_region = document.getElementById("edit_pac_region")
    // Iterar sobre las opciones del select
    for (let i = 0; i < edit_region.options.length; i++) {
        let option = edit_region.options[i];
        // Verificar si el texto de la opción es "Valparaiso"
        if (option.text === region) {
            // Seleccionar la opción
            option.selected = true;
            break;
        }
    }
    // Llamamos la funcion para que nos cargue las Comunas una vez seleccionada la Región.
    buscar_ciudad_paciente(1)
    // Comuna
    let edit_comuna = document.getElementById("edit_pac_comuna")
    // edit_comuna
    let option_comuna = edit_comuna.querySelector("option")
    option_comuna.innerText = comuna
    option_comuna.value = comuna
    option_comuna.selected = true
}
//
function edit_panel_sec_paciente(){
    //
    const token = sessionStorage.getItem('token');
    let id = document.getElementById("id_usuario_pac").value
    let pac_primer_nombre = document.getElementById("edit_secret_paciente_primer_nombre").value
    let pac_segundo_nombre = document.getElementById("edit_secret_paciente_segundo_nombre").value
    let edit_adm_paciente_ap_paterno= document.getElementById("edit_secret_ap_paterno").value
    let edit_adm_paciente_ap_materno= document.getElementById("edit_secret_ap_materno").value
    let edit_adm_paciente_email = document.getElementById("edit_secret_paciente_email").value
    let edit_adm_paciente_edad = document.getElementById("edit_secret_paciente_edad").value
    let edit_adm_paciente_fono = document.getElementById("edit_secret_paciente_fono").value
    let edit_adm_paciente_rut = document.getElementById("edit_secret_paciente_rut").value
    //---------------------- Vivienda --------------------
    let adm_paciente_num_vivienda = document.getElementById("edit_secret_paciente_num_vivienda").value
    //------ Fin Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Comuna.
    let comuna = document.getElementById("edit_pac_comuna").value
    console.log(comuna)
    //------- Valor Radio Button Vivienda---------
    let vivienda = document.getElementsByName("edit_secret_paciente_tipo_vivienda")
    let valor_vivienda;
    vivienda.forEach(radio => {
        if (radio.checked) {
            valor_vivienda = radio.value;
        }
    });
    //---------------------- Sexo --------------------
    //------- Valor Radio Button Sexo ---------
    let sexo = document.getElementsByName("edit_secret_paciente_sexo")
    let valor_radio;
    sexo.forEach(radio => {
        if (radio.checked) {
            valor_radio = radio.value;
        }
    });
    console.log(valor_radio)
    //------- Fin Valor Radio Button Sexo --------
    //---------------------- Fin Sexo ----------------
    //------- Valor Radio Button Sexo ---------
    //-------------------- Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Región.
    let id_region = document.getElementById("edit_pac_region").value
    let region = document.getElementById("region_" + id_region).getAttribute("data-region")
    console.log(region)
    //
    let datos = {
        'id_usuario': id,
        'primer_nombre': pac_primer_nombre,
        'segundo_nombre': pac_segundo_nombre,
        'ap_paterno': edit_adm_paciente_ap_paterno,
        'ap_materno': edit_adm_paciente_ap_materno,
        'email': edit_adm_paciente_email,
        'edad': edit_adm_paciente_edad,
        'fono': edit_adm_paciente_fono,
        'rut': edit_adm_paciente_rut,
        'vivienda': valor_vivienda,
        'comuna': comuna,
        'num_vivienda': adm_paciente_num_vivienda,
        'sexo': valor_radio,
        'region': region,
    }
    console.warn(datos)
    //
    let arr = []
    axios.put(`http://127.0.0.1:8000/paciente/update_paciente_panel_secretaria/${id}/`,datos, {
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
                title: "Paciente Editado Correctamente",
                text: "Paciente editado",
            });
            //console.warn(response.data.grupos[0])
            let paciente = response.data.pacientes
            paciente.forEach(element => {
                console.log(element.username)
                arr.push(element)
            });
            console.warn(arr)
            //
            var table = $('#listar_todos_pac_panel_doc').DataTable({
                responsive: true,
                data: arr,
                columns: [
                    { title: 'ID Usuario', data: "id_usuario", defaultContent: '' },
                    { title: 'Primer Nombre', data: "primer_nombre", defaultContent: '' },
                    { title: 'Segundo Nombre', data: "segundo_nombre", defaultContent: '' },
                    { title: 'Ap. Paterno', data: "ap_paterno", defaultContent: '' },
                    { title: 'Ap. Materno', data: "ap_materno", defaultContent: '' },
                    { title: 'Email', data: "email", defaultContent: '' },
                    { title: 'Edad', data: "edad", defaultContent: '' },
                    { title: 'Sexo', data: "sexo", defaultContent: '' },
                    { title: 'Contacto', data: "fono", defaultContent: '' },
                    { title: 'Vivienda', data: "vivienda", defaultContent: '' },
                    { title: 'Región', data: "region", defaultContent: '' },
                    { title: 'Comuna', data: "comuna", defaultContent: '' },
                    { title: 'Num Vivienda', data: "num_vivienda", defaultContent: '' },
                    { 
                        title: 'Acciones',
                        data: null,
                        responsivePriority: 1,
                        className: 'no-wrap text-center',
                        orderable: false,
                        render: function(data, type, row) {
                            return `<button type="button" data-id="${row.id_usuario}" id="btn_edit_pac_sec"
                                        onclick="edit_pac_secretaria_panel_sec(\'${row.id_usuario}'\,\'${row.primer_nombre}'\,\'${row.segundo_nombre}'\,\'${row.ap_paterno}'\,\'${row.ap_materno}'\,\'${row.email}'\,\'${row.edad}'\,\'${row.sexo}'\,\'${row.rut}'\,\'${row.fono}'\,\'${row.vivienda}'\,\'${row.region}'\,\'${row.comuna}'\,\'${row.num_vivienda}'\)"
                                        class="btn btn-warning btn-sm">Editar
                                </button>
                            `;
                        }
                    },
                    { 
                        title: 'Seguimiento',
                        data: null,
                        responsivePriority: 1,
                        className: 'no-wrap text-center',
                        orderable: false,
                        render: function(data, type, row) {
                            return `<button type="button" data-id="${row.id_usuario}" id="btn_info_pac_doc"
                                        onclick="info_pac_secretaria_panel_sec(\'${row.id_usuario}'\)"
                                        class="btn btn-sm" style='background: #ceebf2; border-color: blue;'><span class="material-symbols-outlined">clinical_notes
                                    </span>
                                </button>
                            `;
                        }
                    }
                ],
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
//
function info_pac_secretaria_panel_sec(id){
    //
    let modal_info_pac_secret = document.getElementById("modal_info_pac_secret")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_info_pac_secret);
    // Abre el modal
    modalInstance.show();
    //
    const username = sessionStorage.getItem('username');
    //
    const token = sessionStorage.getItem('token');
    //
    let arr = []
    axios.get(`http://127.0.0.1:8000/reserva/historial_cli_pac_panel_secretaria/${id}`, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        console.log(typeof(response.data.reserva))
        let datos = response.data.reserva
        datos.forEach(element => {
            arr.push(element)
        });
        //
        if ($.fn.DataTable.isDataTable('#tabla_hist_pac_panel_secre')) {
            $('#tabla_hist_pac_panel_secre').DataTable().destroy();
            $('#tabla_hist_pac_panel_secre').empty(); // Limpia la tabla antes de inicializarla nuevamente
        }
        
        var table = $('#tabla_hist_pac_panel_secre').DataTable({
            data: arr,
            columns: [
                { title: 'ID', data: "id_reserva", defaultContent: '' },
                { 
                    title: 'Fecha Reserva', 
                    data: "fecha_reserva", 
                    defaultContent: '',
                    render: function(data, type, row) {
                        if (!data) return ''; // Si no hay fecha, retorna vacío
                        let fecha = new Date(data);
                        let dia = fecha.getDate().toString().padStart(2, '0');
                        let mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Meses en JavaScript empiezan desde 0
                        let anio = fecha.getFullYear();
                        return `${dia}-${mes}-${anio}`;
                    }
                },
                { title: 'Hora Inicio', data: "hora_inicio", defaultContent: '' },
                { title: 'Hora Término', data: "hora_termino", defaultContent: '' },
                { title: 'Especialidad', data: "especialidad", defaultContent: '' },
                { title: 'Nombre Doctor M.', data: "nombre_doctor", defaultContent: '' },
                { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                { 
                    title: 'Reserva Cerrada', 
                    data: "reserva_cerrada", 
                    defaultContent: '',
                    render: function(data, type, row) {
                        return data && data.toLowerCase() === 'cerrado' ? 'Cerrado' : 'No cerrado';
                    }
                },
                { title: 'Cod. Reserva', data: "cod_reserva", defaultContent: '' },
                { 
                    title: 'Acciones', 
                    data: null,
                    responsivePriority: 1, // Prioridad máxima (no se oculta)
                    className: 'no-wrap', // Clase para evitar saltos de línea
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" data-id="'+row.id_reserva+'" data-name="'+row.primer_nombre+'" id="btn_delete_reserva_secret_panel_secre" onclick="eliminar_reserva(\''+row.id_reserva+'\', \''+row.especialidad+'\')" class="btn btn-danger btn-sm">Eliminar</button> ';
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
//
function listar_secretarias(){
    //
    const username = sessionStorage.getItem('username');
    //
    const token = sessionStorage.getItem('token');
    //
    let arr = []
    axios.get(`http://127.0.0.1:8000/secretaria/listar_secretarias_panel_secretaria`, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        console.log(typeof(response.data.secretarias))
        let datos = response.data.secretarias
        datos.forEach(element => {
            arr.push(element)
        });
        //
        if ($.fn.DataTable.isDataTable('#tabla_secretaria_panel_secretaria')) {
            $('#tabla_secretaria_panel_secretaria').DataTable().destroy();
            $('#tabla_secretaria_panel_secretaria').empty(); // Limpia la tabla antes de inicializarla nuevamente
        }
        
        var table = $('#tabla_secretaria_panel_secretaria').DataTable({
            data: arr,
            columns: [
                { title: 'ID', data: "id_user", defaultContent: '' },
                { title: 'Username', data: "username", defaultContent: '' },
                { title: 'Primer Nombre', data: "primer_nombre", defaultContent: '' },
                { title: 'Segundo Nombre', data: "segundo_nombre", defaultContent: '' },
                { title: 'Apellido P.', data: "ap_paterno", defaultContent: '' },
                { title: 'Apellido M.', data: "ap_materno", defaultContent: '' },
                { title: 'Email', data: "email", defaultContent: '' },
                { title: 'Edad', data: "edad", defaultContent: '' },
                { title: 'Sexo', data: "sexo", defaultContent: '' },
                // { 
                //     title: 'Acciones', 
                //     data: null,
                //     responsivePriority: 1, // Prioridad máxima (no se oculta)
                //     className: 'no-wrap', // Clase para evitar saltos de línea
                //     orderable: false,
                //     render: function(data, type, row) {
                //         return '<button type="button" data-id="'+row.id_user+'" id="btn_editar_info_secretaria" onclick="editar_secretaria_panel_secre('+row.id_user+', \''+row.username+'\',\''+row.primer_nombre+'\', \''+row.segundo_nombre+'\', \''+row.ap_paterno+'\', \''+row.ap_materno+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\')" class="btn btn-warning btn-sm">Editar</button> ';
                //     }
                // },
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
//
function buscar_ciudad(){
    //
    let opcion = document.getElementById("region").value
    //
    if (opcion == 1) {
        let ciudades_1 = new Array("Huara", "Camiña", "Colchane", "Pica", "Pozo Almonte", "Alto Hospicio", "Iquique");
        let comuna = document.getElementById("comuna")
        for (let index = 0; index < ciudades_1.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 1) {
                    o.remove()
                }
            });
            let elegir_comuna = document.createElement("option")
            elegir_comuna. id = "1"
            elegir_comuna.value = ciudades_1[index]
            elegir_comuna.innerText = ciudades_1[index]
            comuna.appendChild(elegir_comuna)
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 2) {
                    o.remove()
                }
                //o.remove()
            });
        }
    }
    if(opcion == 2){
        let ciudades_2 = new Array("Antofagasta","Mejillones","Sierra Gorda","Taltal","Calama","Ollagüe","San Pedro de Atacama","María Elena","Tocopilla");
        //
        for (let index = 0; index < ciudades_2.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 2) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_2[index];
            elegir_comuna. id = "2"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
        
    }
    if(opcion == 3){
        let ciudades_3 = new Array("Chañaral", "Diego de Almagro", "Caldera", "Copiapó", "Tierra Amarilla", "Huasco", "Freirina", "Vallenar","Alto del Carmen");
        //
        for (let index = 0; index < ciudades_3.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 3) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_3[index];
            elegir_comuna. id = "3"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
        
    }
    //
    if(opcion == 4){
        let ciudades_4 = new Array("Canela", "Illapel", "Los Vilos", "Salamanca", "Andacollo", "Coquimbo", "La Higuera", "La Serena", "Paihuano", "Vicuña", "Combarbalá", "Monte Patria", "Ovalle", "Punitaqui", "Río Hurtado");
        //
        for (let index = 0; index < ciudades_4.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 4) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_4[index];
            elegir_comuna. id = "4"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
        
    }
    //
    if(opcion == 5){
        let ciudades_5 = new Array("Hanga Roa", "Calle Larga", "Los Andes", "Rinconada", "San Esteban", "Cabildo", "La Ligua", "Papudo", "Petorca", "Zapallar", "Hijuelas", "La Calera", "La Cruz"," Nogales", "Quillota", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "San Antonio", "Santo Domingo", "Catemu", "Llay-Llay", "Panquehue", "Putaendo", "San Felipe", "Santa María", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Valparaíso", "Viña del Mar", "Limache", "Olmué", "Quilpué","Villa Alemana");
        //
        for (let index = 0; index < ciudades_5.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 5) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_5[index];
            elegir_comuna. id = "5"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
        
    }
    //
    if(opcion == 6){
        let ciudades_6 = new Array("Codegua","Coinco","Coltauco","Doñihue","Graneros","Las Cabras","Machalí","Malloa","Mostazal","Olivar","Peumo","Pichidegua","Quinta de Tilcoco","Rancagua","Rengo","Requínoa","San Vicente de Tagua Tagua","La Estrella","Litueche","Marchigüe","Navidad","Paredones","Pichilemu","Chépica","Chimbarongo","Lolol","Nancagua","Palmilla","Peralillo","Placilla","Pumanque","San Fernando","Santa Cruz");
        //
        for (let index = 0; index < ciudades_6.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 6) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_6[index];
            elegir_comuna. id = "6"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
        
    }
    //
    if(opcion == 7){
        let ciudades_7 = new Array("Cauquenes","Chanco","Pelluhue","Curicó","Hualañé","Licantén","Molina","Rauco","Romeral","Sagrada Familia","Teno","Vichuquén","Linares","Colbún","Longaví","Parral","Retiro","San Javier","Villa Alegre","Yerbas Buenas","Talca","Constitución","Curepto","Empedrado","Maule","Pelarco","Pencahue","Río Claro","San Clemente","San Rafael");
        //
        for (let index = 0; index < ciudades_7.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 7) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_7[index];
            elegir_comuna. id = "7"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 8){
        let ciudades_8 = new Array("Arauco","Cañete","Contulmo","Curanilahue","Lebu","Los Álamos","Tirúa","Alto Biobío","Antuco","Cabrero","Laja","Los Ángeles","Mulchén","Nacimiento","Negrete","Quilaco","Quilleco","San Rosendo","Santa Bárbara","Tucapel","Yumbel","Concepción","Coronel","Chiguayante","Florida","Hualpén","Hualqui","Lota","Penco","San Pedro de la Paz","Santa Juana","Talcahuano","Tomé");
        //
        for (let index = 0; index < ciudades_8.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 8) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_8[index];
            elegir_comuna. id = "8"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 9){
        let ciudades_9 = new Array("Temuco","Carahue","Cholchol","Cunco","Curacautín","Freire","Galvarino","Gorbea","Lautaro","Loncoche","Melipeuco","Nueva Imperial","Padre Las Casas","Perquenco","Pitrufquén","Pucón","Saavedra","Teodoro Schmidt","Toltén","Vilcún","VillarricaTemuco","Carahue","Cholchol","Cunco","Curacautín","Freire","Galvarino","Gorbea","Lautaro","Loncoche","Melipeuco","Nueva Imperial","Padre Las Casas","Perquenco","Pitrufquén","Pucón","Saavedra","Teodoro Schmidt","Toltén","Vilcún","Villarrica");
        //
        for (let index = 0; index < ciudades_9.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 9) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_9[index];
            elegir_comuna. id = "9"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 10){
        let ciudades_10 = new Array("Ancud","Castro","Chonchi","Curaco de Vélez","Dalcahue","Puqueldón","Queilén","Quemchi","Quellón","Quinchao","Puerto Montt","Puerto Varas","Cochamó","Calbuco","Maullín","Los Muermos","Fresia","Llanquihue","Frutillar","Osorno","Puerto Octay","Purranque","Puyehue","Río Negro","San Juan de la Costa","San Pablo","Chaitén","Futaleufú","Hualaihué","Palena");
        //
        for (let index = 0; index < ciudades_10.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 10) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_10[index];
            elegir_comuna. id = "10"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 11){
        let ciudades_11 = new Array("Coyhaique","Lago Verde","Aysén","Cisnes","Guaitecas (incluye las islas Guaitecas)","Cochamó","Chile Chico","Río Ibáñez","Cochrane","Tortel");
        //
        for (let index = 0; index < ciudades_11.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 11) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_11[index];
            elegir_comuna. id = "11"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 12){
        let ciudades_12 = new Array("Punta Arenas","Laguna Blanca","Río Verde","San Gregorio","Natales","Torres del Paine","Porvenir","Primavera","Cabo de Hornos","Antártica");
        //
        for (let index = 0; index < ciudades_12.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 12) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_12[index];
            elegir_comuna. id = "12"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
    }
    //
    if(opcion == 13){
        let ciudades_13 = new Array("Alto Jahuel","Bajos de San Agustin","Batuco","Buin","Cerrillos","Cerro Navia","Colina","Conchali","Curacavi","El Bosque","El Monte","Estacion Central","Hospital","Huechuraba","Independencia","Isla de Maipo","La Cisterna","La Florida","La Granja","La Islita","La Pintana","La Reina","Lampa","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipú","Melipilla","Ñuñoa","Padre Hurtado","Paine","Pedro Aguirre Cerda","Penaflor","Penalolen","Pirque","Providencia","Pudahuel","Puente Alto","Quilicura","Quinta Normal","Recoleta","Renca","San Bernardo","San Joaquin","San Jose de Maipo","San Miguel","San Ramon","Santiago","Talagante","Tiltil","Vitacura");
        //
        for (let index = 0; index < ciudades_13.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 13) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_13[index];
            elegir_comuna. id = "13"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
    }
    if(opcion == 14){
        let ciudades_13 = new Array("Valdivia","Corral","Lanco","Los Lagos","Máfil","Mariquina","Paillaco","Panguipulli","La Unión","Futrono","Lago Ranco","Río Bueno");
        //
        for (let index = 0; index < ciudades_13.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 14) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_13[index];
            elegir_comuna. id = "14"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
    }
    if(opcion == 15){
        let ciudades_13 = new Array("Arica","Camarones","Putre","General Lagos");
        //
        for (let index = 0; index < ciudades_13.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 15) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_13[index];
            elegir_comuna. id = "15"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
    }
    //Listo Funcionando.
    if(opcion == 16){
        let ciudades_16 = new Array("Cobquecura","Coelemu","Ninhue","Portezuelo","Quirihue","Ránquil","Trehuaco","Bulnes","Chillán Viejo","Chillán","El Carmen","Pemuco","Pinto","Quillón","San Ignacio","Yungay","Coihueco","Ñiquén","San Carlos","San Fabián","San Nicolás");
        //
        for (let index = 0; index < ciudades_16.length; index++) {
            let comuna = document.getElementById("comuna")
            let comuna_s = comuna.querySelectorAll("option")
            comuna_s.forEach(o =>{
                //console.log(o.id)
                if (o.id != 16) {
                    o.remove()
                }
                //o.remove()
            });
            let elegir_comuna = document.createElement("option")
            const element = ciudades_16[index];
            elegir_comuna. id = "16"
            elegir_comuna.value = element
            elegir_comuna.innerText = element
            comuna.appendChild(elegir_comuna)
        }
    }
}
//
function agregar_paciente(){
    //
    let modal_nuevo_pac_panel_secret = document.getElementById("modal_nuevo_pac_panel_secret")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_nuevo_pac_panel_secret);
    // Abre el modal
    modalInstance.show();
    // Llamamos al método de las comunas por regiones.
    buscar_ciudad()
}
//
function secret_registrar_paciente(){
    const token = sessionStorage.getItem('token');
    //
    let username = document.getElementById("secret_paciente_username").value
    let password = document.getElementById("paciente_password").value
    let adm_paciente_primer_nombre = document.getElementById("secret_paciente_primer_nombre").value
    let adm_paciente_segundo_nombre = document.getElementById("secret_paciente_segundo_nombre").value
    let adm_paciente_ap_paterno = document.getElementById("secret_paciente_ap_paterno").value
    let adm_paciente_ap_materno = document.getElementById("secret_paciente_ap_materno").value
    let email = document.getElementById("secret_paciente_email").value
    let edad = document.getElementById("secret_paciente_edad").value
    let fono = document.getElementById("secret_paciente_fono").value
    let rut = document.getElementById("secret_paciente_rut").value
    let num_vivienda = document.getElementById("secret_paciente_num_vivienda").value
    //------- Valor Radio Button Sexo ---------
    let sexo = document.getElementsByName("secret_paciente_sexo")
    let valor_radio;
    sexo.forEach(radio => {
        if (radio.checked) {
            valor_radio = radio.value;
        }
    });
    //------- Fin Valor Radio Button Sexo ---------
    //------- Valor Radio Button Vivienda---------
    let vivienda = document.getElementsByName("secret_paciente_tipo_vivienda")
    let valor_vivienda;
    vivienda.forEach(radio => {
        if (radio.checked) {
            valor_vivienda = radio.value;
        }
    });
    //------- Fin Valor Radio Button Vivienda ---------
    //-------------------- Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Región.
    let id_region = document.getElementById("region").value
    console.log(id_region)
    let region = null
    if (id_region == 0) {
        Swal.fire({
                icon: "error",
                title: "Ooops...",
                text: "Falta la selección de la Región",
        });
    }
    if (id_region != 0) {
        region = document.getElementById("region_" + id_region).getAttribute("data-region")
    }
    //------ Fin Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Comuna.
    let comuna = document.getElementById("comuna").value
    let arr = []
    //------ Fin Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Comuna.
    //-----  Creamos el array de bjetos. -------------
    let datos = {
        'username': username ,
        'password': password ,
        'primer_nombre': adm_paciente_primer_nombre,
        'segundo_nombre': adm_paciente_segundo_nombre,
        'ap_paterno': adm_paciente_ap_paterno,
        'ap_materno': adm_paciente_ap_materno ,
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
    axios.post(`http://127.0.0.1:8000/paciente/crear_paciente`,datos, {
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
                title: "Paciente Registrado  Correctamente",
                text: "paciente registrado",
            });
            //console.warn(response.data.grupos[0])
            let paciente = response.data.pacientes
            paciente.forEach(element => {
                console.log(element.username)
                arr.push(element)
            });
            console.warn(arr)
            //
            var table = $('#tabla_pac').DataTable({
                responsive: true,
                data: arr,
                columns: [
                    { title: 'ID', data: "id_usuario", defaultContent: '' },
                    { title: 'Username', data: "username", defaultContent: '' },
                    { title: 'Email', data: "email", defaultContent: '' },
                    { title: 'Primer Nombre', data: "primer_nombre", defaultContent: '' },
                    { title: 'Segundo Nombre', data: "segundo_nombre", defaultContent: '' },
                    { title: 'Ap Paterno', data: "ap_paterno", defaultContent: '' },
                    { title: 'Ap Materno', data: "ap_materno", defaultContent: '' },
                    { title: 'Edad', data: "edad", defaultContent: '' },
                    { title: 'Sexo', data: "sexo", defaultContent: '' },
                    { title: 'Contacto', data: "fono", defaultContent: '' },
                    { title: 'Region', data: "region", defaultContent: '' },
                    { title: 'Comuna', data: "comuna", defaultContent: '' },
                    { title: 'Vivienda', data: "vivienda", defaultContent: '' },
                    { title: 'num_vivienda', data: "num_vivienda", defaultContent: '' },
                    { title: 'Cod. Usuario', data: "paciente_uuid", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return  '<button type="button" data-id="'+row.id_usuario+'"  id="btn_editar_pac_adm" onclick="editar_paciente('+row.id_usuario+', \''+row.username+'\', \''+row.email+'\', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\', \''+row.ap_paterno+'\', \''+row.ap_materno+'\',\''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\', \''+row.region+'\', \''+row.comuna+'\', \''+row.vivienda+'\', \''+row.num_vivienda+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id_usuario+'" id="btn_borrar_pac_adm" onclick="borrar_user_paciente('+row.id_usuario+', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\', \''+row.ap_paterno+'\', \''+row.ap_materno+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ' +
                                    '<button type="button" data-id="'+row.id_usuario+'" id="btn_historial_pac_adm" onclick="historial_user_paciente('+row.id_usuario+', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\', \''+row.ap_paterno+'\', \''+row.ap_materno+'\')" class="btn btn-info btn-sm ">Historial Citas</button> ';
                        }
                    },
                ],
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
//
// 
function paciente_nombre_clinica_paciente_registrado(){
    //
    let paciente_registrado = document.getElementById("paciente_registrado")
    //
    paciente_registrado.innerHTML = "";
    // Evitar múltiples peticiones si ya hay datos
    if (paciente_registrado.options.length > 1) return;
    
    //
    const token = sessionStorage.getItem('token');
    axios.get(`http://127.0.0.1:8000/paciente/listar_paciente`, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        const esp = response.data.pacientes;
        //
        esp.forEach(element => {
            console.log(element)
            // Crear un NUEVO elemento option en cada iteración
            const elegir_especialidad = document.createElement("option");
            elegir_especialidad.value = element.id_usuario; // Usar ID como valor (mejor práctica)
            elegir_especialidad.textContent = element.primer_nombre + ' ' + element.segundo_nombre + ' ' + element.ap_paterno + ' ' + element.ap_materno;
            paciente_registrado.appendChild(elegir_especialidad);
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
//
// Seleccionar especialidad en el panel de adm con paciente registrado.
function select_esp_adm_panel_pac_registrado(){
    //
    let select_especialidad = document.getElementById("reserva_adm_pac_registrado_especialidad")
    select_especialidad.innerHTML = '<option selected>Seleccionar Especialidad</option>';
    //let index_doctor = document.getElementById("index_doctor");
    // Reiniciar el select de "Doctor" a su estado por defecto
    //index_doctor.innerHTML = '<option selected>Doctor</option>';
    // Evitar múltiples peticiones si ya hay datos
    if (select_especialidad.options.length > 1) return;
    //
    let arr =[]
    //
    axios.get('http://127.0.0.1:8000/especialidad/listar_esp_index',{
    })
    .then(function (response) {
        // 
        const esp = response.data.especialidad;
        //
        esp.forEach(element => {
            // Crear un NUEVO elemento option en cada iteración
            const elegir_especialidad = document.createElement("option");
            elegir_especialidad.value = element.id; // Usar ID como valor (mejor práctica)
            elegir_especialidad.setAttribute("data-esp", element.nombre_especialidad)
            elegir_especialidad.setAttribute("data-id", element.id)
            elegir_especialidad.textContent = element.nombre_especialidad;
            select_especialidad.appendChild(elegir_especialidad);
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
//
//
function valor_select_esp_adm_pac_registrado(){
    //
    const token = sessionStorage.getItem('token');
    //
    let select_adm_com_clin_pac = document.getElementById("select_adm_com_clin_pac_registrado").value
    console.log(select_adm_com_clin_pac)
    let select_especialidad = document.getElementById("reserva_adm_pac_registrado_especialidad").value
    console.log(select_especialidad)
    let select_adm_esp_pac = document.getElementById("select_adm_esp_pac_registrado");
    // // Reiniciar el select de "Doctor" a su estado por defecto
    select_adm_esp_pac.innerHTML = '<option selected>Doctor</option>';
    // // Evitar múltiples peticiones si ya hay datos
    if (select_adm_esp_pac.options.length > 1) return;
    // //
    let arr =[]
    let datos = {
        'id_clinica': select_adm_com_clin_pac,
        'id_especialidad': select_especialidad,
    }
    console.warn(datos)
    //
    axios.get(`http://127.0.0.1:8000/doctor/esp_doc_list_reserva_panel_adm`, {
        params: {
            id_clinica: select_adm_com_clin_pac,
            id_especialidad: select_especialidad
        },
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        const esp = response.data.doctores;
        //
        esp.forEach(element => {
            console.log(element)
            // Crear un NUEVO elemento option en cada iteración
            const elegir_especialidad = document.createElement("option");
            elegir_especialidad.value = element.id_doc_user; // Usar ID como valor (mejor práctica)
            elegir_especialidad.textContent = element.primer_nombre + ' ' + element.segundo_nombre + ' ' + element.ap_paterno+ ' ' + element.ap_materno;
            select_adm_esp_pac.appendChild(elegir_especialidad);
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
//
function comuna_clinica_paciente_registrado(){
    let select_comuna = document.getElementById("select_adm_com_clin_pac_registrado")
    console.log(select_comuna)
    // // Reiniciar el select de "Doctor" a su estado por defecto
    select_comuna.innerHTML = '<option selected>Comuna</option>';
    // // Evitar múltiples peticiones si ya hay datos
    if (select_comuna.options.length > 1) return;
    // //
    let arr =[]
    const token = sessionStorage.getItem('token');
    axios.get('http://127.0.0.1:8000/clinica/listar_clinica_adm',{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        //console.warn(response.data.grupos[0])
        let list_clinica = response.data.list_clinica
        //
        //
        list_clinica.forEach(element => {
            // Crear un NUEVO elemento option en cada iteración
            const elegir_especialidad = document.createElement("option");
            elegir_especialidad.value = element.id; // Usar ID como valor (mejor práctica)
            elegir_especialidad.textContent = element.nombre_clinica;
            elegir_especialidad.setAttribute("data-comuna", element.comuna_clinica)
            elegir_especialidad.setAttribute("data-direccion", element.direccion_clinica)
            select_comuna.appendChild(elegir_especialidad);
        });
    })
    .catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
            if (error.response.data.error == 1) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No existe el grupo!",
                });
            }
        }
    });
}
//
var calendar;
// Botón para generar la reserva de un paciente REGISTRADO.
function reserva_calendar_pac_registrado(){
    //
    let select_adm_com_clin_pac = document.getElementById("select_adm_com_clin_pac_registrado").value
    console.log(select_adm_com_clin_pac)
    let select_especialidad = document.getElementById("reserva_adm_pac_registrado_especialidad").value
    console.log(select_especialidad)
    let select_adm_esp_pac = document.getElementById("select_adm_esp_pac_registrado").value;
    console.log(select_adm_esp_pac)
    let id_usuario = document.getElementById("paciente_registrado").value
    console.log(id_usuario)
    if (select_adm_com_clin_pac == 0 || select_especialidad == 0 || select_adm_esp_pac == 0 || id_usuario == 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Faltan seleccionar campos",
        });
    }else{
        //
        let datos = {
            'id_clinica': select_adm_com_clin_pac,
            'id_especialidad': select_especialidad,
            'id_usuario_doctor': select_adm_esp_pac,
            'id_usuario': id_usuario
        }
        console.log(datos)
        // Full Callendar.
        let request_calendar = `http://127.0.0.1:8000/paciente/reserva_paciente_registrado`
        //let request_calendar = '../../JS/events.json'
        var calendarEl = document.getElementById('calendar_pac_registrado');
        calendar = new FullCalendar.Calendar(calendarEl, {
            // Agregamos el idioma Español.
            locale: 'es',
            //initialView: 'dayGridMonth',
            initialView: 'timeGridWeek', // Vista inicial con horas
            slotDuration: '01:00:00', // Duración de los intervalos (30 minutos)
            slotMinTime: '08:00:00', // Mostrar desde las 8:00 AM
            slotMaxTime: '23:00:00', // Mostrar hasta las 8:00 PM
            // validRange: {
            //     start: new Date().toLocaleDateString('en-CA') // Formato YYYY-MM-DD en la zona horaria local
            // },
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            weekends: true,
            // Agregamos los eventos.
            events: function(info, successCallback, failureCallback){
                fetch(request_calendar, {
                    method: 'POST', // Cambiamos el método a POST
                    headers: {
                        'Content-Type': 'application/json', // Indicamos que estamos enviando JSON
                    },
                    body: JSON.stringify(datos) // Convertimos el objeto "datos" a una cadena JSON y lo enviamos en el cuerpo
                })
                .then(function(response) {
                    if (!response.ok) {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Faltan seleccionar campos",
                        });
                        throw new Error('Error en la respuesta del servidor');
                    }
                    return response.json(); // Procesa la respuesta como JSON
                })
                .then(function(data){
                    console.warn(data.pacientes)
                    //console.warn(data.pacientes[0]["title"]); // Aquí ves la data que llega desde el backend
                    // Transforma los datos recibidos en el formato esperado por FullCalendar
                    let events = data.pacientes.map(paciente => ({
                        title: `${paciente.title}`,
                        start: `${paciente.start}`, // Fecha y hora de inicio
                        end: `${paciente.end}`, // Fecha y hora de fin
                        reserva_uuid: `${paciente.reserva_uuid}`,
                        nombre_paciente: `${paciente.nombre_paciente}`,
                    }));
                    console.log(events)
                    successCallback(events)
                })
                .catch(function(error){
                    failureCallback(error)
                })
            },
            // Hacer click en un evento.
            eventClick: function(clickInfo) {
                clickInfo.jsEvent.preventDefault();
                // Extraemos la información del evento al hacer clic
                let eventTitle = clickInfo.event.title;
                let eventStart = clickInfo.event.start.toLocaleString('es-CL');
                let eventEnd = clickInfo.event.end.toLocaleString('es-CL');
                let eventUuid = clickInfo.event.extendedProps.reserva_uuid;
                let paciente_nombre = clickInfo.event.extendedProps.nombre_paciente;
                //
                moda_mostrar_informacion_cita_calendar(eventTitle, paciente_nombre, eventStart, eventEnd, eventUuid)
                // Swal.fire({
                //     title: "Info Reserva",
                //     text: "Especialidad: " + eventTitle + " - " + "Cod. Reserva: " + eventUuid + " - " + "Nombre Paciente: " + paciente_nombre,
                //     icon: "info",
                //     showConfirmButton: false,
                //     focusConfirm: false
                // });
            },
            // Escuchador de eventos para clic en una hora
            dateClick: function(info) {
                var actual = new Date();
                if (info.date >= actual) {
                    // Obtén el elemento correspondiente a la hora clicada
                    const slotElements = document.querySelectorAll('.fc-timegrid-slot');
                    let fechaFormateada = info.dateStr.toLocaleString('es-CL', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                    });
                    abrir_modal_nueva_cita_pa_registrado(fechaFormateada)
                    
                }
            },
            // Traemos todos los eventos disponibles.
            eventContent: function(info) {
                return {
                    html: `
                        <div>
                            <strong>${info.event.title}</strong>
                            <div>${info.event.start.toLocaleTimeString()} - ${info.event.end.toLocaleTimeString()}</div>
                            <div>${info.event.end.toLocaleTimeString()} - ${info.event.end.toLocaleTimeString()}</div>
                        </div>
                    `
                };
            },
            // Evento de Mouse.
            eventMouseEnter: function(mouseEnterInfo){
                // Elemento Visible.
                let el = mouseEnterInfo.el
                el.classList.add("relative")
                //
                let newEl = document.createElement("div")
                let newElTitle = mouseEnterInfo.event.title
                let newElLocation = mouseEnterInfo.event.start
                let newEluuid = mouseEnterInfo.event.extendedProps.reserva_uuid;
                newEl.innerHTML = `
                    <div
                        class="fc-hoverable-event"
                        style="position: absolute; bottom: 100%; left: 0; width: 300px; height: auto;
                        background-color: white; z-index: 50; border: 1px solid #e2e8f0; border-radius: 0.375rem;
                        padding: 0.75rem; font-size: 14px; font-family: 'Inter', sans-serif; cursor: pointer;"
                        >
                        <div>${newEluuid}</div>
                        <strong>${newElTitle}</strong>
                        <div>${newElLocation}</div>
                    </div>
                `
                el.after(newEl)
            },
            // Método para ocultar la info una vez pasado el mouse.
            eventMouseLeave: function(mouseLeaveInfo){
                // Nosmuestra las clases que tenemos.
                console.warn(mouseLeaveInfo)
                // Obtenemos la clase del elementos que creamos arriba.
                let el = document.querySelector(".fc-hoverable-event").remove()
            },
            dayCellContent: function(dayCellContent) {
                let today = new Date();
                today.setHours(0, 0, 0, 0); // Ignorar la hora
                let cellDate = new Date(dayCellContent.date);
                cellDate.setHours(0, 0, 0, 0);
                ///console.log(cellDate)
                console.log(today)
                // Solo cambia el color pero permite eventos
                if (cellDate < today) {
                    return {
                        html: `<div style="color: gray;">${cellDate.getDate()}</div>`
                    };
                }
            },
        });
        calendar.render();
    }
}
//
function moda_mostrar_informacion_cita_calendar(eventTitle, paciente_nombre, eventStart, eventEnd, eventUuid){
    //
    let modal_info_full_calendar = document.getElementById("modal_info_full_calendar")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_info_full_calendar);
    // Abre el modal
    modalInstance.show();
    let info_nombre_paciente_registrado = document.getElementById("info_nombre_paciente_registrado")
    info_nombre_paciente_registrado.readOnly = true;
    info_nombre_paciente_registrado.value = paciente_nombre
    let info_especialidad_paciente_Registrado = document.getElementById("info_especialidad_paciente_Registrado")
    info_especialidad_paciente_Registrado.readOnly = true;
    info_especialidad_paciente_Registrado.value = eventTitle
    let cod_reserva_paciente_registrado = document.getElementById("cod_reserva_paciente_registrado")
    cod_reserva_paciente_registrado.readOnly = true;
    cod_reserva_paciente_registrado.value = eventUuid
}
// Crear elementos Alert para mostrar la info de la cita creada a un paciente registrado.
function abrir_modal_nueva_cita_pa_registrado(fechaFormateada){
    let modal_crear_cita_pac_resgistrado_panel_adm = document.getElementById("modal_crear_cita_pac_resgistrado_panel_adm")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_crear_cita_pac_resgistrado_panel_adm);
    // Abre el modal
    modalInstance.show();
    let select_adm_com_clin_pac_registrado = document.getElementById("select_adm_com_clin_pac_registrado").value
    let select_adm_com_clin_pac_registrado_get = document.getElementById("select_adm_com_clin_pac_registrado")
    let data_comuna = null; // Variable para almacenar el valor del atributo data.
    let direccion_clinica = null; // Variable para almacenar el valor del atributo data.
    let nombre_clinica = null; // Variable para almacenar el valor del atributo data.
    let id_especialidad = null;
    let especialidad = null;
    let id_user_doctor = null;
    let nombre_doctor = null;
    //
    Array.from(select_adm_com_clin_pac_registrado_get.options).forEach(option => {
        if (option.value === select_adm_com_clin_pac_registrado) {
            // Obtén el valor del atributo data-info
            data_comuna = option.getAttribute("data-comuna");
            // Dirección Clínica.
            direccion_clinica = option.getAttribute("data-direccion");
            //
            nombre_clinica = option.innerText;
        }
    });
    // Escucha el evento de cambio (opcional, si necesitas que se detecte al seleccionar una opción)
    let reserva_adm_pac_registrado_especialidad = document.getElementById("reserva_adm_pac_registrado_especialidad").value
    // Escucha el evento de cambio (opcional, si necesitas que se detecte al seleccionar una opción)
    let opcion_reserva_adm_pac_registrado_especialidad = document.getElementById("reserva_adm_pac_registrado_especialidad")
    Array.from(opcion_reserva_adm_pac_registrado_especialidad.options).forEach(option => {
        if (option.value === reserva_adm_pac_registrado_especialidad) {
            // Obtén el valor del atributo data-info
            id_especialidad = option.getAttribute("data-id");
            // Dirección Clínica.
            especialidad = option.getAttribute("data-esp");
        }
    });
    //
    let select_adm_esp_pac_registrado = document.getElementById("select_adm_esp_pac_registrado").value
    let option_select_adm_esp_pac_registrado = document.getElementById("select_adm_esp_pac_registrado")
    Array.from(option_select_adm_esp_pac_registrado.options).forEach(option => {
        if (option.value === select_adm_esp_pac_registrado) {
            // Dirección Clínica.
            nombre_doctor = option.innerText;
        }
    });
    //
    let alert_info = document.getElementById("info_nueva_reserva_pac_reistrado")
    // Limpia los elementos previos
    while (alert_info.firstChild) {
        alert_info.removeChild(alert_info.firstChild);
    }
    // Crear un nuevo elemento (por ejemplo, un div)
    let fk_usuario = document.getElementById("paciente_registrado").value
    let solo_paciente = document.getElementById("paciente_registrado")
    // Obtén el índice del option seleccionado
    let selectedIndex = solo_paciente.selectedIndex;
    // Obtén el innerText del option seleccionado
    let selectedText = solo_paciente.options[selectedIndex].innerText;
    
    let div_nombre_paciente = document.createElement("div");
    div_nombre_paciente.classList = "alert alert-success"
    div_nombre_paciente.role = "alert"
    div_nombre_paciente.innerText = "Nombre Paciente: " + selectedText
    alert_info.appendChild(div_nombre_paciente);
    // Crear un nuevo elemento (por ejemplo, un div)
    let div_alert_nombre_clinica = document.createElement("div");
    div_alert_nombre_clinica.classList = "alert alert-primary"
    div_alert_nombre_clinica.role = "alert"
    div_alert_nombre_clinica.innerText = "Nombre Clínica: " + nombre_clinica
    alert_info.appendChild(div_alert_nombre_clinica);
    // Crear un nuevo elemento (por ejemplo, un div)
    let div_alert_comuna_clinica = document.createElement("div");
    div_alert_comuna_clinica.classList = "alert alert-primary"
    div_alert_comuna_clinica.role = "alert"
    div_alert_comuna_clinica.innerText = "Comuna Clínica: " + data_comuna
    alert_info.appendChild(div_alert_comuna_clinica);
    // Info Dirección Clínica.
    let div_alert_direccion_clinica = document.createElement("div");
    div_alert_direccion_clinica.classList = "alert alert-primary"
    div_alert_direccion_clinica.role = "alert"
    div_alert_direccion_clinica.innerText = "Dirección Clínica: " + direccion_clinica
    alert_info.appendChild(div_alert_direccion_clinica);
    // Info Especialidad.
    let div_alert_especialidad = document.createElement("div");
    div_alert_especialidad.classList = "alert alert-primary"
    div_alert_especialidad.role = "alert"
    div_alert_especialidad.innerText = "Especialidad: " + especialidad
    alert_info.appendChild(div_alert_especialidad);
    // Info Doctor.
    let div_alert_doctor = document.createElement("div");
    div_alert_doctor.classList = "alert alert-primary"
    div_alert_doctor.role = "alert"
    div_alert_doctor.innerText = "Nombre Doctor: " + nombre_doctor
    alert_info.appendChild(div_alert_doctor);
    // Info Fecha Reserva..
    let div_alert_fecha_reserva = document.createElement("div");
    div_alert_fecha_reserva.classList = "alert alert-primary"
    div_alert_fecha_reserva.role = "alert"
    div_alert_fecha_reserva.innerText = "Fecha Cita: " + fechaFormateada
    alert_info.appendChild(div_alert_fecha_reserva);
    //
    nueva_cita_pac_registrado(fk_usuario, nombre_clinica ,data_comuna ,direccion_clinica, especialidad ,nombre_doctor ,fechaFormateada)
}
// Enviar información sobre la nueva cita al paciente registrado.
function nueva_cita_pac_registrado(fk_usuario,nombre_clinica ,data_comuna ,direccion_clinica, especialidad ,nombre_doctor ,fechaFormateadas){
    // let id_user_pac = document.getElementById("id_user_paciente_registrado").value
    // Fecha inicial en formato "T-03:00"
    const fechaInicial = "T-03:00";

    // Crear un objeto de fecha.
    const fechaBase = new Date(fechaFormateadas);

    // Ajustar la hora de acuerdo al huso horario local
    let opcionesFecha = { timeZone: "America/Santiago", hour12: false };
    //const fechaFormateada = fechaBase.toLocaleDateString("es-CL", opcionesFecha);
    const horaFormateada = fechaBase.toLocaleTimeString("es-CL", opcionesFecha);

    // Sumar una hora adicional (si es necesario)
    fechaBase.setHours(fechaBase.getHours() + 1);
    const horaConUnaHoraMas = fechaBase.toLocaleTimeString("es-CL", opcionesFecha);
    console.log(fechaBase)
    //console.log(`Fecha: ${fechaFormateada}, Hora Inicio: ${horaFormateada}`);
    //console.log(`Hora Termino: ${horaConUnaHoraMas}`);
    //
    const token = sessionStorage.getItem('token');
    // Creamos un evento para obtener los valores necesarios para crear la cita.
    let btn_crear_cita_pac_registrado_panel_adm = document.getElementById("btn_crear_cita_pac_registrado_panel_adm")
    // 🔴 Remover cualquier evento previo antes de agregar el nuevo
    btn_crear_cita_pac_registrado_panel_adm.removeEventListener("click", crearCita);

    // ✅ Agregar un nuevo evento con una función separada
    btn_crear_cita_pac_registrado_panel_adm.addEventListener("click", crearCita, { once: true });
    function crearCita(e){
        e.preventDefault()
         // Creamos el array de objetos.
        let datos = {
            'fecha_reserva': fechaFormateadas,
            'especialidad': especialidad,
            'nombre_doctor': nombre_doctor,
            'comuna_clinica': data_comuna,
            'fk_usuario': fk_usuario,
            'direccion_clinica': direccion_clinica,
            'nombre_clinica': nombre_clinica,
            'hora_inicio': horaFormateada,
            'hora_termino': horaConUnaHoraMas
        }
        console.warn(datos)
        //
        axios.post(`http://127.0.0.1:8000/paciente/crear_reserva_pac_registrado`, datos, {
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        .then(function (response) {
            // 
            if (response.status = 200) {
                console.log(response.data.pacientes)
                response.data.pacientes.forEach(element => {
                    if (calendar) {
                        calendar.addEvent({
                            title: element.especialidad,
                            start: element.hora_inicio,
                            end: element.hora_termino,
                            // extendedProps: {
                            //     nombre_paciente: nombre_clinica
                            // }
                        });
                    }
                    calendar.refetchEvents();
                });
                //
                Swal.fire({
                    title: "Cita Registrada Correctamente",
                    text: "Cita Generada",
                    icon: "success"
                });
            }
        })
        .catch(error => {
            if (error.response) {
                console.log('Error Response:', error.response.data);
                console.log('Error Status:', error.response.status);
                console.log('Error Headers:', error.response.headers);
                if (error.response.status == 400){
                    Swal.fire({
                        title: "Error",
                        text: "El usuario ya tiene una cita con esa especialidad",
                        icon: "error"
                    });
                }
            }
        });
    }
}
//
function eliminar_reserva(id_reserva, especialidad){
    //
    const username = sessionStorage.getItem('username');
    //
    const token = sessionStorage.getItem('token');
    let arr = []
    Swal.fire({
        title: "¿Desea eliminar la reserva de Especialidad: " +especialidad+ "?",
        text: "Se eliminará la reserva.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, borrar!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/reserva/delete_reserva_panel_secretaria/${id_reserva}/`,{
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
                        title: "Clínica Eliminada Correctamente",
                        text: "Clínica Eliminada",
                    });
                    //console.warn(response.data.grupos[0])
                    let reserva = response.data.reserva
                    reserva.forEach(element => {
                        console.log(element.username)
                        arr.push(element)
                    });
                    console.warn(arr)
                    //
                    var table = $('#tabla_hist_pac_panel_secre').DataTable({
                        data: arr,
                        columns: [
                            { title: 'ID', data: "id_reserva", defaultContent: '' },
                            { 
                                title: 'Fecha Reserva', 
                                data: "fecha_reserva", 
                                defaultContent: '',
                                render: function(data, type, row) {
                                    if (!data) return ''; // Si no hay fecha, retorna vacío
                                    let fecha = new Date(data);
                                    let dia = fecha.getDate().toString().padStart(2, '0');
                                    let mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Meses en JavaScript empiezan desde 0
                                    let anio = fecha.getFullYear();
                                    return `${dia}-${mes}-${anio}`;
                                }
                            },
                            { title: 'Hora Inicio', data: "hora_inicio", defaultContent: '' },
                            { title: 'Hora Término', data: "hora_termino", defaultContent: '' },
                            { title: 'Especialidad', data: "especialidad", defaultContent: '' },
                            { title: 'Nombre Doctor M.', data: "nombre_doctor", defaultContent: '' },
                            { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                            { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                            { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                            { 
                                title: 'Reserva Cerrada', 
                                data: "reserva_cerrada", 
                                defaultContent: '',
                                render: function(data, type, row) {
                                    return data && data.toLowerCase() === 'cerrado' ? 'Cerrado' : 'No cerrado';
                                }
                            },
                            { title: 'Cod. Reserva', data: "cod_reserva", defaultContent: '' },
                            { 
                                title: 'Acciones', 
                                data: null,
                                responsivePriority: 1, // Prioridad máxima (no se oculta)
                                className: 'no-wrap', // Clase para evitar saltos de línea
                                orderable: false,
                                render: function(data, type, row) {
                                    return '<button type="button" data-id="'+row.id_reserva+'" data-name="'+row.primer_nombre+'" id="btn_delete_reserva_secret_panel_secre" onclick="eliminar_reserva(\''+row.id_reserva+'\')" class="btn btn-danger btn-sm">Eliminar</button> ';
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
                            title: "El grupo ya existe",
                            text: "El grupo fue creado anteriormente!",
                        });
                    }
                }
            });
        }
    });
}
//
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