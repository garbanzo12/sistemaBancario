
const userData = {
    names : '',
    saldo : ''
    
}
//Seleccionamos elementos del DOM
let activo = true;
const useForm = document.querySelector('.form');
const names = document.querySelector('.names');
const saldo = document.querySelector('.saldo');

//Evento submit
useForm.addEventListener('submit',function(e){
    e.preventDefault();
    const {names,saldo} = userData;
    console.log('Enviando formulario...');

    if(names === '' || saldo === ''){
        // console.log('Todos los campos son obligatorios');
        showAlert('Todos los campos son obligatorios')
        
        return; //Corta la ejecucion del codigo cuando el return se activa, la ejecucion de la funcion termina exitosamente en esta linea, no se ejecuta ninguna linea despues de este codigo
    }
    console.log(userData.names)
    console.log(userData.saldo)
    showAlert('Todos los campos son correctos');

});

//Escuchamos el evento
names.addEventListener('input', readText);
saldo.addEventListener('input', readText);


//callback o funcion
function readText(e){
    if(e.target.classList.contains('names')){
        userData.names = e.target.value;


    }
    if(e.target.classList.contains('saldo')){
        userData.saldo = e.target.value;
   
    }
    // console.log(userData);
}
 
function showAlert(message, error = null){
    if (activo) {
        
    //Se comento la variable de las otras dos funciones
    const alert = document.createElement('P');
    console.log(message)
    alert.textContent = message;
    if(error == null){
 
        alert.classList.add('correcto');
    }
    else{
        alert.classList.add('error');
    }
    useForm.appendChild(alert);
    setTimeout(()=>{
        alert.remove();
    },2000)
    return activo = false;
    }
}

