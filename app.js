let funcionesDeTareas = require('./funcionesDeTareas');
let accion=process.argv[2];

function Tarea(titulo){
    this.titulo=titulo;
    this.estado='Pendiente';
}

switch(accion){
    
    case 'listar':
        console.log(accion)
        console.log('Listado de tareas')
        console.log('------------------')
        let arreglo=funcionesDeTareas.leerArchivo();

        arreglo.forEach((elemento, index)=>{
                        console.log(`${index+1}. ${elemento.titulo} - ${elemento.estado}`);
                        });
        break; 

    case 'crear':
            if(process.argv[3]){
                let nuevaTarea= process.argv[3];
                let tarea={'titulo':nuevaTarea,'estado':'pendiente'};
                funcionesDeTareas.guardarTarea(tarea)
                console.log(`Se ha creado  la tarea ${tarea.titulo}`)
            }
        break;

    case 'filtrar':
            if(process.argv[3]){
                let estado= process.argv[3];
                console.log(`Tareas filtradas por estado: ${estado}`)
                let tareasFiltradas= funcionesDeTareas.filtrarPorEstado(estado)
                tareasFiltradas.forEach((elemento, index)=>{
                    console.log(`${index+1}. ${elemento.titulo} - ${elemento.estado}`);
                    });  
            }
        break;

    case undefined:
        console.log("Atención - Tienes que pasar una acción");
        console.log('Las acciones disponibles son: Listar')
        console.log('------------------')
        break;

    default :
        console.log("No entiendo qué quieres hacer");
        console.log('Las acciones disponibles son: Listar')
        console.log('------------------')
    break;

}