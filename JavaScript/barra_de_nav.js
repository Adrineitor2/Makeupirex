//generar un nuevo enlace
const nuevoEnlace = document.createElement('a');
//agregar el href
nuevoEnlace.href ='index.html';
//agregar el texto
nuevoEnlace.textContent='inici';
//agregar la clase
nuevoEnlace.classList.add('nav-bg');
//agregar al documento
const navegacion = document.querySelector('.navini');
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);

//seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton');
btnEnviar.addEventListener('click',function(){
console.log('enviando formulario')
});