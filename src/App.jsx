import { Formulario } from "./Components/Formulario"
import { Header } from "./Components/Header"
import TaskList from "./Components/TaskList"
import { useState, useEffect } from "react";

function App() {
  
  const  [tareas, settareas] = useState([])
  const [tarea, settarea] = useState({})




  useEffect(()=>{
    const obtenerTareasLocalStorage = () =>{
      const tareasLocalStorage = JSON.parse(localStorage.getItem("tareas")) ?? [];
      settareas(tareasLocalStorage);
    };
    obtenerTareasLocalStorage();
    },[]);

  useEffect(()=>{
    localStorage.setItem('tareas', JSON.stringify(tareas))
  },[tareas])




  const eliminarTarea = (id)=>{
    const actualizarTarea = tareas.filter( (tarea) => tarea.id !==id);
    settareas(actualizarTarea)

  }
  return (
    <>
     <div className="container mx-auto">
      <Header 
      valor={1}
      />
      <div className="mt-12 md:flex">
      <Formulario
      tarea = {tarea}
      tareas={tareas}
      settareas={settareas}
      settarea= {settarea}
      />
      <TaskList
      tareas={tareas}
      settarea={settarea}
      eliminarTarea={eliminarTarea}/>
      
      </div>
     </div>
    </>
  )
}

export default App
