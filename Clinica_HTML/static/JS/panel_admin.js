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
        container_cita_user_info.style.display = "none"
    })
    let panel_cita_cardiologia = document.getElementById("panel_cita_cardiologia")
    panel_cita_cardiologia.addEventListener("click", function(){
        let container_cita_user_info = document.getElementById("container_cita_user_info")
        container_cita_user_info.style.display = "block"
        let container_panel_cardiologia = document.getElementById("container_panel_cardiologia")
        console.log(container_panel_cardiologia)
        container_panel_cardiologia.style.display = "block"
        cargar_info_cardiologia()

        // let container_panel_pediatria = document.getElementById("container_panel_pediatria")
        // container_panel_pediatria.style.display = "none"

        // let container_panel_modulo_psicologia = document.getElementById("container_panel_modulo_psicologia")
        // container_panel_modulo_psicologia.style.display = "none"
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
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_doc" onclick="editar_doctor('+row.id+', \''+row.username+'\',\''+row.password+'\', \''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.rut+'\', \''+row.sexo+'\', \''+row.fono+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_doc" onclick="borrar_user_doctor('+row.id+', \''+row.first_name+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_esp_doc" onclick="especialidades_list_doc('+row.id+', \''+row.first_name+'\')" class="btn btn-sm borrar-btn" style="background:rgb(18, 236, 135)">Especialidades</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_esp_doc" onclick="clinica_doc('+row.id+', \''+row.first_name+'\')" class="btn btn-sm" style="background:rgb(229, 150, 253)">Clínicas Doc</button>';
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
function editar_doctor(id, username, password, nombreDoctor,apellidoDoctor, email, edad, rutDoctor,sexo, fono){
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
    let edit_doc_password = document.getElementById("edit_doc_password")
    edit_doc_password.value = password;
    let edit_doc_first_name = document.getElementById("edit_doc_first_name")
    edit_doc_first_name.value = nombreDoctor;
    let edit_doc_last_name = document.getElementById("edit_doc_last_name")
    edit_doc_last_name.value = apellidoDoctor;
    let edit_doc_email = document.getElementById("edit_doc_email")
    edit_doc_email.value = email;
    let edit_doc_edad = document.getElementById("edit_doc_edad")
    edit_doc_edad.value = edad;
    let edit_doc_rut = document.getElementById("edit_doc_rut")
    edit_doc_rut.value = rutDoctor;
    let edit_doc_fono = document.getElementById("edit_doc_fono")
    edit_doc_fono.value = fono;
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
    let edit_doc_password = document.getElementById("edit_doc_password").value
    let edit_doc_first_name = document.getElementById("edit_doc_first_name").value
    let edit_doc_last_name = document.getElementById("edit_doc_last_name").value
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
        'first_name': edit_doc_first_name,
        'last_name': edit_doc_last_name,
        'email': edit_doc_email,
        'edad': edit_doc_edad,
        'rut': edit_doc_rut,
        'fono': edit_doc_fono,
        'sexo': valor_radio,
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
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_doc" onclick="editar_doctor('+row.id+', \''+row.username+'\',\''+row.password+'\', \''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.rut+'\', \''+row.sexo+'\', \''+row.fono+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_doc" onclick="borrar_user_doctor('+row.id+', \''+row.first_name+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_esp_doc" onclick="especialidades_list_doc('+row.id+', \''+row.first_name+'\')" class="btn btn-sm borrar-btn" style="background:rgb(18, 236, 135)">Especialidades</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_esp_doc" onclick="clinica_doc('+row.id+', \''+row.first_name+'\')" class="btn btn-sm" style="background:rgb(229, 150, 253)">Clínicas Doc</button>';
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
    let first_name = document.getElementById("first_name").value
    //console.warn(first_name)
    let last_name = document.getElementById("last_name").value
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
    console.log(valor_select_clinica)
    //const texto = especialidad.options[especialidad.selectedIndex].text;
    //console.log(texto)
    let datos = {
        'username': username,
        'password': password,
        'first_name': first_name,
        'last_name': last_name,
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
        let grupos = response.data.list_doctor
            grupos.forEach(element => {
                console.log(element.username)
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
                data: grupos,
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
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_grupo" onclick="editar_grupo('+row.id+', \''+row.first_name+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_grupo" onclick="borrar_user_doctor('+row.id+', \''+row.first_name+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_esp_doc" onclick="especialidades_list_doc('+row.id+', \''+row.first_name+'\')" class="btn btn-sm borrar-btn" style="background:rgb(18, 236, 135)">Especialidades</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_esp_doc" onclick="clinica_doc('+row.id+', \''+row.first_name+'\')" class="btn btn-sm" style="background:rgb(229, 150, 253)">Clínicas Doc</button>';
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
    //
    let container_grupo = document.getElementById("container_grupo")
    container_grupo.style.display = "block"
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
function modal_editar_grupo(id, nombre){
    let modal_editar_grupo = document.getElementById("modal_editar_grupo")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_editar_grupo);
    // Abre el modal
    modalInstance.show();
    let name_edit = document.getElementById("edit_nombre_grupo")
    name_edit.value = nombre
    let id_grupo = document.getElementById("id_grupo")
    id_grupo.value = id
}
//
function editar_nombre_grupo_panel_admin(e){
    //
    const token = sessionStorage.getItem('token');
    let btn_editar_nombre_grupo = document.getElementById("btn_editar_nombre_grupo")
    let id = document.getElementById("id_grupo").value
    let arr = []
    let name = document.getElementById("edit_nombre_grupo").value
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
        // 
        //console.warn(response.data.grupos[0])
        let grupos = response.data.list_doctor
        grupos.forEach(element => {
            console.log(element.username)
            arr.push(element)
        });
        console.warn(arr)
        debugger
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
                                    return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_doc" onclick="editar_doctor('+row.id+', \''+row.username+'\', \''+row.password+'\',\''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.rut+'\', \''+row.sexo+'\', \''+row.fono+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                            '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_doc" onclick="borrar_user_doctor('+row.id+', \''+row.first_name+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ' +
                                            '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_esp_doc" onclick="especialidades_list_doc('+row.id+', \''+row.first_name+'\')" class="btn btn-sm borrar-btn" style="background:rgb(18, 236, 135)">Especialidades</button> ' + 
                                            '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_esp_doc" onclick="clinica_doc('+row.id+', \''+row.first_name+'\')" class="btn btn-sm" style="background:rgb(229, 150, 253)">Especialidades</button>';
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
                    { title: 'ID', data: "id", defaultContent: '' },
                    { title: 'Username', data: "username", defaultContent: '' },
                    { title: 'Primer Nombre', data: "first_name", defaultContent: '' },
                    { title: 'Apellidos', data: "last_name", defaultContent: '' },
                    { title: 'Email', data: "email", defaultContent: '' },
                    { title: 'Edad', data: "edad", defaultContent: '' },
                    { title: 'Sexo', data: "sexo", defaultContent: '' },
                    { title: 'Contacto', data: "fono", defaultContent: '' },
                    { title: 'Region', data: "region", defaultContent: '' },
                    { title: 'Comuna', data: "comuna", defaultContent: '' },
                    { title: 'Vivienda', data: "vivienda", defaultContent: '' },
                    { title: 'num_vivienda', data: "num_vivienda", defaultContent: '' },
                    { title: 'Cod. Paciente', data: "usuario_uuid", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_pac_adm" onclick="editar_paciente('+row.id+', \''+row.username+'\', \''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\', \''+row.region+'\', \''+row.comuna+'\', \''+row.vivienda+'\', \''+row.num_vivienda+'\', \''+row.password+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_pac_adm" onclick="borrar_user_paciente('+row.id+', \''+row.first_name+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
                        }
                    },
                    { title: 'Password', data: "password", defaultContent: '' },
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
//
function abrir_modal_crear_paciente(e){
    let nuevo_pac_admin_panel = document.getElementById("nuevo_pac_admin_panel")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(nuevo_pac_admin_panel);
    // Abre el modal
    modalInstance.show();
}
// Enviar datos a la BD.
function adm_registrar_paciente(){
    let username = document.getElementById("adm_paciente_username").value
    let password = document.getElementById("paciente_password").value
    let first_name = document.getElementById("adm_paciente_first_name").value
    let last_name = document.getElementById("adm_paciente_last_name").value
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
    console.log(valor_vivienda)
    //------- Fin Valor Radio Button Vivienda ---------
    //-------------------- Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Región.
    let id_region = document.getElementById("region").value
    let region = document.getElementById("region_" + id_region).getAttribute("data-region")
    console.log(region)
    //------ Fin Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Comuna.
    let comuna = document.getElementById("comuna").value
    console.log(comuna)
    let arr = []
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
    axios.post(`http://127.0.0.1:8000/paciente/crear_paciente`,datos, {
        
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
                    { title: 'ID', data: "id", defaultContent: '' },
                    { title: 'Username', data: "username", defaultContent: '' },
                    { title: 'Primer Nombre', data: "first_name", defaultContent: '' },
                    { title: 'Apellidos', data: "last_name", defaultContent: '' },
                    { title: 'Email', data: "email", defaultContent: '' },
                    { title: 'Edad', data: "edad", defaultContent: '' },
                    { title: 'Sexo', data: "sexo", defaultContent: '' },
                    { title: 'Contacto', data: "fono", defaultContent: '' },
                    { title: 'Region', data: "region", defaultContent: '' },
                    { title: 'Comuna', data: "comuna", defaultContent: '' },
                    { title: 'Vivienda', data: "vivienda", defaultContent: '' },
                    { title: 'N° Vivienda', data: "num_vivienda", defaultContent: '' },
                    { title: 'Cod. Paciente', data: "usuario_uuid", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_pac_adm" onclick="editar_paciente('+row.id+', \''+row.username+'\',\''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\',\''+row.fono+'\', \''+row.region+'\', \''+row.comuna+'\', \''+row.vivienda+'\', \''+row.num_vivienda+'\', \''+row.password+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_pac_adm" onclick="borrar_user_paciente('+row.id+', \''+row.first_name+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
                        }
                    },
                    { title: 'Password', data: "password", defaultContent: '' },
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
function editar_paciente(id, username,first_name, last_name, email,edad,sexo,rut,fono,region,comuna,vivienda, num_vivienda,password){
    let modal_edit_pac_admin_panel = document.getElementById("modal_edit_pac_admin_panel")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_edit_pac_admin_panel);
    // Abre el modal
    modalInstance.show();
    //
    let id_usuuario_pac = document.getElementById("id_usuuario_pac")
    id_usuuario_pac.value = id
    let usernames = document.getElementById("edit_adm_paciente_username")
    usernames.value = username
    let passwords = document.getElementById("edit_adm_paciente_pass")
    passwords.value = password
    let first_namess = document.getElementById("edit_adm_paciente_first_name")
    first_namess.value = first_name
    let edit_adm_paciente_num_viviendalast_names = document.getElementById("edit_adm_paciente_last_name")
    edit_adm_paciente_num_viviendalast_names.value = last_name
    let edit_adm_paciente_num_viviendaemail = document.getElementById("edit_adm_paciente_email")
    edit_adm_paciente_num_viviendaemail.value = email
    let edit_adm_paciente_num_viviendaedad = document.getElementById("edit_adm_paciente_edad")
    edit_adm_paciente_num_viviendaedad.value = edad
    let edit_adm_paciente_num_viviendafono = document.getElementById("edit_adm_paciente_fono")
    edit_adm_paciente_num_viviendafono.value = fono
    let edit_adm_paciente_num_viviendarut = document.getElementById("edit_adm_paciente_rut")
    edit_adm_paciente_num_viviendarut.value = rut
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
    let id_usuuario_pac = document.getElementById("id_usuuario_pac").value
    let username = document.getElementById("edit_adm_paciente_username").value
    console.warn(username)
    let password = document.getElementById("edit_adm_paciente_pass").value
    console.warn(password)
    let first_name = document.getElementById("edit_adm_paciente_first_name").value
    console.warn(first_name)
    let last_name = document.getElementById("edit_adm_paciente_last_name").value
    console.warn(last_name)
    let email = document.getElementById("edit_adm_paciente_email").value
    console.warn(email)
    let edad = document.getElementById("edit_adm_paciente_edad").value
    console.warn(edad)
    let fono = document.getElementById("edit_adm_paciente_fono").value
    console.warn(fono)
    let rut = document.getElementById("edit_adm_paciente_rut").value
    console.warn(rut)
    let num_vivienda = document.getElementById("edit_adm_paciente_num_vivienda").value
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
    axios.put(`http://127.0.0.1:8000/paciente/update_paciente/${id_usuuario_pac}/`,datos, {
        
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
                    { title: 'ID', data: "id", defaultContent: '' },
                    { title: 'Username', data: "username", defaultContent: '' },
                    { title: 'Primer Nombre', data: "first_name", defaultContent: '' },
                    { title: 'Apellidos', data: "last_name", defaultContent: '' },
                    { title: 'Email', data: "email", defaultContent: '' },
                    { title: 'Edad', data: "edad", defaultContent: '' },
                    { title: 'Sexo', data: "sexo", defaultContent: '' },
                    { title: 'Contacto', data: "fono", defaultContent: '' },
                    { title: 'Region', data: "region", defaultContent: '' },
                    { title: 'Comuna', data: "comuna", defaultContent: '' },
                    { title: 'Vivienda', data: "vivienda", defaultContent: '' },
                    { title: 'N° Vivienda', data: "num_vivienda", defaultContent: '' },
                    { title: 'Cod. Paciente', data: "usuario_uuid", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_pac_adm" onclick="editar_paciente('+row.id+', \''+row.username+'\',\''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\',\''+row.fono+'\', \''+row.region+'\', \''+row.comuna+'\', \''+row.vivienda+'\', \''+row.num_vivienda+'\', \''+row.password+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_pac_adm" onclick="borrar_user_paciente('+row.id+', \''+row.first_name+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
                        }
                    },
                    { title: 'Password', data: "password", defaultContent: '' },
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
function borrar_user_paciente(id, first_name, last_name){
    const token = sessionStorage.getItem('token');
    let arr = []
    Swal.fire({
        title: "¿Desea eliminaral Doctor: " +first_name + ' ' +last_name+ "?",
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
                            { title: 'ID', data: "id", defaultContent: '' },
                            { title: 'Username', data: "username", defaultContent: '' },
                            { title: 'Primer Nombre', data: "first_name", defaultContent: '' },
                            { title: 'Apellidos', data: "last_name", defaultContent: '' },
                            { title: 'Email', data: "email", defaultContent: '' },
                            { title: 'Edad', data: "edad", defaultContent: '' },
                            { title: 'Sexo', data: "sexo", defaultContent: '' },
                            { title: 'Contacto', data: "fono", defaultContent: '' },
                            { title: 'Region', data: "region", defaultContent: '' },
                            { title: 'Comuna', data: "comuna", defaultContent: '' },
                            { title: 'Vivienda', data: "vivienda", defaultContent: '' },
                            { title: 'num_vivienda', data: "num_vivienda", defaultContent: '' },
                            { title: 'Cod. Paciente', data: "usuario_uuid", defaultContent: '' },
                            { 
                                title: 'Acciones', 
                                data: null,
                                responsivePriority: 1, // Prioridad máxima (no se oculta)
                                className: 'no-wrap', // Clase para evitar saltos de línea
                                orderable: false,
                                render: function(data, type, row) {
                                    return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_pac_adm" onclick="editar_paciente('+row.id+', \''+row.username+'\', \''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\', \''+row.region+'\', \''+row.comuna+'\', \''+row.vivienda+'\', \''+row.num_vivienda+'\', \''+row.password+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                                            '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_pac_adm" onclick="borrar_user_paciente('+row.id+', \''+row.first_name+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
                                }
                            },
                            { title: 'Password', data: "password", defaultContent: '' },
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
function valor_select_esp_adm_pac(){
    //
    let select_especialidad = document.getElementById("index_especialidad")
    let index_doctor = document.getElementById("index_doctor");
    // Reiniciar el select de "Doctor" a su estado por defecto
    index_doctor.innerHTML = '<option selected>Doctor</option>';
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
//----------------------------------- Módulo Secretaria. ---------------------------------------------------
function panel_secretaria(){
    let info = document.getElementById("panel_secretaria")
    info.addEventListener("click", function(e){
        //
        const token = sessionStorage.getItem('token');
        let arr =[]
        axios.get('http://127.0.0.1:8000/secretaria/listar_secretaria',{
            headers: {
                'Authorization': `Token ${token}`
            }
        })
        .then(function (response) {
            // 
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
                    { title: 'ID', data: "id", defaultContent: '' },
                    { title: 'Username', data: "username", defaultContent: '' },
                    { title: 'Primer Nombre', data: "first_name", defaultContent: '' },
                    { title: 'Apellidos', data: "last_name", defaultContent: '' },
                    { title: 'Email', data: "email", defaultContent: '' },
                    { title: 'Edad', data: "edad", defaultContent: '' },
                    { title: 'Sexo', data: "sexo", defaultContent: '' },
                    { title: 'Contacto', data: "fono", defaultContent: '' },
                    { title: 'Region', data: "region", defaultContent: '' },
                    { title: 'Comuna', data: "comuna", defaultContent: '' },
                    { title: 'Vivienda', data: "vivienda", defaultContent: '' },
                    { title: 'num_vivienda', data: "num_vivienda", defaultContent: '' },
                    { title: 'Cod. Paciente', data: "usuario_uuid", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_secret_adm" onclick="modal_editar_secretaria('+row.id+', \''+row.username+'\', \''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\', \''+row.region+'\', \''+row.comuna+'\', \''+row.vivienda+'\', \''+row.num_vivienda+'\', \''+row.password+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_secret_adm" onclick="borrar_user_secretaria('+row.id+', \''+row.first_name+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
                        }
                    },
                    { title: 'Password', data: "password", defaultContent: '' },
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
    let username = document.getElementById("crear_secretaria_adm_username").value
    let password = document.getElementById("crear_secretaria_adm_pass").value
    let first_name = document.getElementById("crear_secretaria_adm_first_name").value
    let last_name = document.getElementById("crear_secretaria_adm_last_name").value
    let email = document.getElementById("crear_secretaria_adm_email").value
    let edad = document.getElementById("crear_secretaria_adm_edad").value
    let fono = document.getElementById("crear_secretaria_fono").value
    let rut = document.getElementById("crear_secretaria_rut").value
    let num_vivienda = document.getElementById("crear_secretaria_num_vivienda").value
    //------- Valor Radio Button Sexo ---------
    let sexo = document.getElementsByName("crear_secretaria_adm_sexo")
    let valor_radio;
    sexo.forEach(radio => {
        if (radio.checked) {
            valor_radio = radio.value;
        }
    });
    //------- Fin Valor Radio Button Sexo ---------
    //------- Valor Radio Button Vivienda---------
    let vivienda = document.getElementsByName("crear_secretaria_adm_tipo_vivienda")
    let valor_vivienda;
    vivienda.forEach(radio => {
        if (radio.checked) {
            valor_vivienda = radio.value;
        }
    });
    //------- Fin Valor Radio Button Vivienda ---------
    //-------------------- Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Región.
    let id_region = document.getElementById("secretaria_region").value
    let region = document.getElementById("region_" + id_region).getAttribute("data-region")
    buscar_ciudad_secretaria(0)
    //------ Fin Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Comuna.
    let comuna = document.getElementById("secretaria_comuna").value
    let arr = []
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
    axios.post(`http://127.0.0.1:8000/secretaria/crear_secretaria`,datos, {
        
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
                    { title: 'ID', data: "id", defaultContent: '' },
                    { title: 'Username', data: "username", defaultContent: '' },
                    { title: 'Primer Nombre', data: "first_name", defaultContent: '' },
                    { title: 'Apellidos', data: "last_name", defaultContent: '' },
                    { title: 'Email', data: "email", defaultContent: '' },
                    { title: 'Edad', data: "edad", defaultContent: '' },
                    { title: 'Sexo', data: "sexo", defaultContent: '' },
                    { title: 'Contacto', data: "fono", defaultContent: '' },
                    { title: 'Region', data: "region", defaultContent: '' },
                    { title: 'Comuna', data: "comuna", defaultContent: '' },
                    { title: 'Vivienda', data: "vivienda", defaultContent: '' },
                    { title: 'N° Vivienda', data: "num_vivienda", defaultContent: '' },
                    { title: 'Cod. Paciente', data: "usuario_uuid", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_secret_adm" onclick="modal_editar_secretaria('+row.id+', \''+row.username+'\',\''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\',\''+row.fono+'\', \''+row.region+'\', \''+row.comuna+'\', \''+row.vivienda+'\', \''+row.num_vivienda+'\', \''+row.password+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_secret_adm" onclick="borrar_user_secretaria('+row.id+', \''+row.first_name+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
                        }
                    },
                    { title: 'Password', data: "password", defaultContent: '' },
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
function modal_editar_secretaria(id, username,first_name, last_name, email,edad,sexo,rut,fono,region,comuna,vivienda, num_vivienda,password){
    let modal_editar_secretaria = document.getElementById("modal_editar_secretaria")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_editar_secretaria);
    // Abre el modal
    modalInstance.show();
    //
    let id_usuuario_secretaria = document.getElementById("id_usuario_secretaria")
    id_usuuario_secretaria.value = id
    let edit_adm_secretaria_username = document.getElementById("edit_adm_secretaria_username")
    edit_adm_secretaria_username.value = username
    let edit_adm_secretaria_pass = document.getElementById("edit_adm_secretaria_pass")
    edit_adm_secretaria_pass.value = password
    let edit_adm_secretaria_first_name = document.getElementById("edit_adm_secretaria_first_name")
    edit_adm_secretaria_first_name.value = first_name
    let edit_adm_secretaria_last_name = document.getElementById("edit_adm_secretaria_last_name")
    edit_adm_secretaria_last_name.value = last_name
    let edit_adm_secretaria_email = document.getElementById("edit_adm_secretaria_email")
    edit_adm_secretaria_email.value = email
    let edit_adm_secretaria_edad = document.getElementById("edit_adm_secretaria_edad")
    edit_adm_secretaria_edad.value = edad
    let edit_adm_secretaria_fono = document.getElementById("edit_adm_secretaria_fono")
    edit_adm_secretaria_fono.value = fono
    let edit_adm_secretaria_rut = document.getElementById("edit_adm_secretaria_rut")
    edit_adm_secretaria_rut.value = rut
    let edit_adm_secretaria_num_vivienda = document.getElementById("edit_adm_secretaria_num_vivienda")
    edit_adm_secretaria_num_vivienda.value = num_vivienda
    //---------------------- Vivienda --------------------
    let adm_paciente_tipo_vivienda = document.getElementsByName("edit_adm_secretaria_tipo_vivienda")
    adm_paciente_tipo_vivienda.forEach(radio => {
        if (radio.value === vivienda) {
            console.log(radio)
                radio.checked = true;
            }
    });
    //---------------------- Fin Vivienda ----------------
    //---------------------- Sexo --------------------
    let edit_sexo = document.getElementsByName("edit_adm_secretaria_sexo")
    edit_sexo.forEach(radio => {
        if (radio.value === sexo) {
            console.log(radio)
                radio.checked = true;
            }
    });
    //---------------------- Fin Sexo ----------------
    //------- Valor Radio Button Sexo ----------------
    let edit_region = document.getElementById("edit_secretaria_region")
    // Iterar sobre las opciones del select
    for (let i = 0; i < edit_region.options.length; i++) {
        let option = edit_region.options[i];
        // Verificar si el texto de la opción es "Valparaiso"
        if (option.text === region) {
            // Seleccionar la opción
            option.selected = true;
            //buscar_ciudad_secretaria(1)
            break;
        }
    }
    //
    buscar_ciudad_secretaria(1)
    //
    let edit_comuna = document.getElementById("edit_secretaria_comuna")
    console.log(edit_comuna)
    // edit_comuna
    let option_comuna = edit_comuna.querySelector("option")
    option_comuna.innerText = comuna
    option_comuna.value = comuna
    option_comuna.selected = true
    
}
//
function editando_secretaria(){
    //
    let id_usuario_secretaria = document.getElementById("id_usuario_secretaria").value
    let username = document.getElementById("edit_adm_secretaria_username").value
    let password = document.getElementById("edit_adm_secretaria_pass").value
    let first_name = document.getElementById("edit_adm_secretaria_first_name").value
    let last_name = document.getElementById("edit_adm_secretaria_last_name").value
    let email = document.getElementById("edit_adm_secretaria_email").value
    let edad = document.getElementById("edit_adm_secretaria_edad").value
    let fono = document.getElementById("edit_adm_secretaria_fono").value
    let rut = document.getElementById("edit_adm_secretaria_rut").value
    let num_vivienda = document.getElementById("edit_adm_secretaria_num_vivienda").value
    //
    //------- Valor Radio Button Sexo ---------
    let sexo = document.getElementsByName("edit_adm_secretaria_sexo")
    let valor_radio;
    sexo.forEach(radio => {
        if (radio.checked) {
            valor_radio = radio.value;
        }
    });
    //------- Fin Valor Radio Button Sexo ---------
    //------- Valor Radio Button Vivienda---------
    let vivienda = document.getElementsByName("edit_adm_secretaria_tipo_vivienda")
    let valor_vivienda;
    vivienda.forEach(radio => {
        if (radio.checked) {
            valor_vivienda = radio.value;
        }
    });
    //------- Fin Valor Radio Button Vivienda ---------
    //-------------------- Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Región.
    let id_region = document.getElementById("edit_secretaria_region").value
    let region = document.getElementById("region_" + id_region).getAttribute("data-region")
    buscar_ciudad_secretaria(0)
    //------ Fin Select dinámico, esta es la manera de recorrer el select y obtener el valorInput Comuna.
    let comuna = document.getElementById("edit_secretaria_comuna").value
    let arr = []
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
    axios.put(`http://127.0.0.1:8000/secretaria/update_secretaria/${id_usuario_secretaria}/`,datos, {
        
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
                    { title: 'ID', data: "id", defaultContent: '' },
                    { title: 'Username', data: "username", defaultContent: '' },
                    { title: 'Primer Nombre', data: "first_name", defaultContent: '' },
                    { title: 'Apellidos', data: "last_name", defaultContent: '' },
                    { title: 'Email', data: "email", defaultContent: '' },
                    { title: 'Edad', data: "edad", defaultContent: '' },
                    { title: 'Sexo', data: "sexo", defaultContent: '' },
                    { title: 'Contacto', data: "fono", defaultContent: '' },
                    { title: 'Region', data: "region", defaultContent: '' },
                    { title: 'Comuna', data: "comuna", defaultContent: '' },
                    { title: 'Vivienda', data: "vivienda", defaultContent: '' },
                    { title: 'N° Vivienda', data: "num_vivienda", defaultContent: '' },
                    { title: 'Cod. Paciente', data: "usuario_uuid", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        responsivePriority: 1, // Prioridad máxima (no se oculta)
                        className: 'no-wrap', // Clase para evitar saltos de línea
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_secret_adm" onclick="modal_editar_secretaria('+row.id+', \''+row.username+'\',\''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\',\''+row.fono+'\', \''+row.region+'\', \''+row.comuna+'\', \''+row.vivienda+'\', \''+row.num_vivienda+'\', \''+row.password+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_secret_adm" onclick="borrar_user_secretaria('+row.id+', \''+row.first_name+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
                        }
                    },
                    { title: 'Password', data: "password", defaultContent: '' },
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
                            { title: 'ID', data: "id", defaultContent: '' },
                            { title: 'Username', data: "username", defaultContent: '' },
                            { title: 'Primer Nombre', data: "first_name", defaultContent: '' },
                            { title: 'Apellidos', data: "last_name", defaultContent: '' },
                            { title: 'Email', data: "email", defaultContent: '' },
                            { title: 'Edad', data: "edad", defaultContent: '' },
                            { title: 'Sexo', data: "sexo", defaultContent: '' },
                            { title: 'Contacto', data: "fono", defaultContent: '' },
                            { title: 'Region', data: "region", defaultContent: '' },
                            { title: 'Comuna', data: "comuna", defaultContent: '' },
                            { title: 'Vivienda', data: "vivienda", defaultContent: '' },
                            { title: 'N° Vivienda', data: "num_vivienda", defaultContent: '' },
                            { title: 'Cod. Paciente', data: "usuario_uuid", defaultContent: '' },
                            { 
                                title: 'Acciones', 
                                data: null,
                                responsivePriority: 1, // Prioridad máxima (no se oculta)
                                className: 'no-wrap', // Clase para evitar saltos de línea
                                orderable: false,
                                render: function(data, type, row) {
                                    return '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_editar_secret_adm" onclick="modal_editar_secretaria('+row.id+', \''+row.username+'\',\''+row.first_name+'\', \''+row.last_name+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\',\''+row.fono+'\', \''+row.region+'\', \''+row.comuna+'\', \''+row.vivienda+'\', \''+row.num_vivienda+'\', \''+row.password+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                                            '<button type="button" data-id="'+row.id+'" data-name="'+row.first_name+'" id="btn_borrar_secret_adm" onclick="borrar_user_secretaria('+row.id+', \''+row.first_name+'\', \''+row.last_name+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
                                }
                            },
                            { title: 'Password', data: "password", defaultContent: '' },
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