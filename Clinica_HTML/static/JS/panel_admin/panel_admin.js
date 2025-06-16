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
    let panel_clinica = document.getElementById("seccion_clinica")
    panel_clinica.addEventListener("click", function(event){
        let container_paciente = document.getElementById("container_paciente")
        container_paciente.style.display="none"
        //
        let opcion_secre_doc_pasc = document.getElementById("opcion_secre_doc_pasc")
        opcion_secre_doc_pasc.style.display="none"
        //
        let container_secretaria = document.getElementById("container_secretaria")
        container_secretaria.style.display="none"
        //
        let container_grupo = document.getElementById("container_grupo")
        container_grupo.style.display = "none"
        //
        let container_espe_doctor = document.getElementById("container_espe_doctor")
        container_espe_doctor.style.display="none"
        //
        let container_cita_user_info = document.getElementById("container_cita_user_info")
        container_cita_user_info.style.display="none"
        //
        let container_clinica = document.getElementById("container_clinica")
        container_clinica.style.display="block"
        seccion_clinica()
    })
    //
    let panel_doctor = document.getElementById("panel_doctor")
    panel_doctor.addEventListener("click", function(){
        let panel_doctor = this.getAttribute("data-name")
        //
        let container_paciente = document.getElementById("container_paciente")
        container_paciente.style.display="none"
        //
        let container_doctor = document.getElementById("container_doctor")
        container_doctor.style.display="block"
        //
        let container_secretaria = document.getElementById("container_secretaria")
        container_secretaria.style.display="none"
        //
        let container_clinica = document.getElementById("container_clinica")
        container_clinica.style.display="none"
    })
    //
    let panel_paciente = document.getElementById("panel_paciente")
    panel_paciente.addEventListener("click", function(event){
        event.preventDefault();
        let container_paciente = this.getAttribute("data-name")
        //
        let ocultar_container_paciente = document.getElementById(container_paciente)
        ocultar_container_paciente.style.display="block"
        //
        let ocultar_container_doctor = document.getElementById("container_doctor")
        ocultar_container_doctor.style.display="none"
        //
        let container_secretaria = document.getElementById("container_secretaria")
        container_secretaria.style.display="none" 
        //
        let container_espe_doctor = document.getElementById("container_espe_doctor")
        container_espe_doctor.style.display="none"
        // Llamamos a la función del Full calendar.
        //reserva_calendar()
    })
    //
    let panel_secretaria = document.getElementById("panel_secretaria")
    panel_secretaria.addEventListener("click", function(event){
        event.preventDefault();
        let name_panel_secretaria = this.getAttribute("data-name")
        let panel_secretaria = document.getElementById(name_panel_secretaria)
        panel_secretaria.style.display="block"
        //
        let container_paciente = document.getElementById("container_paciente")
        container_paciente.style.display="none"
        //
        let ocultar_container_doctor = document.getElementById("container_doctor")
        ocultar_container_doctor.style.display="none"
        //
        let container_espe_doctor = document.getElementById("container_espe_doctor")
        container_espe_doctor.style.display="none"
        //
        let container_cita_user_info = document.getElementById("container_cita_user_info")
        container_cita_user_info.style.display = "none"
    })

    // Cuando se le hace click al link de etiqueta a.
    let seleccion_panel_modulos_usuario = document.getElementById("seleccion_panel_modulos_usuario")
    seleccion_panel_modulos_usuario.addEventListener("click", function(e){
        let opcion_secre_doc_pasc = document.getElementById("opcion_secre_doc_pasc")
        opcion_secre_doc_pasc.style.display = "block"
        //
        let container_grupo = document.getElementById("container_grupo")
        container_grupo.style.display = "none"
        //
        let container_esp = document.getElementById("container_secretaria")
        container_esp.style.display = "none"
        //
        let container_espe_doctor = document.getElementById("container_espe_doctor")
        container_espe_doctor.style.display="none"
        //
        let container_cita_user_info = document.getElementById("container_cita_user_info")
        container_cita_user_info.style.display = "none"
        //
        let container_clinica = document.getElementById("container_clinica")
        container_clinica.style.display="none"
        //
        let ocultar_container_doctor = document.getElementById("container_doctor")
        ocultar_container_doctor.style.display="none"
    })
    // 
    let seleccion_panel_modulos_info_citas = document.getElementById("seleccion_panel_modulos_info_citas")
    seleccion_panel_modulos_info_citas.addEventListener("click", function (){
        //
        let opcion_secre_doc_pasc = document.getElementById("opcion_secre_doc_pasc")
        opcion_secre_doc_pasc.style.display = "none"
        //
        let container_grupo = document.getElementById("container_grupo")
        container_grupo.style.display = "none"
        //
        let container_esp = document.getElementById("container_secretaria")
        container_esp.style.display = "none"
        //
        let container_espe_doctor = document.getElementById("container_espe_doctor")
        container_espe_doctor.style.display="none"
        //
        let container_cita_user_info = document.getElementById("container_cita_user_info")
        container_cita_user_info.style.display = "block"
        //
        historial_citas()
    })
}
click_seccion()
//----------------------------------- Inicio Módulo Clínica -----------------------------------------------
function seccion_clinica(){
    //
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
        var table = $('#tabla_clinica').DataTable({
            data: list_clinica,
            columns: [
                { title: 'ID', data: "id", defaultContent: '' },
                { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                { 
                    title: 'Acciones', 
                    data: null,
                    responsivePriority: 1, // Prioridad máxima (no se oculta)
                    className: 'no-wrap', // Clase para evitar saltos de línea
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" id="btn_editar_clinica" onclick="modal_editar_clinica('+row.id+', \''+row.nombre_clinica+'\', \''+row.comuna_clinica+'\', \''+row.direccion_clinica+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                '<button type="button" id="btn_borrar_clinica" onclick="borrar_clinica_admin('+row.id+', \''+row.nombre_clinica+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
// Funcion para abrir el modal de insertar una nueva clinica.
function abrir_modal_nueva_clinica(){
    let modal_clinica = document.getElementById("modal_clinica")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_clinica);
    // Abre el modal
    modalInstance.show();
}
//
function registrar_clinica(){
    //
    let crear_clinica_adm = document.getElementById("crear_clinica_adm").value
    let comuna_clinica_adm_pass = document.getElementById("comuna_clinica_adm_pass").value
    let direccion_clinica_adm_first_name = document.getElementById("direccion_clinica_adm_first_name").value
    const token = sessionStorage.getItem('token');
    //
    let datos = {
        'nombre_clinica': crear_clinica_adm,
        'comuna_clinica': comuna_clinica_adm_pass,
        'direccion_clinica': direccion_clinica_adm_first_name,
    }
    console.warn(datos)
    //
    let arr =[]
    axios.post(`http://127.0.0.1:8000/clinica/crear_clinica`, datos, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        console.warn(response.data);
        console.warn(response.status)
        let list_clinica = response.data.list_clinica
        console.warn(list_clinica)
        arr.push(list_clinica)
        console.warn(arr)
        if (response.status == 200) {
            Swal.fire({
                icon: "success",
                title: "Clínica Creada Correctamente",
                text: "La clínica fue creada correctamente!",
            });
            var table = $('#tabla_clinica').DataTable({
                data: list_clinica,
                columns: [
                    { title: 'ID', data: "id", defaultContent: '' },
                    { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                    { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                    { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" id="btn_editar_clinica" onclick="modal_editar_clinica('+row.id+', \''+row.nombre_clinica+'\', \''+row.comuna_clinica+'\', \''+row.direccion_clinica+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" id="btn_borrar_clinica" onclick="borrar_clinica_admin('+row.id+', \''+row.nombre_clinica+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
            // Realizamos el click automático.
            // elemento.click();
            // cerrar_modal_listar_doctor.click();
            let crear_clinica_adm_reset = document.getElementById("crear_clinica_adm")
            crear_clinica_adm_reset.value = ""
            let comuna_clinica_adm_reset = document.getElementById("comuna_clinica_adm_pass")
            comuna_clinica_adm_reset.value = ""
            let direccion_clinica_adm_reset = document.getElementById("direccion_clinica_adm_first_name")
            direccion_clinica_adm_reset.value = ""
        }
    }).catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
            if (error.response.data.error == 2) {
                Swal.fire({
                    icon: "error",
                    title: "Username ya existe",
                    text: "El username ingresado ya se encuentra registrado",
                });
            }
            if (error.response.data.error == 3) {
                Swal.fire({
                    icon: "error",
                    title: "Campo Vacío",
                    text: "No puede haber campos vacíos",
                });
            }
            if (error.response.data.error == 4) {
                Swal.fire({
                    icon: "error",
                    title: "El doctor ya existe",
                    text: "El doctor ya se encuentra registrado en la BD.",
                });
            }
        }
    });
}
//
function modal_editar_clinica(id, nombreClinica, comunaClinica, direccionClinica){
    //
    let modal_editar_clinica_adm = document.getElementById("modal_editar_clinica_adm")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_editar_clinica_adm);
    // Abre el modal
    modalInstance.show();
    //
    let edit_id_clinica = document.getElementById("edit_id_clinica")
    edit_id_clinica.value = id
    let edit_clinica_adm = document.getElementById("edit_clinica_adm")
    edit_clinica_adm.value = nombreClinica
    let edit_comuna_clinica_adm = document.getElementById("edit_comuna_clinica_adm")
    edit_comuna_clinica_adm.value = comunaClinica
    let edit_direccion_clinica_adm = document.getElementById("edit_direccion_clinica_adm")
    edit_direccion_clinica_adm.value = direccionClinica
}
//
function update_clinica_adm(){
    //
    const token = sessionStorage.getItem('token');
    let edit_id_clinica = document.getElementById("edit_id_clinica").value
    let edit_clinica_adm = document.getElementById("edit_clinica_adm").value
    let edit_comuna_clinica_adm = document.getElementById("edit_comuna_clinica_adm").value
    let edit_direccion_clinica_adm = document.getElementById("edit_direccion_clinica_adm").value
    //
    let datos = {
        'nombre_clinica': edit_clinica_adm,
        'comuna_clinica': edit_comuna_clinica_adm, 
        'direccion_clinica': edit_direccion_clinica_adm, 
    }
    //
    axios.put(`http://127.0.0.1:8000/clinica/editar_clinica/${edit_id_clinica}/`,datos, {
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
                title: "Actualizado Correctamente",
                text: "La clínica fue actualizada correctamente!",
            });
            let list_clinica = response.data.list_clinica
            //
            var table = $('#tabla_clinica').DataTable({
                data: list_clinica,
                columns: [
                    { title: 'ID', data: "id", defaultContent: '' },
                    { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                    { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                    { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" id="btn_editar_clinica" onclick="modal_editar_clinica('+row.id+', \''+row.nombre_clinica+'\', \''+row.comuna_clinica+'\', \''+row.direccion_clinica+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" id="btn_borrar_clinica" onclick="borrar_clinica_admin('+row.id+', \''+row.nombre_clinica+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
                    title: "El grupo ya existe",
                    text: "El grupo fue creado anteriormente!",
                });
            }
        }
    });
}
//
function borrar_clinica_admin(id, nombreClinica){
    const token = sessionStorage.getItem('token');
    Swal.fire({
        title: "¿Desea eliminar la clínica: " +nombreClinica+"?",
        text: "La clínica se eliminará",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, borrar!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/clinica/delete_clinica/${id}/`, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            .then(function (response) {
                console.warn(response.data);
                console.warn(response.status)
                let arr = []
                if (response.status == 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Clínica Eliminada",
                        text: "La clínica fue eliminada correctamente!",
                    });
                    //console.warn(response.data.grupos[0])
                    let list_clinica = response.data.list_clinica
                    //
                    var table = $('#tabla_clinica').DataTable({
                        data: list_clinica,
                        columns: [
                            { title: 'ID', data: "id", defaultContent: '' },
                            { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                            { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                            { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                            { 
                                title: 'Acciones', 
                                data: null,
                                responsivePriority: 1, // Prioridad máxima (no se oculta)
                                className: 'no-wrap', // Clase para evitar saltos de línea
                                orderable: false,
                                render: function(data, type, row) {
                                    return '<button type="button" id="btn_editar_clinica" onclick="modal_editar_clinica('+row.id+', \''+row.nombre_clinica+'\', \''+row.comuna_clinica+'\', \''+row.direccion_clinica+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                            '<button type="button" id="btn_borrar_clinica" onclick="borrar_clinica_admin('+row.id+', \''+row.nombre_clinica+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
                            title: "El grupo ya existe",
                            text: "El grupo fue creado anteriormente!",
                        });
                    }
                }
            });
        }
    });
}
//----------------------------------- Fin Módulo Clínica -----------------------------------------------
//----------------------------------- Inicio Módulo Doctor -----------------------------------------------
function panel_doctores(){
    let info = document.getElementById("panel_doctor")
    info.addEventListener("click", function(e){
        //
        const token = sessionStorage.getItem('token');
        let arr =[]
        axios.get('http://127.0.0.1:8000/doctor/listar_doctor_admin',{
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        .then(function (response) {
            // 
            //console.warn(response.data.grupos[0])
            let grupos = response.data.list_doctor
            grupos.forEach(element => {
                console.log(element.username)
                arr.push(element)
            });
            console.warn(arr)
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
                    { 
                        title: 'Acciones',
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_editar_doc" onclick="editar_doctor('+row.id_doctor+', \''+row.username+'\', \''+row.email+'\', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\', \''+row.ap_materno+'\', \''+row.ap_paterno+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_borrar_doc" onclick="borrar_user_doctor('+row.id_doctor+', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ' +
                                    '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_esp_doc" onclick="especialidades_list_doc('+row.id_doctor+', \''+row.primer_nombre+'\')" class="btn btn-sm borrar-btn" style="background:rgb(18, 236, 135)">Especialidades</button> ' +
                                    '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_esp_cli" onclick="clinica_doc('+row.id_doctor+', \''+row.primer_nombre+'\')" class="btn btn-sm" style="background:rgb(229, 150, 253)">Clínicas Doc</button>';
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
    })
}
panel_doctores()
// Función para btener los especialidades de la BD de forma dinámica INOUT.
function option_especialidad(e){
    let select_especialidad = document.getElementById("select_especialidad")
    const token = sessionStorage.getItem('token');
    // Evitar múltiples peticiones si ya hay datos
    if (select_especialidad.options.length > 1) return;
    let arr =[]
    axios.get('http://127.0.0.1:8000/especialidad/especialidad_doctor',{
        headers: {
            'Authorization': `Token ${token}`
        }
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
function obtener_clinica(e){
    let select_clinica = document.getElementById("select_clinica")
    const token = sessionStorage.getItem('token');
    // Evitar múltiples peticiones si ya hay datos
    if (select_clinica.options.length > 1) return;
    let arr =[]
    axios.get('http://127.0.0.1:8000/clinica/listar_clinica_adm',{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        const esp = response.data.list_clinica;
        //
        esp.forEach(element => {
            // Crear un NUEVO elemento option en cada iteración
            const elegir_clinica = document.createElement("option");
            elegir_clinica.value = element.id; // Usar ID como valor (mejor práctica)
            elegir_clinica.setAttribute("data-esp", element.nombre_especialidad)
            elegir_clinica.setAttribute("data-id", element.id)
            elegir_clinica.textContent = element.nombre_clinica;
            select_clinica.appendChild(elegir_clinica);
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
function editar_doctor(id, username, email, primer_nombre, segundo_nombre, edad, sexo, rut, fono, ap_materno, ap_paterno){
    // console.log(id)
    // console.log(username)
    // console.log(email)
    // console.log(primer_nombre)
    // console.log(segundo_nombre)
    // console.log(edad)
    // console.log(sexo)
    // console.log(rut)
    // console.log(fono)
    // console.log(ap_materno)
    // console.log(ap_paterno)
    // debugger
    //
    let modal_Editar_info_doctor = document.getElementById("modal_Editar_info_doctor")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_Editar_info_doctor);
    // Abre el modal
    modalInstance.show();
    //
    let id_doc_user_edit = document.getElementById("id_doc_user_edit")
    id_doc_user_edit.value = id;
    let edit_doc_username = document.getElementById("edit_doc_username")
    edit_doc_username.value = username;
    
    let edit_doc_first_name = document.getElementById("edit_doc_primer_nombre")
    edit_doc_first_name.value = primer_nombre;
    let edit_doc_last_name = document.getElementById("edit_doc_segundo_nombre")
    edit_doc_last_name.value = segundo_nombre;
    let edit_doc_email = document.getElementById("edit_doc_email")
    edit_doc_email.value = email;
    let edit_doc_edad = document.getElementById("edit_doc_edad")
    edit_doc_edad.value = edad;
    let edit_doc_rut = document.getElementById("edit_doc_rut")
    edit_doc_rut.value = rut;
    let edit_doc_fono = document.getElementById("edit_doc_fono")
    edit_doc_fono.value = fono;
    let apellido_paterno = document.getElementById("edit_doc_ap_paterno")
    apellido_paterno.value = ap_paterno;
    let apellido_materno = document.getElementById("edit_doc_ap_materno")
    apellido_materno.value = ap_materno;
    let edit_sexo = document.getElementsByName("edit_doc_genero")
    let valor_radio;
    edit_sexo.forEach(radio => {
        if (radio.value === sexo) {
            radio.checked = true; // Esto marcará la opción que coincide con 'sexo'
            valor_radio = radio.checked;
        }
    });
}
// Enviar los datos para editar a un Doctor.
function enviar_datos_edit_doc_adm(){
    //
    const token = sessionStorage.getItem('token');
    //
    let id = document.getElementById("id_doc_user_edit").value
    let edit_doc_username = document.getElementById("edit_doc_username").value
    let edit_doc_password = document.getElementById("edit_doc_pass").value
    if (edit_doc_password == '') {
        edit_doc_password = null
    }
    let primer_nombre = document.getElementById("edit_doc_primer_nombre").value
    let segundo_nombre = document.getElementById("edit_doc_segundo_nombre").value
    let edit_doc_ap_paterno = document.getElementById("edit_doc_ap_paterno").value
    let edit_doc_ap_materno = document.getElementById("edit_doc_ap_materno").value
    let edit_doc_email = document.getElementById("edit_doc_email").value
    let edit_doc_edad = document.getElementById("edit_doc_edad").value
    let edit_doc_rut = document.getElementById("edit_doc_rut").value
    let edit_doc_fono = document.getElementById("edit_doc_fono").value
    let edit_sexo = document.getElementsByName("edit_doc_genero").value
    let sexo = document.getElementsByName("edit_doc_genero")
    let valor_radio;
    sexo.forEach(radio => {
        if (radio.checked) {
            valor_radio = radio.value;
        }
    });
    let arr = []
    //
    let datos = {
        'username': edit_doc_username,
        'password': edit_doc_password,
        'primer_nombre': primer_nombre,
        'segundo_nombre': segundo_nombre,
        'email': edit_doc_email,
        'edad': edit_doc_edad,
        'rut': edit_doc_rut,
        'fono': edit_doc_fono,
        'sexo': valor_radio,
        'ap_paterno': edit_doc_ap_paterno,
        'ap_materno': edit_doc_ap_materno
    }
    console.warn(datos)
    //
    axios.put(`http://127.0.0.1:8000/doctor/update_doctor/${id}/`,datos, {
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
                title: "Actualizado Correctamente",
                text: "Losdatos del doctor fueron actualizados correctamente!",
            });
            let list_doctor = response.data.list_doctor
            list_doctor.forEach(element => {
                console.log(element.name)
                arr.push(element)
            });
            console.warn(arr)
            //
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
                    { 
                        title: 'Acciones',
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_editar_doc" onclick="editar_doctor('+row.id_doctor+', \''+row.username+'\', \''+row.email+'\', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\', \''+row.ap_materno+'\', \''+row.ap_paterno+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_borrar_doc" onclick="borrar_user_doctor('+row.id_doctor+', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ' +
                                    '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_esp_doc" onclick="especialidades_list_doc('+row.id_doctor+', \''+row.primer_nombre+'\')" class="btn btn-sm borrar-btn" style="background:rgb(18, 236, 135)">Especialidades</button> ' +
                                    '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_esp_cli" onclick="clinica_doc('+row.id_doctor+', \''+row.primer_nombre+'\')" class="btn btn-sm" style="background:rgb(229, 150, 253)">Clínicas Doc</button>';
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
                    title: "El grupo ya existe",
                    text: "El grupo fue creado anteriormente!",
                });
            }
        }
    });
}
// Solo Modal Crear Doctor.
function insertar_doctor(e){
    let modal_form_doctor = document.getElementById("modal_form_doctor")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_form_doctor);
    // Abre el modal
    modalInstance.show();
}
//
function insertar_bd_doctor(e){
    let insert_doctor = document.getElementById("insert_doctor")
    let cerrar_modal_listar_doctor = document.getElementById("cerrar_modal_listar_doctor")
    const token = sessionStorage.getItem('token');
    let username = document.getElementById("username").value
    //console.warn(username)
    let password = document.getElementById("password").value
    //console.warn(password)
    let primer_nombre = document.getElementById("primer_nombre").value
    //console.warn(first_name)
    let segundo_nombre = document.getElementById("segundo_nombre").value
    //
    let ap_paterno = document.getElementById("ap_paterno").value
    //
    let ap_materno = document.getElementById("ap_materno").value
    //console.warn(last_name)
    let email = document.getElementById("email").value
    //console.warn(email)
    let edad = document.getElementById("edad").value
    //console.warn(edad)
    let rut = document.getElementById("rut").value
    //console.warn(rut)
    let fono = document.getElementById("fono").value
    let radioButtons = document.getElementsByName("genero")
    //
    let elemento = document.getElementById("cancelar_insertar_doctor")
    let reset_input = document.getElementById("form_doctor")
    let selectedGenero;
    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            selectedGenero = radioButton.value;
            console.warn(selectedGenero)
        }
    });
    let especialidad = document.getElementById("select_especialidad")
    const valor = especialidad.value;
    let select_clinica = document.getElementById("select_clinica")
    const valor_select_clinica = select_clinica.value;
    //const texto = especialidad.options[especialidad.selectedIndex].text;
    let datos = {
        'username': username,
        'password': password,
        'primer_nombre': primer_nombre,
        'segundo_nombre': segundo_nombre,
        'ap_paterno': ap_paterno,
        'ap_materno': ap_materno,
        'email': email,
        'edad': edad,
        'rut': rut,
        'fono': fono,
        'sexo': selectedGenero,
        'especialidad': valor,
        'comunaclinicamodelid': valor_select_clinica,
    }
    console.warn(datos)
    //
    let arr =[]
    axios.post(`http://127.0.0.1:8000/doctor/crear_doctor`, datos, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        console.warn(response.data);
        console.warn(response.status)
        let list_doctor = response.data.list_doctor
        list_doctor.forEach(element => {
            arr.push(element)
        });
        console.warn(arr)
        if (response.status == 200) {
            Swal.fire({
                icon: "success",
                title: "Doctor Creado Correctamente",
                text: "El doctor fue creado correctamente!",
            });
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
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_editar_doc" onclick="editar_doctor('+row.id_doctor+', \''+row.username+'\', \''+row.email+'\', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\', \''+row.ap_materno+'\', \''+row.ap_paterno+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_borrar_doc" onclick="borrar_user_doctor('+row.id_doctor+', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ' +
                                    '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_esp_doc" onclick="especialidades_list_doc('+row.id_doctor+', \''+row.primer_nombre+'\')" class="btn btn-sm borrar-btn" style="background:rgb(18, 236, 135)">Especialidades</button> ' +
                                    '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_esp_cli" onclick="clinica_doc('+row.id_doctor+', \''+row.primer_nombre+'\')" class="btn btn-sm" style="background:rgb(229, 150, 253)">Clínicas Doc</button>';
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
            reset_input.reset()
        }
    }).catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
            if (error.response.data.error == 2) {
                Swal.fire({
                    icon: "error",
                    title: "Username ya existe",
                    text: "El username ingresado ya se encuentra registrado",
                });
            }
            if (error.response.data.error == 3) {
                Swal.fire({
                    icon: "error",
                    title: "Campo Vacío",
                    text: "No puede haber campos vacíos",
                });
            }
            if (error.response.data.error == 4) {
                Swal.fire({
                    icon: "error",
                    title: "El doctor ya existe",
                    text: "El doctor ya se encuentra registrado en la BD.",
                });
            }
        }
    });
}
// Función para crear un nuevo grupo.
function nuevo_grupo(e){
    let crear_grupo = document.getElementById("crear_grupo")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(crear_grupo);
    // Abre el modal
    modalInstance.show();
    // Obtenemos el id del boton
    const elemento = document.querySelector('#cerrar_modal_listar_grupo');
    //
    let boton_crear_grupo = document.getElementById("insertar_grupo")
    let arr =[]
    boton_crear_grupo.addEventListener("click", function(e){
        e.preventDefault()
        let name = document.getElementById("nombre_grupo").value
        if (name == null || name == "") {
            Swal.fire({
                icon: "error",
                title: "Falta el nombre del grupo",
                text: "No puede quedar el campo vacio!",
            });
        }else{
            const token = sessionStorage.getItem('token');
            let datos = {
                'name':name
            }
            //
            axios.post(`http://127.0.0.1:8000/grupo/crear_grupo`,datos, {
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
                        title: "Creado Correctamente",
                        text: "El grupo fue creado correctamente!",
                    });
                    let name_text = document.getElementById("nombre_grupo")
                    name_text.value = ""
                    //console.warn(response.data.grupos[0])
                    let grupos = response.data.grupos
                    grupos.forEach(element => {
                        console.log(element.name)
                        arr.push(element)
                    });
                    console.warn(arr)
                    //
                    var table = $('#tabla_grupo').DataTable({
                        data: arr,
                        columns: [
                            { title: 'ID', data: "id", defaultContent: '' },
                            { title: 'Nombre Grupo', data: "name", defaultContent: '' },
                            { 
                                title: 'Acciones', 
                                data: null,
                                defaultContent: '',
                                orderable: false,
                                render: function(data, type, row) {
                                    return '<button type="button" data-id="'+row.id+'" data-name="'+row.name+'" id="btn_editar_grupo" onclick="modal_editar_grupo('+row.id+', \''+row.name+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                            '<button type="button" data-id="'+row.id+'" data-name="'+row.name+'" id="btn_borrar_grupo" onclick="borrar_grupo('+row.id+', \''+row.name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button>';
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
                            title: "El grupo ya existe",
                            text: "El grupo fue creado anteriormente!",
                        });
                    }
                }
            });
        }
    })
}
// Función para listar los grupos.
function grupos(e){
    let opcion_secre_doc_pasc = document.getElementById("opcion_secre_doc_pasc")
    opcion_secre_doc_pasc.style.display = "none"
    //
    let container_esp = document.getElementById("container_espe_doctor")
    container_esp.style.display = "none"
    //
    let container_clinica = document.getElementById("container_clinica")
    container_clinica.style.display="none"
    //container_secretaria
    let container_grupo = document.getElementById("container_grupo")
    container_grupo.style.display = "block"
    //
    let container_secretaria = document.getElementById("container_secretaria")
    container_secretaria.style.display = "none"
    let modal_grupo = document.getElementById("modal_grupo")
        // let listar_grupo = document.getElementById("listar_grupo")
        // // Crea una instancia del modal de Bootstrap
        // const modalInstance = new bootstrap.Modal(listar_grupo);
        // // Abre el modal
        // modalInstance.show();
        const token = sessionStorage.getItem('token');
        let arr =[]
        axios.get('http://127.0.0.1:8000/grupo/listar_grupo',{
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        .then(function (response) {
            // 
            //console.warn(response.data.grupos[0])
            let grupos = response.data.grupos
            grupos.forEach(element => {
                console.log(element.name)
                arr.push(element)
            });
            console.warn(arr)
            //
            var table = $('#tabla_grupo').DataTable({
                data: arr,
                columns: [
                    { title: 'ID', data: "id", defaultContent: '' },
                    { title: 'Nombre Grupo', data: "name", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        defaultContent: '',
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.name+'" id="btn_borrar_grupo" onclick="borrar_grupo('+row.id+', \''+row.name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button>';
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
        })
        .catch(error => {
            if (error.response) {
                console.log('Error Response:', error.response.data);
                console.log('Error Status:', error.response.status);
                console.log('Error Headers:', error.response.headers);
            }
        });
}
// Listar las clínicas donde pertenece el Doctor desde el panel adm.
function clinica_doc(id, nombre_clinica){
    // 
    let id_doc = document.getElementById("id_doc")
    id_doc.value = id
    let iduser_doc = document.getElementById("iduser_doc")
    iduser_doc.value = id
    //
    let modal_clinica_doctor = document.getElementById("modal_clinica_doctor")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_clinica_doctor);
    // Abre el modal
    modalInstance.show();
    //
   const token = sessionStorage.getItem('token');
   let arr =[]
   axios.get(`http://127.0.0.1:8000/doctor/listar_clinica/${id}`,{
       headers: {
           'Authorization': `Token ${token}`
       }
   })
   .then(function (response) {
        let list_doctor = response.data.clinicas
        list_doctor.forEach(element => {
            arr.push(element)
        });
        //
        var table = $('#tabla_clinica_doct_admin').DataTable({
            data: arr,
            columns: [
                { title: 'ID', data: "id", defaultContent: '' },
                { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                { 
                    title: 'Acciones', 
                    data: null,
                    responsivePriority: 1, // Prioridad máxima (no se oculta)
                    className: 'no-wrap', // Clase para evitar saltos de línea
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" data-id="'+row.id+'" id="btn_borrar_doc" onclick="borrar_clinica_doctor_panel_adm('+row.id+', \''+row.nombre_clinica+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
function agregar_nueva_clinica_doctor(){
    let modal_agregar_clinica_doctor_adm = document.getElementById("modal_agregar_clinica_doctor_adm")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_agregar_clinica_doctor_adm);
    // Abre el modal
    modalInstance.show();
    //console.warn(id_doc)
    let nueva_clinica_doc = document.getElementById("nueva_clinica_doc")
    const token = sessionStorage.getItem('token');
    // Evitar múltiples peticiones si ya hay datos
    if (nueva_clinica_doc.options.length > 1) return;
    let arr =[]
    axios.get('http://127.0.0.1:8000/clinica/listar_clinica_adm',{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        const esp = response.data.list_clinica;
        //
        esp.forEach(element => {
            // Crear un NUEVO elemento option en cada iteración
            const elegir_clinica = document.createElement("option");
            elegir_clinica.value = element.id; // Usar ID como valor (mejor práctica)
            elegir_clinica.textContent = element.nombre_clinica;
            nueva_clinica_doc.appendChild(elegir_clinica);
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
function borrar_clinica_doctor_panel_adm(id, nombreEmpresa){
    //
    let iduser_doc = document.getElementById("iduser_doc").value
    //
    const token = sessionStorage.getItem('token');
    Swal.fire({
        title: "¿Desea eliminar la clínica: " +nombreEmpresa+"?",
        text: "El grupo se eliminará correctamente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, borrar!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/doctor/delete_clinica_doctor/${iduser_doc}/?comunaclinicamodel_id=${id}`,{
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            .then(function (response) {
                console.warn(response.data);
                console.warn(response.status)
                let arr = []
                if (response.status == 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Clínica Eliminada",
                        text: "La clínica fué eliminada correctamente!",
                    });
                    //console.warn(response.data.grupos[0])
                    let clinicas_list = response.data.clinicas_list
                    clinicas_list.forEach(element => {
                        console.log(element.name)
                        arr.push(element)
                    });
                    console.warn(arr)
                    //
                    var table = $('#tabla_clinica_doct_admin').DataTable({
                        data: arr,
                        columns: [
                            { title: 'ID', data: "id", defaultContent: '' },
                            { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                            { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                            { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                            { 
                                title: 'Acciones', 
                                data: null,
                                responsivePriority: 1, // Prioridad máxima (no se oculta)
                                className: 'no-wrap', // Clase para evitar saltos de línea
                                orderable: false,
                                render: function(data, type, row) {
                                    return '<button type="button" data-id="'+row.id+'" id="btn_borrar_doc" onclick="borrar_clinica_doctor_panel_adm('+row.id+', \''+row.nombre_clinica+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
function registrar_nueva_clinica_doctor(){
    //
    const token = sessionStorage.getItem('token');
    //
    let nueva_clinica_doc = document.getElementById("nueva_clinica_doc")
    const id_clinica = nueva_clinica_doc.value;
    //
    let id_user = document.getElementById("id_doc").value
    //
    let datos = {
        'id_clinica': id_clinica,
    }
    let arr =[]
    axios.post(`http://127.0.0.1:8000/doctor/doctor_nueva_clinica/${id_user}/`, datos, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        console.warn(response.data);
        console.warn(response.status)
        let clinica = response.data.list_clinica
            clinica.forEach(element => {
                console.log(element.username)
                arr.push(element)
            });
        console.warn(arr)
        if (response.status == 200) {
            Swal.fire({
                icon: "success",
                title: "Nueva Clínica Ingresada",
                text: "La nueva clínica fué ingresada correctamente",
            });
            var table = $('#tabla_clinica_doct_admin').DataTable({
                data: arr,
                columns: [
                    { title: 'ID', data: "id", defaultContent: '' },
                    { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                    { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                    { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_doc" onclick="borrar_clinica_doctor_panel_adm('+row.id+', \''+row.nombre_clinica+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
    }).catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
            if (error.response.data.error == 2) {
                Swal.fire({
                    icon: "warning",
                    title: "La clínica ya se encuentra asociada",
                    text: "El doctor se encuentra asociado a la clínica",
                });
            }
            if (error.response.data.error == 3) {
                Swal.fire({
                    icon: "error",
                    title: "Campo Vacío",
                    text: "No puede haber campos vacíos",
                });
            }
            if (error.response.data.error == 4) {
                Swal.fire({
                    icon: "error",
                    title: "El doctor ya existe",
                    text: "El doctor ya se encuentra registrado en la BD.",
                });
            }
        }
    });
}
//
function borrar_grupo(id, nombre_grupo){
    // Obtenemos el id del boton clode.
    const elemento = document.querySelector('#cerrar_modal_listar_grupo');
    const token = sessionStorage.getItem('token');
    Swal.fire({
        title: "¿Desea eliminar el grupo " +nombre_grupo+"?",
        text: "El grupo se eliminará correctamente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, borrar!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/grupo/eliminar_grupo/${id}/`, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            .then(function (response) {
                console.warn(response.data);
                console.warn(response.status)
                let arr = []
                if (response.status == 200) {
                    Swal.fire({
                        icon: "success",
                        title: "El grupo fue eliminado correctamente",
                        text: "El grupo fue creado correctamente!",
                    });
                    //console.warn(response.data.grupos[0])
                    let grupos = response.data.grupos
                    grupos.forEach(element => {
                        console.log(element.name)
                        arr.push(element)
                    });
                    console.warn(arr)
                    //
                    var table = $('#tabla_grupo').DataTable({
                        data: arr,
                        columns: [
                            { title: 'ID', data: "id", defaultContent: '' },
                            { title: 'Nombre Grupo', data: "name", defaultContent: '' },
                            { 
                                title: 'Acciones', 
                                data: null,
                                defaultContent: '',
                                orderable: false,
                                render: function(data, type, row) {
                                    return '<button type="button" data-id="'+row.id+'" data-name="'+row.name+'" id="btn_borrar_grupo" onclick="borrar_grupo('+row.id+', \''+row.name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button>';
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
                            title: "El grupo ya existe",
                            text: "El grupo fue creado anteriormente!",
                        });
                    }
                }
            });
        }
    });
}
// Solo sección CSS.
function seccion_especialidad(e){
    // Estos son los divs de los containers para ocultarlos.
    let opcion_secre_doc_pasc = document.getElementById("opcion_secre_doc_pasc")
    opcion_secre_doc_pasc.style.display = "none"
    //
    let container_grupo = document.getElementById("container_grupo")
    container_grupo.style.display = "none"
    //
    let container_esp = document.getElementById("container_espe_doctor")
    container_esp.style.display = "block"
    //
    let container_cita_user_info = document.getElementById("container_cita_user_info")
    container_cita_user_info.style.display = "none"
    //
    let container_clinica = document.getElementById("container_clinica")
    container_clinica.style.display="none"
    //
    const token = sessionStorage.getItem('token');
    let arr =[]
    axios.get('http://127.0.0.1:8000/especialidad/especialidad_doctor',{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        //console.warn(response.data.grupos[0])
        let especialidad = response.data.especialidad
        arr.push(especialidad)
        //
        var table = $('#tabla_esp').DataTable({
            data: especialidad,
            columns: [
                { 
                    title: 'ID', 
                    data: "id",
                    defaultContent: '',
                    // Asignar ID al TD de esta columna
                    createdCell: function (td, cellData, rowData) {
                        $(td).attr('id', 'id_celda_' + rowData.id); // Ej: id_celda_5
                    }
                },
                { 
                    title: 'Nombre Especialidad', 
                    data: "nombre_especialidad",
                    defaultContent: '',
                    createdCell: function (td, cellData, rowData) {
                        $(td).attr('id', 'nombre_celda_' + rowData.id); // Ej: nombre_celda_5
                    }
                },
                { 
                    title: 'Acciones', 
                    data: null,
                    defaultContent: '',
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" data-id="'+row.id+'" data-name="'+row.nombre_especialidad+'" id="btn_editar_esp" onclick="editar_esp('+row.id+', \''+row.nombre_especialidad+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                '<button type="button" data-id="'+row.id+'" data-name="'+row.nombre_especialidad+'" id="btn_borrar_esp" onclick="borrar_esp('+row.id+', \''+row.nombre_especialidad+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button>';
                    },
                    createdCell: function (td, cellData, rowData) {
                        $(td).attr('id', 'acciones_celda_' + rowData.id); // Ej: acciones_celda_5
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
    })
    .catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
        }
    });
}
// Solo Abrir modal Insert Esp Panel Admin.
function abrir_modal_insertar_esp_doc(e){
    // 
    let modal_insert_especialidad = document.getElementById("modal_insert_especialidad")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_insert_especialidad);
    // Abre el modal
    modalInstance.show();
}
// Enviar información para insertar nueva especialidad.
function form_insert_Esp(e){
    //
    let nombre_especialidad = document.getElementById("especialidad").value
    let cancelar_insert_esp = document.getElementById("cancelar_insert_esp")
    let form_esp = document.getElementById("form_esp")
    //
    const token = sessionStorage.getItem('token');
    let datos = {
        'nombre_especialidad': nombre_especialidad,
    }
    //
    axios.post(`http://127.0.0.1:8000/especialidad/insertar_especialidad`, datos, {
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
                title: "Especialidad Creada Correctamente",
                text: "La especialidad fue creado correctamente!",
            });
        }
        var table = $('#tabla_esp').DataTable({
            data: response.data.especialidad,
            columns: [
                { 
                    title: 'ID', 
                    data: "id",
                    defaultContent: '',
                    // Asignar ID al TD de esta columna
                    createdCell: function (td, cellData, rowData) {
                        $(td).attr('id', 'id_celda_' + rowData.id); // Ej: id_celda_5
                    }
                },
                { 
                    title: 'Nombre Especialidad', 
                    data: "nombre_especialidad",
                    defaultContent: '',
                    createdCell: function (td, cellData, rowData) {
                        $(td).attr('id', 'nombre_celda_' + rowData.id); // Ej: nombre_celda_5
                    }
                },
                { 
                    title: 'Acciones', 
                    data: null,
                    defaultContent: '',
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" data-id="'+row.id+'" data-name="'+row.nombre_especialidad+'" id="btn_editar_esp" onclick="editar_esp('+row.id+', \''+row.nombre_especialidad+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                    '<button type="button" data-id="'+row.id+'" data-name="'+row.nombre_especialidad+'" id="btn_borrar_esp" onclick="borrar_esp('+row.id+', \''+row.nombre_especialidad+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button>';
                    },
                    createdCell: function (td, cellData, rowData) {
                        $(td).attr('id', 'acciones_celda_' + rowData.id); // Ej: acciones_celda_5
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
        form_esp.reset()
    }).catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
            if (error.response.data.error == 2) {
                Swal.fire({
                    icon: "error",
                    title: "Username ya existe",
                    text: "El username ingresado ya se encuentra registrado",
                });
            }
            if (error.response.data.error == 3) {
                Swal.fire({
                    icon: "error",
                    title: "Campo Vacío",
                    text: "No puede haber campos vacíos",
                });
            }
            if (error.response.data.error == 4) {
                Swal.fire({
                    icon: "error",
                    title: "La especialidad ya existe",
                    text: "La especialidad ya se encuentra registrado en la BD.",
                });
            }
        }
    });

}
// Editar especialidad Panel Doctor.
function editar_esp(id, nombre_especialidad){
    let modal_editar_esp_doc_admin = document.getElementById("modal_editar_esp_doc_admin")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_editar_esp_doc_admin);
    // Abre el modal
    modalInstance.show();
    //
    let id_edit_esp = document.getElementById("edit_id_esp_admin")
    id_edit_esp.value = id
    // Obtenemos el id del boton clode.
    const elemento = document.querySelector('#cerrar_modal_listar_grupo');
    //
    const token = sessionStorage.getItem('token');
    let name_edit = document.getElementById("edit_especialidad")
    name_edit.value = nombre_especialidad
    let btn_editar_nombre_grupo = document.getElementById("btn_editar_nombre_grupo")
    btn_editar_nombre_grupo.addEventListener("click", function(e){
        let edit_especialidad = document.getElementById("edit_especialidad").value
        if (edit_especialidad == null || edit_especialidad == "") {
            Swal.fire({
                icon: "error",
                title: "Falta el nombre del grupo",
                text: "No puede quedar el campo vacio!",
            });
        }else{
            const token = sessionStorage.getItem('token');
            let datos = {
                'nombre_especialidad':edit_especialidad
            }
            //
            axios.put(`http://127.0.0.1:8000/grupo/editar_grupo/${id}/`,datos, {
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
                        title: "Actualizado Correctamente",
                        text: "El grupo fue actualizado correctamente!",
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
    })
}
// Editar nombre de especialidad.
function editar_esp_admin(e){
    //
    let id_Edit = document.getElementById("edit_id_esp_admin").value
    let edit_especialidad = document.getElementById("edit_especialidad").value
    let arr = []
    let datos = {
        "nombre_especialidad": edit_especialidad
    }
    const token = sessionStorage.getItem('token');
    axios.put(`http://127.0.0.1:8000/especialidad/edit_especialidad/${id_Edit}/`,datos, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        console.warn(response.data);
        console.warn(response.status)
        let especialidad = response.data.especialidad
        arr.push(especialidad)
        if (response.status == 200) {
            Swal.fire({
                icon: "success",
                title: "Actualizado Correctamente",
                text: "La especialidad fue actualizada correctamente!",
            });
            //$("#tabla_esp").dataTable().destroy();
            var table = $('#tabla_esp').DataTable({
                data: especialidad,
                columns: [
                    { 
                        title: 'ID', 
                        data: "id",
                        defaultContent: '',
                        // Asignar ID al TD de esta columna
                        createdCell: function (td, cellData, rowData) {
                            $(td).attr('id', 'id_celda_' + rowData.id); // Ej: id_celda_5
                        }
                    },
                    { 
                        title: 'Nombre Especialidad', 
                        data: "nombre_especialidad",
                        defaultContent: '',
                        createdCell: function (td, cellData, rowData) {
                            $(td).attr('id', 'nombre_celda_' + rowData.id); // Ej: nombre_celda_5
                        }
                    },
                    { 
                        title: 'Acciones', 
                        data: null,
                        defaultContent: '',
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.nombre_especialidad+'" id="btn_editar_esp" onclick="editar_esp('+row.id+', \''+row.nombre_especialidad+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                        '<button type="button" data-id="'+row.id+'" data-name="'+row.nombre_especialidad+'" id="btn_borrar_esp" onclick="borrar_esp('+row.id+', \''+row.nombre_especialidad+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button>';
                        },
                        createdCell: function (td, cellData, rowData) {
                            $(td).attr('id', 'acciones_celda_' + rowData.id); // Ej: acciones_celda_5
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
            //modalInstance.hide();
            // Realizamos el click automático.
            //elemento.click();
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
// Función Eliminar Panel ADMIN.
function borrar_esp(id, especialidad){
    let arr = []
    Swal.fire({
        title: "¿Está seguro de eliminar la especialidad: " + especialidad+ "?",
        text: "¡La especialidad será eliminada !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar especialidad!"
      }).then((result) => {
        if (result.isConfirmed) {
            //
            const token = sessionStorage.getItem('token');
            axios.delete(`http://127.0.0.1:8000/especialidad/eliminar_especialidad/${id}/`, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            .then(function (response) {
                console.warn(response.data);
                console.warn(response.status)
                let especialidad = response.data.especialidad
                arr.push(especialidad)
                if (response.status == 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Especialidad Eliminada Correctamente",
                        text: "!La especialidad fué eliminada correctamente!",
                    });
                    var table = $('#tabla_esp').DataTable({
                        data: especialidad,
                        columns: [
                            { 
                                title: 'ID', 
                                data: "id",
                                defaultContent: '',
                                // Asignar ID al TD de esta columna
                                createdCell: function (td, cellData, rowData) {
                                    $(td).attr('id', 'id_celda_' + rowData.id); // Ej: id_celda_5
                                }
                            },
                            { 
                                title: 'Nombre Especialidad', 
                                data: "nombre_especialidad",
                                defaultContent: '',
                                createdCell: function (td, cellData, rowData) {
                                    $(td).attr('id', 'nombre_celda_' + rowData.id); // Ej: nombre_celda_5
                                }
                            },
                            { 
                                title: 'Acciones', 
                                data: null,
                                defaultContent: '',
                                orderable: false,
                                render: function(data, type, row) {
                                    return '<button type="button" data-id="'+row.id+'" data-name="'+row.nombre_especialidad+'" id="btn_editar_esp" onclick="editar_esp('+row.id+', \''+row.nombre_especialidad+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                '<button type="button" data-id="'+row.id+'" data-name="'+row.nombre_especialidad+'" id="btn_borrar_esp" onclick="borrar_esp('+row.id+', \''+row.nombre_especialidad+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button>';
                                },
                                createdCell: function (td, cellData, rowData) {
                                    $(td).attr('id', 'acciones_celda_' + rowData.id); // Ej: acciones_celda_5
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
function especialidades_list_doc(id, first_name){
    //
    const token = sessionStorage.getItem('token');
    let arr =[]
    axios.get(`http://127.0.0.1:8000/doctor/esp_doc_list/${id}/`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        //console.warn(response.data.grupos[0])
        let grupos = response.data.list_doctor
        grupos.forEach(element => {
            console.log(element.username)
            arr.push(element)
        });
        //
        var table = $('#listar_doctor').DataTable({
            data: arr,
            columns: [
                { title: 'ID', data: "id", defaultContent: '' },
                { title: 'Username', data: "username", defaultContent: '' },
                { title: 'Primer Nombre', data: "first_name", defaultContent: '' },
                { title: 'Apellidos', data: "last_name", defaultContent: '' },
                { title: 'Email', data: "email", defaultContent: '' },
                { title: 'Edad', data: "edad", defaultContent: '' },
                { title: 'Sexo', data: "sexo", defaultContent: '' },
                { title: 'Contacto', data: "fono", defaultContent: '' },
                { 
                    title: 'Acciones', 
                    data: null,
                    defaultContent: '',
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_doc" onclick="editar_especialidad('+row.id+', \''+row.first_name+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_doc" onclick="borrar_grupo('+row.id+', \''+row.first_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ' +
                                '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_esp_doc" onclick="especialidades_list_doc('+row.id+', \''+row.first_name+'\')" class="btn btn-sm borrar-btn" style="background:rgb(18, 236, 135)">Especialidades</button>';
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
function especialidades_list_doc(id, first_name){
    let todas_esp_doc = document.getElementById("todas_esp_doc")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(todas_esp_doc);
    // Abre el modal
    modalInstance.show();
    //
    let id_doc = document.getElementById("id_doc")
    id_doc.value = id
    const token = sessionStorage.getItem('token');
    let arr =[]
    axios.get(`http://127.0.0.1:8000/doctor/esp_doc_list/${id}/`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        //console.warn(response.data.grupos[0])
        let especialidades = response.data.especialidades;
        console.log(especialidades)
        //
        let doc_id = document.getElementById("id_doc").value
        var table = $('#tabla_esp_doct_admin').DataTable({
            data: especialidades,
            columns: [
                { title: 'ID', data: "id", defaultContent: '' },
                { title: 'Especialidad', data: "nombre_especialidad", defaultContent: '' },
                { 
                    title: 'Acciones', 
                    data: null,
                    defaultContent: '',
                    orderable: false,
                    render: function(data, type, row) {
                        return ' <button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_esp_doc_list_esp_doctor" onclick="eliminar_esp_doct_panel_admin('+row.id+', \''+row.nombre_especialidad+'\', '+doc_id+')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
function option_especialidad_nueva_doc(e){
    let select_especialidad_option = document.getElementById("select_especialidad_option")
    const token = sessionStorage.getItem('token');
    // Evitar múltiples peticiones si ya hay datos
    if (select_especialidad_option.options.length > 1) return;
    let arr =[]
    axios.get('http://127.0.0.1:8000/especialidad/especialidad_doctor',{
        headers: {
            'Authorization': `Token ${token}`
        }
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
            select_especialidad_option.appendChild(elegir_especialidad);
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
function agregar_esp_doct_admin(e){
    let modal_agregar_nueva_esp_doctor = document.getElementById("modal_agregar_nueva_esp_doctor")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_agregar_nueva_esp_doctor);
    // Abre el modal
    modalInstance.show();
}
//
function insert_nueva_esp_doctor_Admin(e){
    //
    let id_doc = document.getElementById("id_doc").value
    console.log(id_doc)
    let especialidad = document.getElementById("select_especialidad_option")
    const valor = especialidad.value;
    console.log(valor)
    const token = sessionStorage.getItem('token');
     let arr =[]
    let datos = {
        'especialidad_id': valor,
    }
    axios.post(`http://127.0.0.1:8000/doctor/nueva_esp_doctor_admin/${id_doc}/`,datos,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        //console.warn(response.data.grupos[0])
        let especialidades = response.data.especialidades;
        console.log(especialidades)
        let arr = []
        especialidades.forEach(esp => {
            console.log(`ID: ${esp.id}, Especialidad: ${esp.especialidad}`);
            arr.push(esp.id, esp.especialidad)
        });
        console.warn(arr)
        //
        var table = $('#tabla_esp_doct_admin').DataTable({
            data: especialidades,
            columns: [
                { title: 'ID', data: "id", defaultContent: '' },
                { title: 'Especialidad', data: "especialidad", defaultContent: '' },
                { 
                    title: 'Acciones', 
                    data: null,
                    defaultContent: '',
                    orderable: false,
                    render: function(data, type, row) {
                        return ' <button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_esp_doc" onclick="eliminar_esp_doct_panel_admin('+row.id+', \''+row.especialidad+'\', '+id_doc+')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
function eliminar_esp_doct_panel_admin(id_especialidad, especialidad, id_doctor){
    console.warn(id_especialidad)
    const token = sessionStorage.getItem('token');
    Swal.fire({
        title: "¿Desea eliminar la especialidad: " +especialidad+"?",
        text: "Se eliminará la especialidad al doctor.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, borrar!"
      }).then((result) => {
        if (result.isConfirmed) {
            let datos = {
                'id_especialidad': id_especialidad
            }
            axios.delete(`http://127.0.0.1:8000/doctor/borrar_esp_doctor/${id_doctor}/?id_especialidad=${id_especialidad}`,{
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            .then(function (response) {
                console.warn(response.data);
                console.warn(response.status)
                let especialidades = response.data.especialidades;
                console.warn(especialidades)
                if (response.status == 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Eliminada Especialidad",
                        text: "La especialidad fué eliminada correctamente!",
                    });
                    console.log(especialidades)
                    //
                    let doc_id = document.getElementById("id_doc").value
                    var table = $('#tabla_esp_doct_admin').DataTable({
                        data: especialidades,
                        columns: [
                            { title: 'ID', data: "id", defaultContent: '' },
                            { title: 'Especialidad', data: "especialidad", defaultContent: '' },
                            { 
                                title: 'Acciones', 
                                data: null,
                                defaultContent: '',
                                orderable: false,
                                render: function(data, type, row) {
                                    return ' <button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_esp_doc_list_esp_doctor" onclick="eliminar_esp_doct_panel_admin('+row.id+', \''+row.nombre_especialidad+'\', '+doc_id+')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
function borrar_user_doctor(id_doc, nombres, apellidos){
    const token = sessionStorage.getItem('token');
    let arr = []
    Swal.fire({
        title: "¿Desea eliminaral Doctor: " +nombres + ' ' +apellidos+ "?",
        text: "Se eliminará al doctor.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, borrar!"
      }).then((result) => {
        if (result.isConfirmed) {
            let datos = {
                'id_especialidad': id_doc
            }
            axios.delete(`http://127.0.0.1:8000/doctor/borrar_doctor/${id_doc}/`,{
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            .then(function (response) {
                console.warn(response.data);
                console.warn(response.status)
                let doc = response.data.list_doctor;
                if (response.status == 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Doctor Eliminado",
                        text: "El Doctor fué eliminado correctamente!",
                    });
                    console.log(doc)
                    //
                    let grupos = response.data.list_doctor
                    grupos.forEach(element => {
                        console.log(element.username)
                        arr.push(element)
                    });
                    console.warn(arr)
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
                            { 
                                title: 'Acciones',
                                data: null,
                                responsivePriority: 1, // Prioridad máxima (no se oculta)
                                className: 'no-wrap', // Clase para evitar saltos de línea
                                orderable: false,
                                render: function(data, type, row) {
                                    return '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_editar_doc" onclick="editar_doctor('+row.id_doctor+', \''+row.username+'\', \''+row.email+'\', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\', \''+row.ap_materno+'\', \''+row.ap_paterno+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                            '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_borrar_doc" onclick="borrar_user_doctor('+row.id_doctor+', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ' +
                                            '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_esp_doc" onclick="especialidades_list_doc('+row.id_doctor+', \''+row.primer_nombre+'\')" class="btn btn-sm borrar-btn" style="background:rgb(18, 236, 135)">Especialidades</button> ' +
                                            '<button type="button" data-id="'+row.id_doctor+'" data-name="'+row.primer_nombre+'" id="btn_esp_cli" onclick="clinica_doc('+row.id_doctor+', \''+row.primer_nombre+'\')" class="btn btn-sm" style="background:rgb(229, 150, 253)">Clínicas Doc</button>';
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
                            title: "El grupo ya existe",
                            text: "El grupo fue creado anteriormente!",
                        });
                    }
                }
            });
        }
    });
}
//----------------------------------- Fin Módulo Doctor -----------------------------------------------
//----------------------------------- Inicio Módulo Pascientes---------------------------------------------------------------------------
// 
function panel_pacientes(){
    let info = document.getElementById("panel_paciente")
    info.addEventListener("click", function(e){
        //
        const token = sessionStorage.getItem('token');
        let arr =[]
        axios.get('http://127.0.0.1:8000/paciente/listar_paciente',{
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        .then(function (response) {
            // 
            //console.warn(response.data.grupos[0])
            let grupos = response.data.pacientes
            grupos.forEach(element => {
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
        })
        .catch(error => {
            if (error.response) {
                console.log('Error Response:', error.response.data);
                console.log('Error Status:', error.response.status);
                console.log('Error Headers:', error.response.headers);
            }
        });
    })
}
panel_pacientes()
// Función para obtener la data de las reservas de los pacientes.
function reserva_calendar(){
    let select_adm_com_clin_pac = document.getElementById("select_adm_com_clin_pac").value
    let reserva_adm_pac_especialidad = document.getElementById("reserva_adm_pac_especialidad").value
    let select_adm_esp_pac = document.getElementById("select_adm_esp_pac").value
    let datos = {
        'id_clinica': select_adm_com_clin_pac,
        'id_especialidad': reserva_adm_pac_especialidad,
        'id_usuario': select_adm_esp_pac
    }
    // Full Callendar.
    let request_calendar = 'http://127.0.0.1:8000/paciente/reserva_paciente'
    //let request_calendar = '../../JS/events.json'
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        // Agregamos el idioma Español.
        locale: 'es',
        //initialView: 'dayGridMonth',
        initialView: 'timeGridWeek', // Vista inicial con horas
        slotDuration: '00:30:00', // Duración de los intervalos (30 minutos)
        slotMinTime: '08:00:00', // Mostrar desde las 8:00 AM
        slotMaxTime: '23:00:00', // Mostrar hasta las 8:00 PM
        validRange: {
            start: new Date().toLocaleDateString('en-CA') // Formato YYYY-MM-DD en la zona horaria local
        },
        // Agregamos los eventos.
        events: function(info, successCallback, failureCallback){
            fetch(request_calendar, {
                method: 'POST', // Cambiamos el método a POST
                headers: {
                    'Content-Type': 'application/json', // Indicamos que estamos enviando JSON
                },
                body: JSON.stringify(datos) // Convertimos el objeto "datos" a una cadena JSON y lo enviamos en el cuerpo
            })
            .then(function(data){
                console.warn(data)
                let events = data.events.map(function(event){
                    //console.warn(event.eventTitle)
                    // Estos son los formatos que tebemos de ejemplo.
                    return {
                        title: event.eventTitle,
                        start: new Date(event.eventStartDate),
                        end: new Date(event.eventEndDate),
                        url: event.eventUrl,
                        location: event.eventLocation,
                        timeStart: event.eventStartTime,
                        timeEnd: event.eventEndTime,
                    }
                })
                successCallback(events)
            })
            .catch(function(error){
                failureCallback(error)
            })
        },
        // Escuchador de eventos para clic en una hora
        dateClick: function(info) {
            console.warn(info.dateStr)
            // Muestra el modal aquí.
            abrir_modal_crear_paciente();
            let fechaFormateada = info.dateStr.toLocaleString('es-CL', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
            });
        },
        // Traemos todos los eventos disponibles.
        eventContent: function(info){
            // info; Nos devuelce todas las operaciones que odeos hacer con full calendar.
            //console.log(info)
            // Debemos retornar un Objeto.
            return {
                html: `
                    <div style="overflow: hidden; font-size:12px; position: relative; cursor: pointer; font-family: 'Inter', sans-serif; ">${info.event.title}

                        <div>Location:${info.event.extendedProps.location}</div>
                        <div>Date:${info.event.start.toLocaleDateString(
                            "es-US",
                            {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            }
                        )}</div>
                        <div>Time: ${info.event.extendedProps.timeStart} - ${info.event.extendedProps.timeEnd}
                        </div>
                    </div>
                `
            }
        },
        // Evento de Mouse.
        eventMouseEnter: function(mouseEnterInfo){
            // Elemento Visible.
            let el = mouseEnterInfo.el
            el.classList.add("relative")
            //
            let newEl = document.createElement("div")
            let newElTitle = mouseEnterInfo.event.title
            let newElLocation = mouseEnterInfo.event.extendedProps.location
            newEl.innerHTML = `
                <div
                    class="fc-hoverable-event"
                    style="position: absolute; bottom: 100%; left: 0; width: 300px; height: auto;
                    background-color: white; z-index: 50; border: 1px solid #e2e8f0; border-radius: 0.375rem;
                    padding: 0.75rem; font-size: 14px; font-family: 'Inter', sans-serif; cursor: pointer;"
                    >
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
            let cellDate = dayCellContent.date;
        
            if (cellDate < today) {
                return {
                    html: `<div style="color: gray; pointer-events: none;">${cellDate.getDate()}</div>`
                };
            }
        },
    });
    calendar.render();
}
//
function abrir_modal_crear_paciente(){
    let nuevo_pac_admin_panel = document.getElementById("nuevo_pac_admin_panel")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(nuevo_pac_admin_panel);
    // Abre el modal
    modalInstance.show();
}
// Enviar datos a la BD.
function adm_registrar_paciente(){
    const token = sessionStorage.getItem('token');
    //
    let username = document.getElementById("adm_paciente_username").value
    let password = document.getElementById("paciente_password").value
    let adm_paciente_primer_nombre = document.getElementById("adm_paciente_primer_nombre").value
    let adm_paciente_segundo_nombre = document.getElementById("adm_paciente_segundo_nombre").value
    let adm_paciente_ap_paterno = document.getElementById("adm_paciente_ap_paterno").value
    let adm_paciente_ap_materno = document.getElementById("adm_paciente_ap_materno").value
    let email = document.getElementById("adm_paciente_email").value
    let edad = document.getElementById("adm_paciente_edad").value
    let fono = document.getElementById("adm_paciente_fono").value
    let rut = document.getElementById("adm_paciente_rut").value
    let num_vivienda = document.getElementById("adm_paciente_num_vivienda").value
    //------- Valor Radio Button Sexo ---------
    let sexo = document.getElementsByName("adm_paciente_sexo")
    let valor_radio;
    sexo.forEach(radio => {
        if (radio.checked) {
            valor_radio = radio.value;
        }
    });
    //------- Fin Valor Radio Button Sexo ---------
    //------- Valor Radio Button Vivienda---------
    let vivienda = document.getElementsByName("adm_paciente_tipo_vivienda")
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
    // Agregamos el método para obtener todos losd pacientes.
    //paciente_nombre_clinica_paciente_registrado()
}
//
function editar_paciente(id_pac, username_pac, email, primer_nombre, segundo_nombre, ap_paterno, ap_materno, edad,sexo,rut,fono,region,comuna,vivienda, num_vivienda,password){
    let modal_edit_pac_admin_panel = document.getElementById("modal_edit_pac_admin_panel")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_edit_pac_admin_panel);
    // Abre el modal
    modalInstance.show();
    //
    let id_usuuario_pac = document.getElementById("id_usuario_pac")
    id_usuuario_pac.value = id_pac
    let usernames = document.getElementById("edit_adm_paciente_username")
    usernames.value = username_pac
    let pac_primer_nombre = document.getElementById("edit_adm_paciente_primer_nombre")
    pac_primer_nombre.value = primer_nombre
    let pac_segundo_nombre = document.getElementById("edit_adm_paciente_segundo_nombre")
    pac_segundo_nombre.value = segundo_nombre
    let edit_adm_paciente_ap_paterno= document.getElementById("edit_adm_ap_paterno")
    edit_adm_paciente_ap_paterno.value = ap_paterno
    let edit_adm_paciente_ap_materno= document.getElementById("edit_adm_ap_materno")
    edit_adm_paciente_ap_materno.value = ap_materno
    let edit_adm_paciente_email = document.getElementById("edit_adm_paciente_email")
    edit_adm_paciente_email.value = email
    let edit_adm_paciente_edad = document.getElementById("edit_adm_paciente_edad")
    edit_adm_paciente_edad.value = edad
    let edit_adm_paciente_fono = document.getElementById("edit_adm_paciente_fono")
    edit_adm_paciente_fono.value = fono
    let edit_adm_paciente_rut = document.getElementById("edit_adm_paciente_rut")
    edit_adm_paciente_rut.value = rut
    let edit_adm_paciente_num_viviendanum_vivienda = document.getElementById("edit_adm_paciente_num_vivienda")
    edit_adm_paciente_num_viviendanum_vivienda.value = num_vivienda
    //---------------------- Vivienda --------------------
    let adm_paciente_tipo_vivienda = document.getElementsByName("edit_adm_paciente_tipo_vivienda")
    adm_paciente_tipo_vivienda.forEach(radio => {
        if (radio.value === vivienda) {
            console.log(radio)
                radio.checked = true;
            }
    });
    //---------------------- Fin Vivienda ----------------
    //---------------------- Sexo --------------------
    let edit_sexo = document.getElementsByName("edit_adm_paciente_sexo")
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
function edit_panel_adm_paciente(e){
    //
    const token = sessionStorage.getItem('token');
    let id = document.getElementById("id_usuario_pac").value
    console.warn(id)
    let username = document.getElementById("edit_adm_paciente_username").value
    console.warn(username)

    let password = null
    password = document.getElementById("edit_adm_paciente_pass").value
    console.warn(password)
    if (password == '' || password == null) {
        password = 0
    }
    let adm_paciente_primer_nombre = document.getElementById("edit_adm_paciente_primer_nombre").value
    console.warn(adm_paciente_primer_nombre)
    let adm_paciente_segundo_nombre = document.getElementById("edit_adm_paciente_segundo_nombre").value
    console.warn(adm_paciente_segundo_nombre)
    let adm_paciente_ap_paterno = document.getElementById("edit_adm_ap_paterno").value
    console.warn(adm_paciente_ap_paterno)
    let adm_paciente_ap_materno = document.getElementById("edit_adm_ap_materno").value
    console.warn(adm_paciente_ap_materno)
    let email = document.getElementById("edit_adm_paciente_email").value
    console.warn(email)
    let edad = document.getElementById("edit_adm_paciente_edad").value
    console.warn(edad)
    let fono = document.getElementById("edit_adm_paciente_fono").value
    console.warn(fono)
    let rut = document.getElementById("edit_adm_paciente_rut").value
    console.warn(rut)
    let num_vivienda = document.getElementById("edit_adm_paciente_num_vivienda").value
    console.warn(num_vivienda)
    //------- Valor Radio Button Sexo ---------
    let sexo = document.getElementsByName("edit_adm_paciente_sexo")
    let valor_radio;
    sexo.forEach(radio => {
        if (radio.checked) {
            valor_radio = radio.value;
        }
    });
    console.log(valor_radio)
    //------- Fin Valor Radio Button Sexo ---------
    //------- Valor Radio Button Vivienda---------
    let vivienda = document.getElementsByName("edit_adm_paciente_tipo_vivienda")
    let valor_vivienda;
    vivienda.forEach(radio => {
        if (radio.checked) {
            valor_vivienda = radio.value;
        }
    });
    console.log(valor_vivienda)
    //------- Fin Valor Radio Button Vivienda ---------
    //-------------------- Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Región.
    let id_region = document.getElementById("edit_pac_region").value
    let region = document.getElementById("region_" + id_region).getAttribute("data-region")
    console.log(region)
    //------ Fin Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Comuna.
    let comuna = document.getElementById("edit_pac_comuna").value
    console.log(comuna)
    let arr = []
    //------ Fin Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Comuna.
    //-----  Creamos el array de bjetos. -------------
    let datos = {
        'username': username ,
        'password': password ,
        'primer_nombre': adm_paciente_primer_nombre,
        'segundo_nombre': adm_paciente_segundo_nombre,
        'email': email ,
        'edad': edad ,
        'fono': fono ,
        'rut': rut ,
        'num_vivienda': num_vivienda ,
        'sexo': valor_radio ,
        'vivienda': valor_vivienda ,
        'region': region ,
        'comuna': comuna ,
        'ap_paterno': adm_paciente_ap_paterno,
        'ap_materno': adm_paciente_ap_materno,
    }
    console.log(datos)
    axios.put(`http://127.0.0.1:8000/paciente/update_paciente/${id}/`,datos, {
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
function borrar_user_paciente(id, pac_primer_nombre, pac_segundo_nombre){
    const token = sessionStorage.getItem('token');
    let arr = []
    Swal.fire({
        title: "¿Desea eliminar al Paciente: " +pac_primer_nombre + ' ' +pac_segundo_nombre+ "?",
        text: "Se eliminará al doctor.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, borrar!"
      }).then((result) => {
        if (result.isConfirmed) {
            let datos = {
                'id_especialidad': id_doc
            }
            axios.delete(`http://127.0.0.1:8000/paciente/delete_paciente/${id}/`,{
                headers: {
                    'Authorization': `Token ${token}`
                }
            })
            .then(function (response) {
                console.warn(response.data);
                console.warn(response.status)
                let doc = response.data.list_doctor;
                if (response.status == 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Paciente Eliminado",
                        text: "El Paciente fué eliminado correctamente!",
                    });
                    console.log(doc)
                    //
                    let grupos = response.data.pacientes
                    grupos.forEach(element => {
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
function historial_user_paciente(id_usuario, nombre, apellido){
    let modal_historial_citas = document.getElementById("modal_historial_citas")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_historial_citas);
    // Abre el modal
    modalInstance.show();
    // Pasamos el id al input oculto.
    let id_paciente = document.getElementById("id_user_pac_reserva")
    id_paciente.value = id_usuario
    //
    const token = sessionStorage.getItem('token');
    let arr =[]
    axios.get(`http://127.0.0.1:8000/paciente/historial_user_paciente/${id_usuario}`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        //console.warn(response.data.grupos[0])
        let reserva = response.data.pacientes
        console.log(reserva)
        reserva.forEach(element => {
            arr.push(element)
        });
        //
        var table = $('#tabla_reserva_paciente_panel_admin').DataTable({
            responsive: true,
            data: arr,
            columns: [
                { title: 'ID Users', data: "fk_usuario", defaultContent: '' },
                { title: 'Fecha Reserva', data: "fecha_reserva", defaultContent: '' },
                { title: 'Especialidad', data: "especialidad", defaultContent: '' },
                { title: 'N. Doctor', data: "nombre_doctor", defaultContent: '' },
                { title: 'Tipo Pago', data: "tipo_pago", defaultContent: '' },
                { title: 'Cod. Reserva', data: "reserva_uuid", defaultContent: '' },
                { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                { title: 'Hora Inicio', data: "hora_inicio", defaultContent: '' },
                { title: 'Hora Término', data: "hora_termino", defaultContent: '' },
                { 
                    title: 'Acciones', 
                    data: null,
                    responsivePriority: 1, // Prioridad máxima (no se oculta)
                    className: 'no-wrap', // Clase para evitar saltos de línea
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" id="btn_borrar_cita_pac_adm" onclick="borrar_cita_user_paciente(\''+row.fk_usuario+'\', \''+row.nombre_paciente+'\',\''+row.fecha_reserva+'\', \''+row.especialidad+'\', \''+row.nombre_doctor+'\', \''+row.reserva_uuid+'\', \''+row.comuna_clinica+'\', \''+row.direccion_clinica+'\', \''+row.nombre_clinica+'\', \''+row.hora_inicio+'\', \''+row.hora_termino+'\')" class="btn btn-danger btn-sm">Borrar Cita</button> ';
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
function borrar_cita_user_paciente(fk_usuario, nombre_paciente,fecha_reserva,especialidad,nombre_doctor,reserva_uuid,comuna_clinica,direccion_clinica,nombre_clinica,hora_inicio, hora_termino){
    const token = sessionStorage.getItem('token');
    let arr = []
    let res_uuid = reserva_uuid
    Swal.fire({
        title: "¿Desea eliminar la cita del paciente: " +nombre_paciente + ' y su especialidad: ' +especialidad+ "?",
        text: "Se eliminará al doctor.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, borrar!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/reserva/delete_pac_reserva/${fk_usuario}/`,{
                headers: {
                    'Authorization': `Token ${token}`
                },
                data: {
                    res_uuid: res_uuid // Enviar res_uuid como dato
                }
            })
            .then(function (response) {
                console.warn(response.data);
                console.warn(response.status)
                if (response.status == 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Cita Eliminada Correctamente",
                        text: "La cita fué eliminada",
                    });
                    //console.warn(response.data.grupos[0])
                    let secretarias = response.data.reserva
                    secretarias.forEach(element => {
                        console.log(element.username)
                        arr.push(element)
                    });
                    console.warn(arr)
                    //
                    var table = $('#tabla_reserva_paciente_panel_admin').DataTable({
                        responsive: true,
                        data: arr,
                        columns: [
                            { title: 'ID', data: "id", defaultContent: '' },
                            { title: 'Fecha Reserva', data: "fecha_reserva", defaultContent: '' },
                            { title: 'Especialidad', data: "especialidad", defaultContent: '' },
                            { title: 'N. Doctor', data: "nombre_doctor", defaultContent: '' },
                            { title: 'Tipo Pago', data: "tipo_pago", defaultContent: '' },
                            { title: 'Cod. Reserva', data: "cod_reserva", defaultContent: '' },
                            { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                            { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                            { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                            { title: 'Hora Inicio', data: "hora_inicio", defaultContent: '' },
                            { title: 'Hora Término', data: "hora_termino", defaultContent: '' },
                            { 
                                title: 'Acciones', 
                                data: null,
                                responsivePriority: 1, // Prioridad máxima (no se oculta)
                                className: 'no-wrap', // Clase para evitar saltos de línea
                                orderable: false,
                                render: function(data, type, row) {
                                    return '<button type="button" id="btn_borrar_cita_pac_adm" onclick="borrar_cita_user_paciente('+row.id+', \''+row.nombre_paciente+'\',\''+row.fecha_reserva+'\', \''+row.especialidad+'\', \''+row.nombre_doctor+'\', \''+row.reserva_uuid+'\', \''+row.comuna_clinica+'\', \''+row.direccion_clinica+'\', \''+row.nombre_clinica+'\', \''+row.hora_inicio+'\', \''+row.hora_termino+'\')" class="btn btn-danger btn-sm">Borrar Cita</button> ';
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
function agregar_nueva_reserva_panel_adm(){
    //
    let modal_crear_cita_usuario_adm = document.getElementById("modal_crear_cita_usuario_adm")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_crear_cita_usuario_adm);
    // Abre el modal
    modalInstance.show();
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
// Abre el modal cuando se cierra el modal del full calendar.
function abrir_modal_anterior(){
    let modal_historial_citas = document.getElementById("modal_historial_citas")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_historial_citas);
    // Abre el modal
    modalInstance.show();
}
// Listar las especialidades disponibles para la creación de un Paciente con reserva de hra.
function select_esp_adm_panel_pac(){
    //
    let select_especialidad = document.getElementById("reserva_adm_pac_especialidad")
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
function valor_select_esp_adm_pac(){
    //
    const token = sessionStorage.getItem('token');
    //
    let select_adm_com_clin_pac = document.getElementById("select_adm_com_clin_pac").value
    console.log(select_adm_com_clin_pac)
    let select_especialidad = document.getElementById("reserva_adm_pac_especialidad").value
    console.log(select_especialidad)
    let select_adm_esp_pac = document.getElementById("select_adm_esp_pac");
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
    // //
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
            elegir_especialidad.textContent = element.nombres + ' ' + element.apellidos;
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
function comuna_clinica(){
    //
    let select_comuna = document.getElementById("select_adm_com_clin_pac")
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
//----------------------------------- Módulo Secretaria. ---------------------------------------------------
function panel_secretaria(){
    let info = document.getElementById("panel_secretaria")
    info.addEventListener("click", function(e){
        //
        const token = sessionStorage.getItem('token');
        console.log(token)
        let arr =[]
        axios.get('http://127.0.0.1:8000/secretaria/listar_secretaria',{
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        .then(function (response) {
            //console.warn(response.data.grupos[0])
            let grupos = response.data.secretarias
            grupos.forEach(element => {
                console.log(element.username)
                arr.push(element)
            });
            console.warn(arr)
            //
            var table = $('#tabla_secretaria').DataTable({
                responsive: true,
                data: arr,
                columns: [
                    { title: 'ID', data: "id_user", defaultContent: '' },
                    { title: 'Username', data: "username", defaultContent: '' },
                    { title: 'Primer Nombre', data: "primer_nombre", defaultContent: '' },
                    { title: 'Segundo Nombre', data: "segundo_nombre", defaultContent: '' },
                    { title: 'Ap. Paterno', data: "ap_paterno", defaultContent: '' },
                    { title: 'Ap. Materno', data: "ap_materno", defaultContent: '' },
                    { title: 'Email', data: "email", defaultContent: '' },
                    { title: 'Edad', data: "edad", defaultContent: '' },
                    { title: 'Sexo', data: "sexo", defaultContent: '' },
                    { title: 'Contacto', data: "fono", defaultContent: '' },
                    { title: 'Cod. Secretaria', data: "secretaria_uuid", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" id="btn_editar_secret_adm" onclick="modal_editar_secretaria('+row.id_user+', \''+row.username+'\',\''+row.primer_nombre+'\', \''+row.segundo_nombre+'\',\''+row.ap_paterno+'\',\''+row.ap_materno+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\',\''+row.fono+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" id="btn_borrar_secret_adm" onclick="borrar_user_secretaria('+row.id_user+', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ' +
                                    '<button type="button" id="btn_clin_secret_adm" onclick="obtener_clin_secretaria_panel_adm('+row.id_user+', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\')" class="btn btn-sm text-white" style="background:rgb(247, 102, 18)">Clínicas</button> ';
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
        })
        .catch(error => {
            if (error.response) {
                console.log('Error Response:', error.response.data);
                console.log('Error Status:', error.response.status);
                console.log('Error Headers:', error.response.headers);
            }
        });
    })
}
panel_secretaria()
//
function obtener_clinica_secretaria(){
    let select_clinica = document.getElementById("select_clinica_secretaria")
    const token = sessionStorage.getItem('token');
    // Evitar múltiples peticiones si ya hay datos
    if (select_clinica.options.length > 1) return;
    let arr =[]
    axios.get('http://127.0.0.1:8000/clinica/listar_clinica_adm',{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        const esp = response.data.list_clinica;
        //
        esp.forEach(element => {
            // Crear un NUEVO elemento option en cada iteración
            const elegir_clinica = document.createElement("option");
            elegir_clinica.value = element.id; // Usar ID como valor (mejor práctica)
            elegir_clinica.setAttribute("data-id", element.id)
            elegir_clinica.textContent = element.nombre_clinica;
            select_clinica.appendChild(elegir_clinica);
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
// Funcion para obtener las clinicas y agregarsekla a una secretaria.
function insert_nueva_clinica_secret_panel_adm(){
    let select_clinica = document.getElementById("insert_select_clinica_secretaria")
    const token = sessionStorage.getItem('token');
    // Evitar múltiples peticiones si ya hay datos
    if (select_clinica.options.length > 1) return;
    let arr =[]
    axios.get('http://127.0.0.1:8000/clinica/listar_clinica_adm',{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        const esp = response.data.list_clinica;
        //
        esp.forEach(element => {
            // Crear un NUEVO elemento option en cada iteración
            const elegir_clinica = document.createElement("option");
            elegir_clinica.value = element.id; // Usar ID como valor (mejor práctica)
            elegir_clinica.setAttribute("data-id", element.id)
            elegir_clinica.textContent = element.nombre_clinica;
            select_clinica.appendChild(elegir_clinica);
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
// Modal para Crear Secretaria.
function nuevo_secretaria(e){
    let modal_crear_secretaria = document.getElementById("modal_crear_secretaria")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_crear_secretaria);
    // Abre el modal
    modalInstance.show();
}
//
function registrar_secretaria(e){
    const token = sessionStorage.getItem('token');
    console.warn(token)
    let username = document.getElementById("crear_secretaria_adm_username").value
    let password = document.getElementById("crear_secretaria_adm_pass").value
    let primer_nombre = document.getElementById("crear_secretaria_adm_primer_nombre").value
    let segundo_nombre = document.getElementById("crear_secretaria_adm_segundo_nombre").value
    let ap_paterno = document.getElementById("crear_secretaria_adm_ap_paterno").value
    let ap_materno = document.getElementById("crear_secretaria_adm_ap_materno").value
    let email = document.getElementById("crear_secretaria_adm_email").value
    let edad = document.getElementById("crear_secretaria_adm_edad").value
    let fono = document.getElementById("crear_secretaria_fono").value
    let rut = document.getElementById("crear_secretaria_rut").value
    let clinica_secretaria = document.getElementById("select_clinica_secretaria").value
    console.log(clinica_secretaria)
    //------- Valor Radio Button Sexo ---------
    let sexo = document.getElementsByName("crear_secretaria_adm_sexo")
    let valor_radio;
    sexo.forEach(radio => {
        if (radio.checked) {
            valor_radio = radio.value;
        }
    });
    //------- Fin Valor Radio Button Sexo ---------
    let arr = []
    //------ Fin Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Comuna.
    //-----  Creamos el array de bjetos. -------------
    let datos = {
        'username': username ,
        'password': password ,
        'primer_nombre': primer_nombre ,
        'segundo_nombre': segundo_nombre ,
        'ap_paterno': ap_paterno,
        'ap_materno': ap_materno,
        'email': email ,
        'edad': edad ,
        'fono': fono ,
        'rut': rut ,
        'sexo': valor_radio ,
        'id_clinica': clinica_secretaria,
    }
    console.log(datos)
    axios.post(`http://127.0.0.1:8000/secretaria/crear_secretaria`,datos,{
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
                title: "Secretaria Registrada Correctamente",
                text: "Secretaria Registrada",
            });
            //
            let secretarias = response.data.secretarias
            console.warn(response.data.secretarias)
            secretarias.forEach(element => {
                console.log(element.username)
                arr.push(element)
            });
            console.warn(arr)
            //
            if ($.fn.DataTable.isDataTable('#tabla_secretaria')) {
                $('#tabla_secretaria').DataTable().destroy();
                $('#tabla_secretaria').empty(); // Limpia la tabla antes de inicializarla nuevamente
            }
            var table = $('#tabla_secretaria').DataTable({
                responsive: true,
                data: arr,
                columns: [
                    { title: 'ID', data: "id_user", defaultContent: '' },
                    { title: 'Username', data: "username", defaultContent: '' },
                    { title: 'Primer Nombre', data: "primer_nombre", defaultContent: '' },
                    { title: 'Segundo Nombre', data: "segundo_nombre", defaultContent: '' },
                    { title: 'Ap. Paterno', data: "ap_paterno", defaultContent: '' },
                    { title: 'Ap. Materno', data: "ap_materno", defaultContent: '' },
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
                            return '<button type="button" id="btn_editar_secret_adm" onclick="modal_editar_secretaria('+row.id_user+', \''+row.username+'\',\''+row.primer_nombre+'\', \''+row.segundo_nombre+'\',\''+row.ap_paterno+'\',\''+row.ap_materno+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\',\''+row.fono+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" id="btn_borrar_secret_adm" onclick="borrar_user_secretaria('+row.id_user+', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ' +
                                    '<button type="button" id="btn_clin_secret_adm" onclick="obtener_clin_secretaria_panel_adm('+row.id_user+', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\')" class="btn btn-sm" style="background: #f3d27e">Clínicas</button> ';
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
// Obtener todas las clinicas a la cual pertenece la secretaria.
function obtener_clin_secretaria_panel_adm(id_user, primer_nombre, seg_nombre){
    let id_user_secretaria = document.getElementById("id_user_secretaria")
    id_user_secretaria.value = id_user
    //
    let arr = []
    const token = sessionStorage.getItem('token');
    //
    let modal_todas_clin_secretaria_panel_admin = document.getElementById("modal_todas_clin_secretaria_panel_admin")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_todas_clin_secretaria_panel_admin);
    // Abre el modal
    modalInstance.show();
    axios.get(`http://127.0.0.1:8000/secretaria/obtener_clin_secretaria/${id_user}/`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        console.warn(response.data);
        console.warn(response.status)
        if (response.status == 200) {
            //
            console.warn(response.data.clinicas)
            //
            let clinicas = response.data.clinicas
            //
            clinicas.forEach(element => {
                console.log(element.username)
                arr.push(element)
            });
            console.warn(arr)
            //
            if ($.fn.DataTable.isDataTable('#tabla_clinica_secret_panel_admin')) {
                $('#tabla_clinica_secret_panel_admin').DataTable().destroy();
                $('#tabla_clinica_secret_panel_admin').empty(); // Limpia la tabla antes de inicializarla nuevamente
            }
            var table = $('#tabla_clinica_secret_panel_admin').DataTable({
                responsive: true,
                data: arr,
                columns: [
                    { title: 'ID', data: "id_clinica", defaultContent: '' },
                    { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                    { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                    { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" id="btn_borrar_clin_secret_adm" onclick="borrar_clin_secretaria(\''+row.id_clinica+'\', \''+id_user+'\', \''+row.nombre_clinica+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
// Función para insertar una nueva clinica a una secretaria.
function insert_nueva_clin_secret_panel_adm(){
    //
    const token = sessionStorage.getItem('token');
    //
    let modal_insert_clin_secretaria_panel_admin = document.getElementById("modal_insert_clin_secretaria_panel_admin")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_insert_clin_secretaria_panel_admin);
    // Abre el modal
    modalInstance.show();
}
// Funcionar para enviar los datos al Backend e agregar una nueva clinica a la secretaria.
function enviar_nueva_clinica_secretaria(){
    let arr = []
    const token = sessionStorage.getItem('token');
    let insert_select_clinica_secretaria = document.getElementById("insert_select_clinica_secretaria").value
    let id_user_secretaria = document.getElementById("id_user_secretaria").value
    let id_secretaria = '';
    let datos = {
        'id_clinica': insert_select_clinica_secretaria,
        'id_user_secretaria': id_user_secretaria,
    }
    //
    axios.post(`http://127.0.0.1:8000/secretaria/agregar_clin_secretaria_panel_adm`,datos,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        console.warn(response.data);
        console.warn(response.status)
        if (response.status == 200) {
            //
            console.warn(response.data.clinicas)
            //
           
            //
            let clinicas = response.data.clinicas
            //
            clinicas.forEach(element => {
                arr.push(element)
            });
            console.warn(arr)
            //
            var table = $('#tabla_clinica_secret_panel_admin').DataTable({
                responsive: true,
                data: arr,
                columns: [
                    { title: 'ID', data: "id_clinica", defaultContent: '' },
                    { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                    { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                    { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                    { 
                        title: 'Acciones',
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" id="btn_borrar_clin_secret_adm" onclick="borrar_clin_secretaria(\''+row.id_clinica+'\', \''+id_user_secretaria+'\', \''+row.nombre_clinica+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
             Swal.fire({
                icon: "success",
                title: "Clínca Agregada Correctamente",
                text: "Se ha agregado la clínica a la secretaria",
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
// Borrar una clinica unida a la secretaria desde el panel ADM.
function borrar_clin_secretaria(id_clin, id_user_secret, name_clinica){
    const token = sessionStorage.getItem('token');
    let arr = []
    Swal.fire({
        title: "¿Desea eliminar a la Clinica: " +name_clinica+ "?",
        text: "Se eliminará la clínica.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, borrar!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/secretaria/delete_clin_secretaria/${id_clin}/${id_user_secret}/`,{
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
                    let secretarias = response.data.secretarias
                    secretarias.forEach(element => {
                        console.log(element.username)
                        arr.push(element)
                    });
                    console.warn(arr)
                    //
                    var table = $('#tabla_clinica_secret_panel_admin').DataTable({
                        responsive: true,
                        data: arr,
                        columns: [
                            { title: 'ID', data: "id_clinica", defaultContent: '' },
                            { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                            { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                            { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                            { 
                                title: 'Acciones',
                                data: null,
                                responsivePriority: 1, // Prioridad máxima (no se oculta)
                                className: 'no-wrap', // Clase para evitar saltos de línea
                                orderable: false,
                                render: function(data, type, row) {
                                    return '<button type="button" id="btn_borrar_clin_secret_adm" onclick="borrar_clin_secretaria(\''+row.id_clinica+'\', \''+id_user_secretaria+'\', \''+row.nombre_clinica+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
function modal_editar_secretaria(id, username,primer_nombre, segundo_nombre, ap_paterno, ap_materno, email,edad,sexo,rut,fono){
    
    //
    let id_usuuario_secretaria = document.getElementById("id_usuario_secretaria")
    id_usuuario_secretaria.value = id
    let edit_adm_secretaria_username = document.getElementById("edit_adm_secretaria_username")
    edit_adm_secretaria_username.value = username
    let edit_adm_secretaria_primer_nombre = document.getElementById("edit_adm_secretaria_primer_nombre")
    edit_adm_secretaria_primer_nombre.value = primer_nombre
    let edit_adm_secretaria_segundo_nombre = document.getElementById("edit_adm_secretaria_segundo_nombre")
    edit_adm_secretaria_segundo_nombre.value = segundo_nombre
    let edit_adm_secretaria_ap_paterno = document.getElementById("edit_adm_secretaria_ap_paterno")
    edit_adm_secretaria_ap_paterno.value = ap_paterno
    let edit_adm_secretaria_ap_materno = document.getElementById("edit_adm_secretaria_ap_materno")
    edit_adm_secretaria_ap_materno.value = ap_materno
    let edit_adm_secretaria_email = document.getElementById("edit_adm_secretaria_email")
    edit_adm_secretaria_email.value = email
    let edit_adm_secretaria_edad = document.getElementById("edit_adm_secretaria_edad")
    edit_adm_secretaria_edad.value = edad
    let edit_adm_secretaria_fono = document.getElementById("edit_adm_secretaria_fono")
    edit_adm_secretaria_fono.value = fono
    let edit_adm_secretaria_rut = document.getElementById("edit_adm_secretaria_rut")
    edit_adm_secretaria_rut.value = rut
    //---------------------- Sexo --------------------
    let edit_sexo = document.getElementsByName("edit_adm_secretaria_sexo")
    edit_sexo.forEach(radio => {
        if (radio.value === sexo) {
            console.log(radio)
                radio.checked = true;
            }
    });
    //---------------------- Fin Sexo ----------------
    let modal_editar_secretaria = document.getElementById("modal_editar_secretaria")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_editar_secretaria);
    // Abre el modal
    modalInstance.show();
}
//
function editando_secretaria(){
    //
    let password = null
    password = document.getElementById("edit_adm_secretaria_pass").value
    //
    if (password.trim() === "") {
        password = "0"
    }
    //
    let id_usuuario_secretaria = document.getElementById("id_usuario_secretaria").value
    let edit_adm_secretaria_username = document.getElementById("edit_adm_secretaria_username").value
    let edit_adm_secretaria_primer_nombre = document.getElementById("edit_adm_secretaria_primer_nombre").value
    let edit_adm_secretaria_segundo_nombre = document.getElementById("edit_adm_secretaria_segundo_nombre").value
    let edit_adm_secretaria_ap_paterno = document.getElementById("edit_adm_secretaria_ap_paterno").value
    let edit_adm_secretaria_ap_materno = document.getElementById("edit_adm_secretaria_ap_materno").value
    let edit_adm_secretaria_email = document.getElementById("edit_adm_secretaria_email").value
    let edit_adm_secretaria_edad = document.getElementById("edit_adm_secretaria_edad").value
    let edit_adm_secretaria_fono = document.getElementById("edit_adm_secretaria_fono").value
    let edit_adm_secretaria_rut = document.getElementById("edit_adm_secretaria_rut").value
    //------- Valor Radio Button Sexo ---------
    let sexo = document.getElementsByName("edit_adm_secretaria_sexo")
    let valor_radio;
    sexo.forEach(radio => {
        if (radio.checked) {
            valor_radio = radio.value;
        }
    });
    //------- Fin Valor Radio Button Sexo ---------
    let arr = []
    //------ Fin Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Comuna.
    //-----  Creamos el array de bjetos. -------------
    let datos = {
        'username': edit_adm_secretaria_username ,
        'password': password ,
        'primer_nombre': edit_adm_secretaria_primer_nombre ,
        'segundo_nombre': edit_adm_secretaria_segundo_nombre ,
        'email': edit_adm_secretaria_email ,
        'edad': edit_adm_secretaria_edad ,
        'fono': edit_adm_secretaria_fono ,
        'rut': edit_adm_secretaria_rut ,
        'sexo': valor_radio ,
        'ap_paterno': edit_adm_secretaria_ap_paterno,
        'ap_materno': edit_adm_secretaria_ap_materno, 
    }
    axios.put(`http://127.0.0.1:8000/secretaria/update_secretaria/${id_usuuario_secretaria}/`,datos, {
        
    })
    .then(function (response) {
        console.warn(response.data);
        console.warn(response.status)
        if (response.status == 200) {
            Swal.fire({
                icon: "success",
                title: "Secretaria Editada Correctamente",
                text: "Se edita la información de la secretaria",
            });
            //console.warn(response.data.grupos[0])
            let secretarias = response.data.secretarias
            secretarias.forEach(element => {
                console.log(element.username)
                arr.push(element)
            });
            console.warn(arr)
            //
            var table = $('#tabla_secretaria').DataTable({
                responsive: true,
                data: arr,
                columns: [
                    { title: 'ID', data: "id_user", defaultContent: '' },
                    { title: 'Username', data: "username", defaultContent: '' },
                    { title: 'Primer Nombre', data: "primer_nombre", defaultContent: '' },
                    { title: 'Segundo Nombre', data: "segundo_nombre", defaultContent: '' },
                    { title: 'Ap. Paterno', data: "ap_paterno", defaultContent: '' },
                    { title: 'Ap. Materno', data: "ap_materno", defaultContent: '' },
                    { title: 'Email', data: "email", defaultContent: '' },
                    { title: 'Edad', data: "edad", defaultContent: '' },
                    { title: 'Sexo', data: "sexo", defaultContent: '' },
                    { title: 'Contacto', data: "fono", defaultContent: '' },
                    { title: 'Cod. Secretaria', data: "secretaria_uuid", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" id="btn_editar_secret_adm" onclick="modal_editar_secretaria('+row.id_user+', \''+row.username+'\',\''+row.primer_nombre+'\', \''+row.segundo_nombre+'\',\''+row.ap_paterno+'\',\''+row.ap_materno+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\',\''+row.fono+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" id="btn_borrar_secret_adm" onclick="borrar_user_secretaria('+row.id_user+', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
function borrar_user_secretaria(id, primer_nombre, segundo_nombre){
    const token = sessionStorage.getItem('token');
    let arr = []
    Swal.fire({
        title: "¿Desea eliminar a la Secretaria: " +primer_nombre + ' ' +segundo_nombre+ "?",
        text: "Se eliminará al doctor.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, borrar!"
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://127.0.0.1:8000/secretaria/delete_secretaria/${id}/`,{
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
                        title: "Secretaria Registrada Correctamente",
                        text: "secretaria registrada",
                    });
                    //console.warn(response.data.grupos[0])
                    let secretarias = response.data.secretarias
                    secretarias.forEach(element => {
                        console.log(element.username)
                        arr.push(element)
                    });
                    console.warn(arr)
                    //
                    var table = $('#tabla_secretaria').DataTable({
                        responsive: true,
                        data: arr,
                        columns: [
                            { title: 'ID', data: "id_user", defaultContent: '' },
                            { title: 'Username', data: "username", defaultContent: '' },
                            { title: 'Primer Nombre', data: "primer_nombre", defaultContent: '' },
                            { title: 'Segundo Nombre', data: "segundo_nombre", defaultContent: '' },
                            { title: 'Ap. Paterno', data: "ap_paterno", defaultContent: '' },
                            { title: 'Ap. Materno', data: "ap_materno", defaultContent: '' },
                            { title: 'Email', data: "email", defaultContent: '' },
                            { title: 'Edad', data: "edad", defaultContent: '' },
                            { title: 'Sexo', data: "sexo", defaultContent: '' },
                            { title: 'Contacto', data: "fono", defaultContent: '' },
                            { title: 'Cod. Secretaria', data: "secretaria_uuid", defaultContent: '' },
                            { 
                                title: 'Acciones', 
                                data: null,
                                responsivePriority: 1, // Prioridad máxima (no se oculta)
                                className: 'no-wrap', // Clase para evitar saltos de línea
                                orderable: false,
                                render: function(data, type, row) {
                                    return '<button type="button" id="btn_editar_secret_adm" onclick="modal_editar_secretaria('+row.id_user+', \''+row.username+'\',\''+row.primer_nombre+'\', \''+row.segundo_nombre+'\',\''+row.ap_paterno+'\',\''+row.ap_materno+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\',\''+row.fono+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                                            '<button type="button" id="btn_borrar_secret_adm" onclick="borrar_user_secretaria('+row.id_user+', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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
                            title: "El grupo ya existe",
                            text: "El grupo fue creado anteriormente!",
                        });
                    }
                }
            });
        }
    });
}
//----------------------------------- Fin Módulo Secretaria. -----------------------------------------------
//----------------------------------- Módulo Cardiología. ------------------------------------------------------
function cargar_info_cardiologia(){
    //
    const token = sessionStorage.getItem('token');
    let arr =[]
    axios.get('http://127.0.0.1:8000/cardiologia/listar_info_cardiologia',{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        //console.warn(response.data.grupos[0])
        let especialidad = response.data.especialidad
        arr.push(especialidad)
        //
        var table = $('#tabla_esp').DataTable({
            data: especialidad,
            columns: [
                { 
                    title: 'ID', 
                    data: "id",
                    defaultContent: '',
                    // Asignar ID al TD de esta columna
                    createdCell: function (td, cellData, rowData) {
                        $(td).attr('id', 'id_celda_' + rowData.id); // Ej: id_celda_5
                    }
                },
                { 
                    title: 'Nombre Especialidad', 
                    data: "nombre_especialidad",
                    defaultContent: '',
                    createdCell: function (td, cellData, rowData) {
                        $(td).attr('id', 'nombre_celda_' + rowData.id); // Ej: nombre_celda_5
                    }
                },
                { 
                    title: 'Acciones', 
                    data: null,
                    defaultContent: '',
                    orderable: false,
                    render: function(data, type, row) {
                        return '<button type="button" data-id="'+row.id+'" data-name="'+row.nombre_especialidad+'" id="btn_editar_esp" onclick="editar_esp('+row.id+', \''+row.nombre_especialidad+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                '<button type="button" data-id="'+row.id+'" data-name="'+row.nombre_especialidad+'" id="btn_borrar_esp" onclick="borrar_esp('+row.id+', \''+row.nombre_especialidad+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button>';
                    },
                    createdCell: function (td, cellData, rowData) {
                        $(td).attr('id', 'acciones_celda_' + rowData.id); // Ej: acciones_celda_5
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
    })
    .catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
        }
    });
}
//----------------------------------- Fin Módulo Cardiología. --------------------------------------------------
//----------------------------------- Módulo Info Historial Citas -----------------------------------------------
function historial_citas(){
    let arr =[]
    //
    axios.get('http://127.0.0.1:8000/reserva/historial_reserva',{
    })
    .then(function (response) {
        // 
        const esp = response.data.reserva;
        //
        esp.forEach(element => {
            // Crear un NUEVO elemento option en cada iteración
            console.log(element)
            arr.push(element)
        });
        console.warn(arr)
        //
        var table = $('#tabla_info_historial_reserva').DataTable({
            responsive: arr,
            data: arr,
            columns: [
                { title: 'ID', data: "id_reserva", defaultContent: '' },
                { title: 'Nombre Paciente', data: "nombre_paciente", defaultContent: '' },
                { title: 'Especialidad', data: "especialidad", defaultContent: '' },
                { title: 'Nombre Doctor', data: "nombre_doctor", defaultContent: '' },
                { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                { 
                    title: 'Fecha Reserva', 
                    data: "fecha_reserva", 
                    defaultContent: '',
                    render: function (data, type, row) {
                        if (!data) return '';
                    
                        let partes = data.split('-'); // Separar el año, mes y día
                        let dia = partes[2];
                        let mes = partes[1];
                        let anio = partes[0];
                    
                        return `${dia}-${mes}-${anio}`;
                    }
                },
                { title: 'Hora Inicio', data: "hora_inicio", defaultContent: '' },
                { title: 'Hora Término', data: "hora_termino", defaultContent: '' },
                { 
                    title: 'Fecha Creación Reserva', 
                    data: "fecha_creacion_reserva", 
                    defaultContent: '',
                    render: function (data, type, row) {
                        if (!data) return '';
                
                        let fecha = new Date(data); 
                        let dia = ('0' + fecha.getDate()).slice(-2);
                        let mes = ('0' + (fecha.getMonth() + 1)).slice(-2);
                        let anio = fecha.getFullYear().toString().slice(-2); // Obtener solo los últimos dos dígitos del año
                
                        return `${dia}-${mes}-${anio}`;
                    }
                },
                { title: 'Cod. Reserva', data: "reserva_uuid", defaultContent: '' },
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
    })
    .catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
             Swal.fire({
                icon: "error",
                title: "No existen reservas",
                text: "No se encontraron reservas.",
            });
        }
    });
}
//----------------------------------- Fin Módulo Info Historial Citas -----------------------------------------------
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