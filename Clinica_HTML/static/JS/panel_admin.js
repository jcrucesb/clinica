function click_seccion(){
    // Selecciona solo los enlaces dentro del menú
    const menuItems = document.querySelectorAll('.sidebar-menu a'); // 🎯 Ajusta la clase según tu HTML
    
    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Evita recargar si es un enlace
            
            // Remueve la clase de TODOS los elementos del menú
            menuItems.forEach(a => {
                a.classList.remove('active-item');
                a.style.background = ""; // Limpia el estilo en línea
            });
            
            // Aplica solo al elemento clickeado
            this.classList.add('active-item');
            this.style.background = "#E6E6E6";
        });
    });
}
click_seccion()
//
function panel_doctores(){
    let opcion_doctor = document.getElementById("panel_doctor")
    opcion_doctor.addEventListener("click", function(e){
        let mostrar_panel_doctor = document.getElementById("container_doctor")
        mostrar_panel_doctor.style.display = 'block'
        // Ocultar el container del Panel de Grupo.
        let ocultar_panel_grupo = document.getElementById("container_grupo")
        ocultar_panel_grupo.style.display = 'none' 
    })
    let info = document.getElementById("info_doctor")
    info.addEventListener("click", function(e){
        let modal_info_doctor = document.getElementById("modal_info_doctor")
        // Crea una instancia del modal de Bootstrap
        const modalInstance = new bootstrap.Modal(modal_info_doctor);
        // Abre el modal
        modalInstance.show();
        //
        const token = sessionStorage.getItem('token');
        let arr =[]
        axios.get('http://127.0.0.1:8000/usuario/listar_doctor',{
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
                    { title: 'Nombre Grupo', data: "username", defaultContent: '' },
                    { 
                        title: 'Acciones', 
                        data: null,
                        defaultContent: '',
                        orderable: false,
                        render: function(data, type, row) {
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.name+'" id="btn_editar_grupo" onclick="editar_grupo('+row.id+', \''+row.name+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
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
    })
}
panel_doctores()
// Solo Modal Crear Doctor.
function insertar_doctor(e){
    let modal_form_doctor = document.getElementById("modal_form_doctor")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_form_doctor);
    // Abre el modal
    modalInstance.show();
}
//
function especialidad_doctor(){
    alert()
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
    }
    //
    axios.post(`http://127.0.0.1:8000/usuario/crear_doctor`, datos, {
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
            // Realizamos el click automático.
            elemento.click();
            cerrar_modal_listar_doctor.click();
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
    // Ocultar el container del Panel de Grupo.
    let ocultar_panel_grupo = document.getElementById("container_grupo")
    ocultar_panel_grupo.style.display = 'none'
    // Obtenemos el id del boton clode.
    const elemento = document.querySelector('#cerrar_modal_listar_grupo');
    //
    let boton_crear_grupo = document.getElementById("insertar_grupo")
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
                    // Realizamos el click automático.
                    elemento.click();
                    let reset_input = document.getElementById("nombre_grupo")
                    reset_input.value = ""
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
    let container_doctor = document.getElementById("container_doctor")
    container_doctor.style.display = 'none'
    let container_grupo = document.getElementById("container_grupo")
    container_grupo.style.display = 'block'

    let modal_grupo = document.getElementById("modal_grupo")
    modal_grupo.addEventListener("click", function(e){
        let listar_grupo = document.getElementById("listar_grupo")
        // Crea una instancia del modal de Bootstrap
        const modalInstance = new bootstrap.Modal(listar_grupo);
        // Abre el modal
        modalInstance.show();
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
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.name+'" id="btn_editar_grupo" onclick="editar_grupo('+row.id+', \''+row.name+'\')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
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
    })
}
//
function editar_grupo(id, nombre){
    let modal_editar_grupo = document.getElementById("modal_editar_grupo")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_editar_grupo);
    // Abre el modal
    modalInstance.show();
    // Obtenemos el id del boton clode.
    const elemento = document.querySelector('#cerrar_modal_listar_grupo');
    //
    const token = sessionStorage.getItem('token');
    let name_edit = document.getElementById("edit_nombre_grupo")
    name_edit.value = nombre
    let btn_editar_nombre_grupo = document.getElementById("btn_editar_nombre_grupo")
    btn_editar_nombre_grupo.addEventListener("click", function(e){
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
                    modalInstance.hide();
                    // Realizamos el click automático.
                    elemento.click();
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
                if (response.status == 200) {
                    Swal.fire({
                        icon: "Eliminado Correctamente",
                        title: "El grupo fue eliminado correctamente",
                        text: "El grupo fue creado correctamente!",
                    });
                    // Realizamos el click automático.
                    elemento.click();
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
function seccion_especialidad(){
    // let cambiar_color = document.getElementById("seccion_esp")
    // cambiar_color.style.background = "#00FFFF"
    // Ocultamos el container del Doctor.
    let container_doctor = document.getElementById("container_doctor")
    container_doctor.style.display = "none" 
    let container_espe_doctor = document.getElementById("container_espe_doctor")
    container_espe_doctor.style.display = "block"
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
        form_esp.reset()
        // Realizamos el click automático.
        cancelar_insert_esp.click()
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
                    
                    modalInstance.hide();
                    // Realizamos el click automático.
                    elemento.click();
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
            //console.warn(response.data.grupos[0])
            
            
            //
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