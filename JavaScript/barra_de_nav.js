const paginas = [
  { texto: 'Inicio', url: 'index.html' },
  { texto: 'Nosotros', url: 'nosotros.html' },
  { texto: 'Servicios', url: 'Servicios.html' },
  { texto: 'Productos', url: 'Productos.html' },
  { texto: 'Contacto', url: 'contacto.html' },
  { texto: 'Especiales', url: 'Especiales.html' },
  { texto: 'Fotos', url: 'Fotos.html' },
  { texto: 'Spa', url: 'spa.html' },
  { texto: 'Videos', url: 'Videos.html' }
];
const navegacion = document.querySelector('.navini');
// Verificar que el contenedor exista antes de intentar agregar elementos
if (navegacion) {
  // 3. Recorremos el arreglo usando .forEach() para crear cada enlace dinámicamente
  paginas.forEach(pagina => {
    // Generar el nuevo enlace
    const nuevoEnlace = document.createElement('a');
    
    // Agregar el href y el texto usando las propiedades del objeto actual
    nuevoEnlace.href = pagina.url;
    nuevoEnlace.textContent = pagina.texto;
    
    // Agregar la clase CSS que ya tenías configurada
    nuevoEnlace.classList.add('nav-bg');
    
    // Agregar el enlace al contenedor
    navegacion.appendChild(nuevoEnlace);
  });
} else {
  console.error("No se encontró el contenedor con la clase '.navini'");
}

//generar un nuevo enlace
//const nuevoEnlace = document.createElement('a');
//agregar el href
//nuevoEnlace.href ='index.html';
//agregar el texto
//nuevoEnlace.textContent='inici';
//agregar la clase
//nuevoEnlace.classList.add('nav-bg');
//agregar al documento
//const navegacion = document.querySelector('.navini');
//navegacion.appendChild(nuevoEnlace);
//console.log(nuevoEnlace);

//seleccionar elementos y asociarles un evento
//const btnEnviar = document.querySelector('.boton');
//btnEnviar.addEventListener('click',function(){
//console.log('enviando formulario')
//3});