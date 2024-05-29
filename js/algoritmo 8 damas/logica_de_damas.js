let dmas= []
function subirdato(){

    let  n = document.getElementById("damaas").value
    n = Number(n)
function damas(n){
    let dmas= []
    const board = Array.from({ length: n }, () => Array(n).fill(0));
    function seguro(fila,columna){
            for (var i = 0 ; i <= fila ;i++){
                if (board[i][columna] === 1)return false
            }
            for (var i = fila , j = columna ; i >= 0 && j >= 0; i--,j--)
                if (board[i][j] === 1)return false
            for (var i = fila , j = columna; i >= 0 && j < n ;i--,j++)
                if (board[i][j] === 1 )return false
            return true
    }
    function atras(fila){
        if (fila === n){
            dmas.push(board.map(fila => fila.join("")))
            return;
        }
        for (var columna = 0 ; columna < n;columna++){
            if (seguro(fila,columna)){
                board[fila][columna] = 1
                atras(fila + 1)
                board[fila][columna] = 0
             }
        }
    }
    atras(0)
    return dmas
}
const soluciones = damas(n)
function crearopciones(n){
    const opciones = document.createElement("select")   
     opciones.id ="miSelect"
    for (var i = 0 ; i <= soluciones.length -1 ;i++ ){
        const num = document.createElement("option")
        num.value = i + 1
        num.textContent = ` ${i+1}`
        opciones.appendChild(num)
    } 
    return opciones
}
function crearTabla(n,u) {
    // Crear un nuevo elemento tabla
    const tabla = document.createElement('table');
    // Iterar sobre las filas
    for (let i = 0; i < n; i++) {
        // Crear un nuevo elemento fila
        const fila = document.createElement('tr');
        // Iterar sobre las columnas
        for (let j = 0; j < n; j++) {
            // Crear un nuevo elemento celda
            const celda = document.createElement('td');
            if ( (i+j) % 2 === 0 ){
                celda.classList.add('par')
            }
            if ( Number(soluciones[u][i][j]) === 1 ){
                const imagen = document.createElement('img')
                imagen.src = 'imagenes/ESTA.png' 
                celda.appendChild(imagen)
            } else{
            }
            // Añadir la celda a la fila
            fila.appendChild(celda);
        }
        
        // Añadir la fila a la tabla
        tabla.appendChild(fila);
    }
    return tabla;
}
const optiones = document.getElementById("hola")
optiones.innerHTML = ""
const otra = crearopciones(n)
optiones.appendChild(otra)
const contenedor = document.getElementById('contenedor');
contenedor.innerHTML = ""
// Crear la tabla
const tabla = crearTabla(n,0);

// Agregar la tabla al contenedor
contenedor.appendChild(tabla);
const miSelect = document.getElementById('miSelect');

// Agregar un Event Listener para el evento 'change'
miSelect.addEventListener('change', function(event) {
    // Obtener el valor de la opción seleccionada
    const opcionSeleccionada = event.target.value;
    contenedor.innerHTML = ""
const tabla = crearTabla(n,opcionSeleccionada-1);
contenedor.appendChild(tabla);
});
}

