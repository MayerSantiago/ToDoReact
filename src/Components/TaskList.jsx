

import Tareas from "./Tareas"
const TaskList = ({tareas,settarea, eliminarTarea}) => {
    
    
 
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">

     {tareas && tareas.length ? (<> <h2 className="font-black text-3xl text-center mb-10">Lista de Tareas</h2>
   
   {tareas.map((tarea)=>{
   return(
       <Tareas
       key={tarea.id}
       tarea={tarea}
       settarea={settarea}
       eliminarTarea={eliminarTarea}
       />
      
   )
   })}</>) :(<><h2 className="font-black text-3xl text-center mb-10">No tengo tareas</h2></>) }

    

    
    
    </div>
  )
}

export default TaskList