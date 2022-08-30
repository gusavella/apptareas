let fs = require('fs');
let funcionesDeTareas={
        archivo : './app-tareas/tareas.json',
    leerArchivo : function(){
                  let arrayTareas=fs.readFileSync(this.archivo,'utf-8');
                  return JSON.parse(arrayTareas);
                  },
    escribirJSON: function(arreglo){
                    let tareaJson= JSON.stringify(arreglo);
                    fs.writeFileSync(this.archivo,tareaJson);
                  },
    
    guardarTarea: function(tarea){
                    let tareasArray = this.leerArchivo();
                    tareasArray.push(tarea)
                    this.escribirJSON(tareasArray)
                    },
filtrarPorEstado : function(estado){
                   let tareas=this.leerArchivo();
                   return tareas.filter(function(elemento){
                                        return elemento.estado==estado;
                        
                    })

                    
                    }                                         
}

module.exports=funcionesDeTareas;