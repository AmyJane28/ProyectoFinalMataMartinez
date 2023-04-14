class AlumnosController {
    constructor() {
        this.listaAlumnos = []
    }

    levantarAlumnos() {
        let resultadoJSON = localStorage.getItem("listaAlumnos")

        if (resultadoJSON) {
            this.listaAlumnos = JSON.parse(resultadoJSON)
        }
        else {
            this.listaAlumnos = []
        }
    }


    //Filtrar por nombre
    filtrarPorNombre(nombre) {
        this.listaAlumnos = this.listaAlumnos.filter(alumno => alumno.nombre.includes(nombre))
    }

    sumarCalif(){
        return 100
        
    }

    tareaTotal(){
        return this.sumarCalif() * .20;
    }
   
    
    
    //Mostrar en DOM
    render(nodo) {
        //Recorre la lista de Alumnos y se muestra en la sección de alumnos dentro de una tabla 
        this.listaAlumnos.forEach(alumno => {
            contenedor_padre.innerHTML += `<table class="table table-bordered border-primary">
            <tbody>
          <tr class="table-secondary" align="center" >
            <td WIDTH="110" ALIGN= "left" >${alumno.nombre}</td>
            <td WIDTH="5">${alumno.tarea1}</td>
            <td width="5">${alumno.tarea3}</td>
            <td WIDTH="5">${alumno.tarea2}</td>
            <td WIDTH="5">${alumno.asistencia}</td>
            <td WIDTH="5">${alumno.examen}</td>
            <td WIDTH="5">${this.tareaTotal()}</td>
            <td WIDTH="5">${alumno.asistencia * .20}</td>
            <td WIDTH="5">${alumno.examen * .60}</td>
            <td WIDTH="5">${alumno.tarea1 * .20 + alumno.examen * .60 + alumno.asistencia * .20}</td>
            
          </tr>
          </tbody>
      </table>`
        })
    }
    //Limpiar DOM
    limpiarDOM(nodo) {
        nodo.innerHTML = ""
    }
}

const controladorAlumnos = new AlumnosController()

//Verificar Storage
controladorAlumnos.levantarAlumnos()

//DOM
const contenedor_padre = document.getElementById("contenedor_alumnos")
const nombreBuscado = document.getElementById("nombreBuscado")


//App
controladorAlumnos.render(contenedor_padre)

//Filtrar por nombre
nombreBuscado.addEventListener("change", () => {
    controladorAlumnos.levantarAlumnos()
    console.log(nombreBuscado.value)
    controladorAlumnos.filtrarPorNombre(nombreBuscado.value)
    controladorAlumnos.limpiarDOM(contenedor_padre)
    controladorAlumnos.render(contenedor_padre)
})




