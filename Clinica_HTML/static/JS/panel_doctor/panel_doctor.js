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
    axios.get(`http://127.0.0.1:8000/doctor/listar_datos_doctor/${username}`, {
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
        if ($.fn.DataTable.isDataTable('#tabla_dato_doctor')) {
            $('#tabla_dato_doctor').DataTable().destroy();
            $('#tabla_dato_doctor').empty(); // Limpia la tabla antes de inicializarla nuevamente
        }
        
        var table = $('#tabla_dato_doctor').DataTable({
            data: arr,
            columns: [
                { title: 'ID', data: "id_usuario", defaultContent: '' },
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
                        return '<button type="button" data-id="'+row.id_usuario+'" id="btn_editar_info_doc" onclick="editar_doctor_panel_doc('+row.id_usuario+', \''+row.username+'\',\''+row.primer_nombre+'\', \''+row.segundo_nombre+'\', \''+row.ap_paterno+'\', \''+row.ap_materno+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\')" class="btn btn-warning btn-sm">Editar</button> ';
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
function editar_doctor_panel_doc(id, usuario, pr_nombre, seg_nombre,ape_paterno, ape_materno, doc_email, edad,sexo,rut,contacto){
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
    let edit_primer_nombre = document.getElementById("edit_primer_nombre")
    edit_primer_nombre.value = pr_nombre
    let edit_segundo_nombre = document.getElementById("edit_segundo_nombre")
    edit_segundo_nombre.value = seg_nombre
    let edit_ap_paterno = document.getElementById("edit_ap_paterno")
    edit_ap_paterno.value = ape_paterno
    let edit_ap_materno = document.getElementById("edit_ap_materno")
    edit_ap_materno.value = ape_materno
    let edit_email = document.getElementById("email")
    edit_email.value = doc_email
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
    let edit_username = document.getElementById("username").value
    let edit_pass = document.getElementById("edit_password").value.trim();
    console.warn(edit_pass)
    if (!edit_pass) {
        console.warn("El campo está vacío");
        edit_pass = "0"
    } else {
        console.log("Contraseña ingresada:", edit_pass);
    }
    let edit_primer_nombre = document.getElementById("edit_primer_nombre").value
    let edit_segundo_nombre = document.getElementById("edit_segundo_nombre").value
    let edit_ap_paterno = document.getElementById("edit_ap_paterno").value
    let edit_ap_materno = document.getElementById("edit_ap_materno").value
    let edit_email = document.getElementById("email").value
    let edit_edad = document.getElementById("edad").value
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
        'username':edit_username,
        'password': edit_pass,
        'primer_nombre':edit_primer_nombre,
        'segundo_nombre':edit_segundo_nombre,
        'ap_paterno': edit_ap_paterno,
        'ap_materno': edit_ap_materno,
        'email':edit_email,
        'edad':edit_edad,
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
                    { title: 'ID', data: "id_usuario", defaultContent: '' },
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
                            return '<button type="button" data-id="'+row.id_usuario+'" data-name="'+row.first_name+'" id="btn_editar_info_doc" onclick="editar_doctor_panel_doc('+row.id_usuario+', \''+row.username+'\',\''+row.primer_nombre+'\', \''+row.segundo_nombre+'\', \''+row.ap_paterno+'\', \''+row.ap_materno+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\', \''+row.fono+'\')" class="btn btn-warning btn-sm">Editar</button> ';
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
                { 
                    title: 'Acciones',
                    data: null,
                    responsivePriority: 1,
                    className: 'no-wrap',
                    orderable: false,
                    render: function(data, type, row) {
                        return `<button type="button" data-id="${row.id_doctor}" id="btn_editar_info_doc"
                                onclick="editar_doctor_panel_doc(${row.id_doctor}, '${row.username}','${row.primer_nombre}', '${row.segundo_nombre}', '${row.ap_paterno}','${row.ap_materno}','${row.email}', '${row.edad}', '${row.sexo}', '${row.rut}', '${row.fono}')"
                                class="btn btn-warning btn-sm">Editar</button>`;
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
    })
    .catch(error => {
        if (error.response) {
            console.log('Error Response:', error.response.data);
            console.log('Error Status:', error.response.status);
            console.log('Error Headers:', error.response.headers);
        }
    });
}
// Función para obtener todos los pacientes que tienen reserva de cita con el doctor.
function clinica_disp(){
    //
    const username = sessionStorage.getItem('username');
    //
    const token = sessionStorage.getItem('token');
    //
    let selecc_clinica = document.getElementById("selecc_clinica")
    selecc_clinica.innerHTML = '<option selected>Seleccionar Clínica</option>';
    //let index_doctor = document.getElementById("index_doctor");
    // Reiniciar el select de "Doctor" a su estado por defecto
    //index_doctor.innerHTML = '<option selected>Doctor</option>';
    // Evitar múltiples peticiones si ya hay datos
    if (selecc_clinica.options.length > 1) return;
    //
    let arr = []
    //
    axios.get(`http://127.0.0.1:8000/reserva/listar_clinica_paciente_doctor`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        console.warn(response.data.dato_doctor)
        console.log(typeof(response.data.reserva))
        let clinicas = response.data.reserva
        //
        clinicas.forEach(element => {
            // Crear un NUEVO elemento option en cada iteración
            const elegir_especialidad = document.createElement("option");
            elegir_especialidad.value = element.id; // Usar ID como valor (mejor práctica)
            elegir_especialidad.setAttribute("data-cli", element.nombre_clinica)
            elegir_especialidad.setAttribute("data-id", element.id)
            elegir_especialidad.textContent = element.nombre_clinica;
            selecc_clinica.appendChild(elegir_especialidad);
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
// Full Calendar.
var calendar;
function seleccionar_cli_reservas(){
    //
    const username = sessionStorage.getItem('username');
    //
    const token = sessionStorage.getItem('token');
    //
    let id_clinica = document.getElementById("selecc_clinica").value
    console.log(id_clinica)
    // Validar selección
    if (!id_clinica || id_clinica === "Seleccionar Clínica") {
        Swal.fire({
            icon: "warning",
            title: "Selecciona una clínica",
            text: "Debes elegir una clínica válida",
        });
        return;
    }
    let datos = {
        'username': username,
        'id_clinica': id_clinica
    }
    //
    if (calendar) {
        calendar.destroy();
    }
    // Full Callendar.
    let request_calendar = `http://127.0.0.1:8000/reserva/listar_paciente_doctor`
    //let request_calendar = '../../JS/events.json'
    var calendarEl = document.getElementById('calendar_res_pac_registrado');
    // Si ya existe un calendario, destrúyelo antes de crear uno nuevo
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
                    'Authorization': `Bearer ${token}`
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
                console.warn(data.paciente)
                let events = data.paciente.map(paciente => ({
                    title: paciente.title,
                    start: `${paciente.fecha_reserva}T${paciente.start}`, // Agrega los segundos si faltan
                    end: `${paciente.fecha_reserva}T${paciente.end}`,
                    nombre_paciente: paciente.nombre_paciente,
                    cod_reserva: paciente.cod_reserva,
                    reserva_cerrada: paciente.reserva_cerrada,
                    //Se define; classNames, para poder cambiar elcolor de la celda si se encuentra cerrada la treserva.
                    classNames: paciente.reserva_cerrada == 1 ? 'reserva-cerrada' : 'reserva-abierta'
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
            let eventReservaCerrada = clickInfo.event.reserva_cerrada;
            // let eventUuid = clickInfo.event.extendedProps.reserva_uuid;
            let paciente_nombre = clickInfo.event.extendedProps.nombre_paciente;
            let cod_reserv = clickInfo.event.extendedProps.cod_reserva;
            let reserva_cerrada = clickInfo.event.extendedProps.reserva_cerrada
            console.warn(reserva_cerrada)
            //
            if (reserva_cerrada == 1) {
                modal_dato_reserva_cerrada(eventTitle, paciente_nombre, cod_reserv)
            }
            //
            if (reserva_cerrada == 0) {
                modal_mostrar_informacion_cita_calendar_panel_doctor(eventTitle, paciente_nombre, eventStart, eventEnd, cod_reserv)
            }
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
                //abrir_modal_nueva_cita_pa_registrado(fechaFormateada)
            }
        },
        // Traemos todos los eventos disponibles.
        eventContent: function(info) {
            console.log(info)
            console.warn(info.event.extendedProps.reserva_cerrada)
            let res_cerrada = info.event.extendedProps.reserva_cerrada
            return {
                html: `
                    <div>
                        <strong>${info.event.title}</strong>
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
            let newEluuid = mouseEnterInfo.event.extendedProps.nombre_paciente;
            let newEluuid_reserva = mouseEnterInfo.event.extendedProps.cod_reserva;
            console.warn(newEluuid_reserva)
            newEl.innerHTML = `
                <div
                    class="fc-hoverable-event"
                    style="position: absolute; bottom: 100%; left: 0; width: 300px; height: auto;
                    background-color: white; z-index: 50; border: 1px solid #e2e8f0; border-radius: 0.375rem;
                    padding: 0.75rem; font-size: 14px; font-family: 'Inter', sans-serif; cursor: pointer;"
                    >
                    <div><p>Nombre Paciente: ${newEluuid}</p></div>
                    <strong><p>Especialidad: ${newElTitle}</p></strong>
                    <div>${newElLocation}</div>
                    <div style='color: orange;'><p>Cod Reserva: ${newEluuid_reserva}</p></div>
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
function modal_mostrar_informacion_cita_calendar_panel_doctor(eventTitle, paciente_nombre, eventStart, eventEnd, reserva){
    //
    let modal_info_full_calendar = document.getElementById("modal_info_full_calendar_pac_panel_doctor")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_info_full_calendar);
    // Abre el modal
    modalInstance.show();
    let info_nombre_paciente_registrado = document.getElementById("info_nombre_paciente_registrado_panel_doc")
    info_nombre_paciente_registrado.readOnly = true;
    info_nombre_paciente_registrado.value = paciente_nombre
    let info_especialidad_paciente_Registrado = document.getElementById("info_especialidad_paciente_registrado_panel_doc")
    info_especialidad_paciente_Registrado.readOnly = true;
    info_especialidad_paciente_Registrado.value = eventTitle
    let cod_reserva_paciente_registrado = document.getElementById("cod_reserva_paciente_registrado_panel_doc")
    cod_reserva_paciente_registrado.readOnly = true;
    cod_reserva_paciente_registrado.value = reserva
}
// Modal para mostrar solo código de reserva si se encuentra cerrada la reserva.
function modal_dato_reserva_cerrada(eventTitle, paciente_nombre, cod_reserv){
    //
    let modal_info_full_calendar_pac_panel_doctor_res_cerrada = document.getElementById("modal_info_full_calendar_pac_panel_doctor_res_cerrada")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_info_full_calendar_pac_panel_doctor_res_cerrada);
    // Abre el modal
    modalInstance.show();
    //
    let info_nombre_paciente_registrado_panel_doc_res_cerrada = document.getElementById("info_nombre_paciente_registrado_panel_doc_res_cerrada")
    info_nombre_paciente_registrado_panel_doc_res_cerrada.readOnly = true;
    info_nombre_paciente_registrado_panel_doc_res_cerrada.value = paciente_nombre
    let info_especialidad_paciente_registrado_panel_doc_res_cerrada = document.getElementById("info_especialidad_paciente_registrado_panel_doc_res_cerrada")
    info_especialidad_paciente_registrado_panel_doc_res_cerrada.readOnly = true;
    info_especialidad_paciente_registrado_panel_doc_res_cerrada.value = eventTitle
    let cod_reserva_paciente_registrado_panel_doc_res_cerrada = document.getElementById("cod_reserva_paciente_registrado_panel_doc_res_cerrada")
    cod_reserva_paciente_registrado_panel_doc_res_cerrada.readOnly = true;
    cod_reserva_paciente_registrado_panel_doc_res_cerrada.value = cod_reserv
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
    axios.get(`http://127.0.0.1:8000/reserva/listar_paciente_doctor_cita`,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        let datos = response.data.paciente
        //
        var table = $('#listar_todos_pac_panel_doc').DataTable({
            data: datos,
            columns: [
                { title: 'ID Paciente', data: "id_paciente", defaultContent: '' },
                { title: 'Nombre Paciente', data: "nombre_paciente", defaultContent: '' },
                { title: 'Email', data: "email", defaultContent: '' },
                { title: 'Edad', data: "edad", defaultContent: '' },
                { title: 'Sexo', data: "sexo", defaultContent: '' },
                { title: 'Contacto', data: "fono", defaultContent: '' },
                { title: 'Nombre Clínica', data: "nombre_clinica", defaultContent: '' },
                { title: 'Comuna Clínica', data: "comuna_clinica", defaultContent: '' },
                { title: 'Dirección Clínica', data: "direccion_clinica", defaultContent: '' },
                { title: 'Nombre Doctor', data: "nombre_doctor", defaultContent: '' },
                { title: 'Especialidad', data: "especialidad", defaultContent: '' },
                { title: 'Cod. Reserva', data: "reserva_uuid", defaultContent: '' },
                { 
                    title: 'Estado Consulta',
                    data: null,
                    responsivePriority: 1,
                    className: 'no-wrap',
                    orderable: false,
                    render: function(data, type, row) {
                        if (data.reserva_cerrada == 1) {
                            return `<p
                                class="text-center" style='background: yellowgreen; border-radius: 5px;'>Consulta Cerrada</p>`;
                        }
                        if (data.reserva_cerrada == 0) {
                            return `<p
                                class="text-center" style='background: red;'>Consulta Abierta</p>`;
                        }
                    }
                },
                { 
                    title: 'Historial Clínico Paciente',
                    data: null,
                    responsivePriority: 1,
                    className: 'no-wrap text-center',
                    orderable: false,
                    render: function(data, type, row) {
                        return `<button type="button" data-id="${row.id_paciente}" id="btn_info_pac_doc"
                                    onclick="info_pac_doctor_panel_doc(\'${row.id_paciente}'\, \'${row.reserva_uuid}'\)"
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
// Abrir Modal con el historial clínico del paciente desde el panel del Doc.
function info_pac_doctor_panel_doc(id, cod_reserva){
    //
    let id_pac = parseInt(id)
    let datos = {
        'id_paciente': id_pac,
        'reserva_uuid': cod_reserva,
    }
    const username = sessionStorage.getItem('username');
    //
    const token = sessionStorage.getItem('token');
    //
    let modal_info_historial_paciente_panel_doctor = document.getElementById("modal_info_historial_paciente_panel_doctor")
    // Crea una instancia del modal de Bootstrap.
    const modalInstance = new bootstrap.Modal(modal_info_historial_paciente_panel_doctor);
    // Abre el modal
    modalInstance.show();
    //
    let arr = []
    axios.post(`http://127.0.0.1:8000/historial_clinico/listar_historial_clinico_pacien_panel_doctor`,datos,{
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        let datos = response.data.paciente
        console.warn(Array.isArray(datos));
        console.log(datos);
        datos.forEach(element => {
            console.log(element)
        });
        // Destruimos el datatables antes de inicializarlo nuevamente.
        if ($.fn.DataTable.isDataTable('#tabla_historial_diagnostico_paciente_panel_doc')) {
            $('#tabla_historial_diagnostico_paciente_panel_doc').DataTable().destroy();
        }
        //
        var table = $('#tabla_historial_diagnostico_paciente_panel_doc').DataTable({
            data: datos,
            columns: [
                { title: 'Fecha Historial', data: "fecha_creacion_historial", defaultContent: '' },
                { 
                    title: 'Síntomas', 
                    data: "sintoma", 
                    defaultContent: '',
                    render: function(data, type, row) {
                        return `<textarea class="form-control" readOnly="True" rows="2">${data}</textarea>`;
                    }
                },
                { 
                    title: 'Diagnóstico', 
                    data: "diagnostico", 
                    defaultContent: '',
                    render: function(data, type, row) {
                        return `<textarea class="form-control" readOnly="True" rows="2">${data}</textarea>`;
                    }
                },
                { 
                    title: 'Observación', 
                    data: "observacion", 
                    defaultContent: '',
                    render: function(data, type, row) {
                        return `<textarea class="form-control" readOnly="True" rows="2">${data}</textarea>`;
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
// Enviar los datos para cerrar la cita desde el panel de Doc.
function cerrar_cita(){
    //
    const token = sessionStorage.getItem('token');
    console.log(token)
    //
    let info_nombre_paciente_registrado_panel_doc = document.getElementById("info_nombre_paciente_registrado_panel_doc").value
    let info_especialidad_paciente_registrado_panel_doc = document.getElementById("info_especialidad_paciente_registrado_panel_doc").value
    let cod_reserva_paciente_registrado_panel_doc = document.getElementById("cod_reserva_paciente_registrado_panel_doc").value
    let cod_reserva_paciente_sintoma_panel_doc = document.getElementById("cod_reserva_paciente_sintoma_panel_doc").value
    let cod_reserva_paciente_diagnostico_panel_doc = document.getElementById("cod_reserva_paciente_diagnostico_panel_doc").value
    let cod_reserva_paciente_observacion_panel_doc = document.getElementById("cod_reserva_paciente_observacion_panel_doc").value
    //
    let datos = {
        'nombre_paciente': info_nombre_paciente_registrado_panel_doc,
        'especialidad': info_especialidad_paciente_registrado_panel_doc,
        'cod_reserva': cod_reserva_paciente_registrado_panel_doc,
        'sintoma': cod_reserva_paciente_sintoma_panel_doc,
        'diagnostico': cod_reserva_paciente_diagnostico_panel_doc,
        'observacion': cod_reserva_paciente_observacion_panel_doc,
    }
    Swal.fire({
        title: "¿Desea cerrar la cita?",
        text: "Se cerrará la cita.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Si, cerrar cita!"
      }).then((result) => {
        if (result.isConfirmed) {
            if (calendar) {
                calendar.destroy();
            }   
            // Full Callendar.
            let request_calendar = `http://127.0.0.1:8000/paciente/historial_clinico`
            //let request_calendar = '../../JS/events.json'
            var calendarEl = document.getElementById('calendar_res_pac_registrado');
            // Si ya existe un calendario, destrúyelo antes de crear uno nuevo
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
                            'Authorization': `Token ${token}`
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
                        console.warn(data.paciente)
                        // let calendario_reservas = document.getElementById("calendario_reservas")
                        // calendario_reservas.style.display = "block"
                        //console.warn(data.pacientes[0]["title"]); // Aquí ves la data que llega desde el backend
                        // Transforma los datos recibidos en el formato esperado por FullCalendar
                        let events = data.paciente.map(paciente => ({
                            title: paciente.title,
                            start: `${paciente.fecha_reserva}T${paciente.hora_inicio}`, // Agrega los segundos si faltan
                            end: `${paciente.fecha_reserva}T${paciente.hora_termino}`,
                            nombre_paciente: paciente.nombre_paciente,
                            cod_reserva: paciente.cod_reserva
                        }));
                        console.log(events)
                        debugger
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
                    // let eventUuid = clickInfo.event.extendedProps.reserva_uuid;
                    let paciente_nombre = clickInfo.event.extendedProps.nombre_paciente;
                    let cod_reserv = clickInfo.event.extendedProps.cod_reserva;
                    modal_mostrar_informacion_cita_calendar_panel_doctor(eventTitle, paciente_nombre, eventStart, eventEnd, cod_reserv)
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
                    let newEluuid = mouseEnterInfo.event.extendedProps.nombre_paciente;
                    let newEluuid_reserva = mouseEnterInfo.event.extendedProps.cod_reserva;
                    newEl.innerHTML = `
                        <div
                            class="fc-hoverable-event"
                            style="position: absolute; bottom: 100%; left: 0; width: 300px; height: auto;
                            background-color: white; z-index: 50; border: 1px solid #e2e8f0; border-radius: 0.375rem;
                            padding: 0.75rem; font-size: 14px; font-family: 'Inter', sans-serif; cursor: pointer;"
                            >
                            <div>${newEluuid}dsdsdsd</div>
                            <strong>${newElTitle}</strong>
                            <div>${newElLocation}</div>
                            <div style='color: orange;'>${newEluuid_reserva}</div>
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
//----------------------------------- Fn Modulo Paciente Panel Doctor --------------------------//
function listar_secretarias(){
    //
    const username = sessionStorage.getItem('username');
    //
    const token = sessionStorage.getItem('token');
    //
    let arr = []
    axios.get(`http://127.0.0.1:8000/secretaria/listar_secretaria`, {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
    .then(function (response) {
        // 
        console.log(typeof(response.data.secretarias))
        let datos = response.data.secretarias
        console.log(datos)
        datos.forEach(element => {
            arr.push(element)
        });
        //
        if ($.fn.DataTable.isDataTable('#tabla_secretaria_panel_doc')) {
            $('#tabla_secretaria_panel_doc').DataTable().destroy();
            $('#tabla_secretaria_panel_doc').empty(); // Limpia la tabla antes de inicializarla nuevamente
        }
        //
        var table = $('#tabla_secretaria_panel_doc').DataTable({
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
                    // { 
                    //     title: 'Acciones', 
                    //     data: null,
                    //     responsivePriority: 1, // Prioridad máxima (no se oculta)
                    //     className: 'no-wrap', // Clase para evitar saltos de línea
                    //     orderable: false,
                    //     render: function(data, type, row) {
                    //         return '<button type="button" id="btn_editar_secret_adm" onclick="modal_editar_secretaria('+row.id_user+', \''+row.username+'\',\''+row.primer_nombre+'\', \''+row.segundo_nombre+'\',\''+row.ap_paterno+'\',\''+row.ap_materno+'\', \''+row.email+'\', \''+row.edad+'\', \''+row.sexo+'\', \''+row.rut+'\',\''+row.fono+'\')" class="btn btn-warning btn-sm editar-btn">Editar</button> ' +
                    //                 '<button type="button" id="btn_borrar_secret_adm" onclick="borrar_user_secretaria('+row.id_user+', \''+row.primer_nombre+'\', \''+row.segundo_nombre+'\')" class="btn btn-danger btn-sm borrar-btn">Borrar</button> ';
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