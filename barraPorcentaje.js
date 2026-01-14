let pasoActual = 1;
const totalPasos = 3;

function actualizarBarra() {
    const barra = document.getElementById('barra');
    const porcentaje = (pasoActual / totalPasos) * 100;
    barra.style.width = porcentaje + '%';
}

function PreguntasDOM(accion) {
    if (accion === 'avanzar' && pasoActual < totalPasos) {
        pasoActual++;
    } else if (accion === 'retroceder' && pasoActual > 1) {
        pasoActual--;
    }

    for (let i = 1; i <= totalPasos; i++) {
        const seccion = document.getElementById('elemento' + i);
        seccion.style.display = (i === pasoActual) ? 'block' : 'none';
    }

    actualizarBarra(); 
}

window.onload = () => {
    PreguntasDOM();
}; 

 