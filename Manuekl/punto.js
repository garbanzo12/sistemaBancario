const userData = {
    nombre: '',
    consignar: ''

}
let activo = true;
const formulario = document.querySelector('.formulario');
const nombre = document.querySelector('.nombre');
const cantidad = document.querySelector('.cantidad');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    const { cantidad, nombre } = userData;
    console.log('Enviando formulario...');

    if (cantidad === '' || nombre === '') {
        // console.log('Todos los campos son obligatorios');
        showAlert('Todos los campos son obligatorios')

        return; //Corta la ejecucion del codigo cuando el return se activa, la ejecucion de la funcion termina exitosamente en esta linea, no se ejecuta ninguna linea despues de este codigo
    }
    console.log(userData.cantidad)
    console.log(userData.nombre)
    showAlert('Todos los campos son correctos');

});

cantidad.addEventListener('input', readText);
nombre.addEventListener('input', readText);

function readText(e) {
    if (e.target.classList.contains('cantidad')) {
        userData.cantidad = e.target.value;


    }
    if (e.target.classList.contains('nombre')) {
        userData.nombre = e.target.value;

    }
    // console.log(userData);
}

function showAlert(message, error = null) {
    if (activo) {

        //Se comento la variable de las otras dos funciones
        const alert = document.createElement('P');
        console.log(message)
        alert.textContent = message;
        if (error == null) {

            alert.classList.add('correcto');
        }
        else {
            alert.classList.add('error');
        }
        formulario.appendChild(alert);
        setTimeout(() => {
            alert.remove();
        }, 2000)
        return activo = false;
    }
}

