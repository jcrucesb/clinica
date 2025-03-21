function select_esp_index(e){
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
//
function valor_select_esp_index(){
    let id_index_especialidad = document.getElementById("index_especialidad").value
    console.warn(id_index_especialidad)
    
    let index_doctor = document.getElementById("index_doctor")
    // Limpiar opciones previas (excepto la primera)
    index_doctor.innerHTML = '<option selected>Doctor</option>';
    //
    let arr =[]
    //
    axios.get(`http://127.0.0.1:8000/especialidad/listar_doc_index/${id_index_especialidad}/`,{
    })
    .then(function (response) {
        // 
        const doc_especialidad = response.data.especialidad;
        console.log(doc_especialidad)
        // Evitar múltiples peticiones si ya hay datos
        //if (index_doctor.options.length > 1) return;
        doc_especialidad.forEach(element => {
            // Crear un NUEVO elemento option en cada iteración
            const elegir_doctor = document.createElement("option");
            elegir_doctor.value = element;
            elegir_doctor.textContent = element;
            index_doctor.appendChild(elegir_doctor);
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
function metodo_pago_debito(e){
    let modal_debito = document.getElementById("modal_debito")
    // Crea una instancia del modal de Bootstrap
    const modalInstance = new bootstrap.Modal(modal_debito);
    // Abre el modal
    modalInstance.show();
}