let listaNombresGastos = [];
let listaDescripcionGastos = [];
let listaValoresGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let descripcionGasto = document.getElementById('descripcionGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    
    console.log(nombreGasto);
    console.log(descripcionGasto);
    console.log(valorGasto);

    console.log(listaNombresGastos);

    listaNombresGastos.push(nombreGasto);
    listaDescripcionGastos.push(descripcionGasto);
    listaValoresGastos.push(valorGasto);
    //alert('Click del usuario');

    console.log(listaNombresGastos);
    console.log(listaDescripcionGastos);
    console.log(listaValoresGastos);

    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
      htmlLista += `<li>${elemento} - ARS $${valorGasto.toFixed(2)} - ${listaDescripcionGastos[posicion]}
     <button onclick="modificarGasto(${posicion});">Modificar</button>
     <button onclick="eliminarGasto(${posicion});">Eliminar</button>
      </li>`

      listaElementos.innerHTML = htmlLista;
        //calculamos el total de gastos
        totalGastos += Number(valorGasto);
    })
       listaElementos.innerHTML = htmlLista;
       totalElementos.innerHTML = totalGastos.toFixed(2);
if (totalGastos > 500000){
    alert("Cuidado estas gastando mas de 500000 Pesos");
}

       limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('descripcionGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion,1);
    listaDescripcionGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}

function modificarGasto(posicion) {
    const nuevoValor = prompt("Introduce el nuevo valor del gasto:");
    if (nuevoValor !== null && !isNaN(nuevoValor)) {
        listaValoresGastos[posicion] = Number(nuevoValor);
        actualizarListaGastos();
    }
}