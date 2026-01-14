const fechaActual = new Date();
const diaDelMes = fechaActual.getDate();
console.log(diaDelMes);
document.getElementById('fechaHoy').textContent = diaDelMes + " de " + fechaActual.toLocaleString('es-ES', { month: 'long' }) + " de " + fechaActual.getFullYear();

const campos = [
    { pregunta: "Nombre del Arrendador", input: "inputArrendador", span: ".arrendador" },
    { pregunta: "Numero de DNI del Arrendador", input: "inputDniArrendador", span: ".dniArrendador" },
    { pregunta: "Nombre del Arrendatario", input: "inputArrendatario", span: ".arrendatario" },
    { pregunta: "Numero de DNI del Arrendatario", input: "inputDniArrendatario", span: ".dniArrendatario" },
    { pregunta: "Direccion del Inmueble", input: "inputDireccion", span: ".direccion" },
    { pregunta: "Tiempo de estadia en la vivienda", input: "inputDuracion", span: ".duracion" },
    { pregunta: "Fecha del Inicio Contrato", input: "inputFecha", span: ".fecha" },
    { pregunta: "Fecha de Fin de Contrato", input: "inputFechaFin", span: ".fechaFin" },
    { pregunta: "Monto de Pago alquiler", input: "inputMonto", span: ".monto" }
];


campos.forEach(campo => {
    const inputElement = document.getElementById(campo.input);
    const spanElement = document.querySelector(campo.span);

    if (inputElement && spanElement) {
        inputElement.addEventListener("input", function () {
            spanElement.innerHTML = this.value || "_____";
            spanElement.style.backgroundColor = this.value ? "#ffd877ff" : "transparent";
        });
    }
});


let AutoIncrementador = 0;
const titulosSeccion = ["Seccion - Datos de Personas", "Seccion - Datos Economicos", "Seccion - Registro de Fechas"];
document.getElementById('titulo').innerHTML = titulosSeccion[AutoIncrementador];
document.getElementById('elemento1').style.display = 'block';


function PreguntasDOM(evento) {

    const elementos = ['elemento1', 'elemento2', 'elemento3'];

    if (evento === 'avanzar' && AutoIncrementador < titulosSeccion.length - 1) {
        AutoIncrementador++;
        document.getElementById('titulo').innerHTML = titulosSeccion[AutoIncrementador];

        document.getElementById(elementos[AutoIncrementador]).style.display = 'block';
        document.getElementById(elementos[(AutoIncrementador - 1)]).style.display = 'none';

    } else {
        AutoIncrementador--;
        document.getElementById('titulo').innerHTML = titulosSeccion[AutoIncrementador];
        document.getElementById(elementos[(AutoIncrementador)]).style.display = 'block';
        document.getElementById(elementos[(AutoIncrementador + 1)]).style.display = 'none';
    }
}


const inputname = document.getElementById("inputArrendador");
const span = document.getElementById("contenidoNombreArrendador");
inputname.addEventListener("input", function () {
    span.textContent = inputname.value;
});




const inputnameArrendatario = document.getElementById("inputArrendatario");
const spanArrendatario = document.getElementById("contenidoNombreArrendatario");
inputnameArrendatario.addEventListener("input", function () {
    spanArrendatario.textContent = inputnameArrendatario.value;
});





let modalBool = false;
document.getElementById("questionArrendador").addEventListener("click", function () {
    modalBool = !modalBool;

    document.getElementById("questionModalArrendador").style.display =
        modalBool ? "block" : "none";
});

document.getElementById("questionArrendatario").addEventListener("click", function () {
    modalBool = !modalBool;

    document.getElementById("questionModalArrendatario").style.display =
        modalBool ? "block" : "none";
});



document.getElementById('fechaHoy').textContent = new Date().toLocaleDateString('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
});




const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');

mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});




function imprimir() {
    // Guardar estados originales
    const containerTitulo = document.getElementById('containerTitullo');
    const hoja = document.getElementById('hojaRellenado');
    const contrato = document.getElementById('contratoStyle');
    const formulario = document.getElementById('formularioRegistrar');

    const tituloDisplay = containerTitulo.style.display;
    const hojaShadow = hoja.style.boxShadow;
    const contratoClass = contrato.className;
    const formularioDisplay = formulario.style.display;

    // Cambios para impresión
    containerTitulo.style.display = 'none';
    hoja.style.boxShadow = 'none';
    contrato.removeAttribute('class');
    formulario.style.display = 'none';

    window.print();

    // Restaurar estilos
    containerTitulo.style.display = tituloDisplay;
    hoja.style.boxShadow = hojaShadow;
    contrato.className = contratoClass;
    formulario.style.display = formularioDisplay;
}
