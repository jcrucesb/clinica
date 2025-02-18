function panel_doctores(){
    let opcion_doctor = document.getElementById("panel_doctor")
    opcion_doctor.addEventListener("click", function(e){
        let mostrar_panel_doctor = document.getElementById("container_doctor")
        mostrar_panel_doctor.style.display = 'block'
    })
}
panel_doctores()
// Función para crear un nuevo grupo.
function nuevo_grupo(e){
    let crear_grupo = document.getElementById("crear_grupo")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(crear_grupo);
    // Abre el modal
    modalInstance.show();
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
    let panel_doctor = document.getElementById("panel_doctor")
    panel_doctor.style.display = 'none'
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
                            return '<button type="button" data-id="'+row.id+'" data-name="'+row.name+'" id="btn_editar_grupo" onclick="editar_grupo('+row.id+')" class="btn btn-primary btn-sm editar-btn">Editar</button> ' +
                                    '<button type="button" data-id="'+row.id+'" data-name="'+row.name+'" id="btn_borrar_grupo" onclick="borrar_grupo('+row.id+')" class="btn btn-danger btn-sm borrar-btn">Borrar</button>';
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
function editar_grupo(id){
    let btn_editar_grupo = document.getElementById("btn_editar_grupo")
    let edit_nombre = btn_editar_grupo.getAttribute('data-name')
    let editar_id = btn_editar_grupo.getAttribute('data-id')
    let modal_editar_grupo = document.getElementById("modal_editar_grupo")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_editar_grupo);
    // Abre el modal
    modalInstance.show();
    const token = sessionStorage.getItem('token');
    let btn_editar_nombre_grupo = document.getElementById("btn_editar_nombre_grupo")
    btn_editar_nombre_grupo.addEventListener("click", function(e){
        let name = document.getElementById("edit_nombre_grupo").value
        console.log(name)
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
                debugger
                if (response.status == 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Actualizado Correctamente",
                        text: "El grupo fue actualizado correctamente!",
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