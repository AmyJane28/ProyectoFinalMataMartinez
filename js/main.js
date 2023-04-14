
class Alumno{
    constructor(nombre,tarea1,tarea2,tarea3,asistencia, examen){
        this.nombre = nombre;
        this.tarea1 = tarea1;
        this.tarea2 = tarea2;
        this.tarea3 = tarea3;
        this.asistencia = asistencia;
        this.examen = examen;
        
    }     
}

let listaAlumnos;
//Recuperamos lo guardado en formato JSON
let obtenerListaJSON = localStorage.getItem("listaAlumnos")

if(obtenerListaJSON){
    //recuperamos los datos JSON como objeto 
    listaAlumnos = JSON.parse(obtenerListaJSON)
}
else{
    listaAlumnos = []
}

console.log(listaAlumnos);

const formulario = document.getElementById("form")
//El formulario espera que el usuario dé clic en el botón "Guardar"
formulario.addEventListener("submit", (e)=> {
    //Cancelamos comportamiento del evento
    e.preventDefault();
    //Acceder al input y obtener valor que ingresó el usuario
    const nombre = document.getElementById("nombre").value
    const tarea1 = document.getElementById("tarea1").value
    const tarea2 = document.getElementById("tarea2").value
    const tarea3 = document.getElementById("tarea3").value
    const asistencia = document.getElementById("asistencia").value
    const examen = document.getElementById("examen").value
    
    //Creamos nuevo alumno
    const alumno = new Alumno(nombre,tarea1,tarea2,tarea3,asistencia, examen)
    //Añadimos el alumno al arreglo listaAlumnos
    listaAlumnos.push(alumno)

    //Pasamos a formato JSON
    const listaAlumnosJSON = JSON.stringify(listaAlumnos)

    //Guardamos en localStorage
    localStorage.setItem("listaAlumnos", listaAlumnosJSON)

    //Mostrar alerta cuando se registra nuevo alumno
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Alumno registrado',
        showConfirmButton: false,
        timer: 1900
      })
    
    //Reinicia formulario
    formulario.reset()
    
})

