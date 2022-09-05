import { useState , useEffect} from "react";
import AlertError from "./AlertError";

export const Formulario = ({tareas,  settareas, tarea , settarea}) => {
  const [titulo, settitulo] = useState("");
  const [fecha, setfecha] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [error, seterror] = useState(false);

  useEffect(()=>{
    if(Object.keys(tarea).length > 0){
        settitulo(tarea.titulo)
        setfecha(tarea.fecha)
        setdescripcion(tarea.descripcion)
    }
  },[tarea])

  const generarId=()=>{
    const id = Math.random().toString(20).substring(2);
    return id
  } 

  //--Validación formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([titulo, fecha, descripcion].includes("")) {
      seterror(true);
      return
    } 
      seterror(false);
    
    

    // objeto de tareas

    const objetoTareas = {
        titulo,fecha,descripcion 
    }


if(tarea.id){
    //editando tarea
    objetoTareas.id =tarea.id
    const tareasActualizadas = tareas.map( tareaState => 
        tareaState.id === tarea.id ? objetoTareas : tareaState 
        );

    settareas(tareasActualizadas)
    settarea({})






}else{
 //creando tarea
 objetoTareas.id = generarId();
 settareas([...tareas, objetoTareas])
}

    
    settitulo('')
    setfecha('')
    setdescripcion('')
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10">
      <h2 className="font-black text-3xl text-center">Creación de tareas</h2>
      
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mt-10"
      >
        {error && <AlertError
        mensaje="Faltan campos por diligenciar"
        />}

        <div className="mb-5">
          <label htmlFor="titulo" className="block text-gray-600">
            Titulo
          </label>
          <input
            id="titulo"
            type="text"
            placeholder="Titulo de la tarea"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={titulo}
            onChange={(e) => settitulo(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="fecha" className="block text-gray-600">
            Fecha
          </label>
          <input
            id="fecha"
            type="date"
            placeholder="Fecha"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={fecha}
            onChange={(e) => setfecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="descripcion" className="block text-gray-600">
            Descripción
          </label>
          <textarea
            id="descripcion"
            type="text"
            placeholder="Descripción de la tarea"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            value={descripcion}
            onChange={(e) => setdescripcion(e.target.value)}
          />
        </div>

{tarea.id?( <input
          type="submit"
          className="bg-purple-600 w-full p-3 text-white uppercase font-bold rounded-md
         hover:bg-purle-800 transition-colors cursor-pointer"
          value="Actualizar Tarea"
        />):  <input
        type="submit"
        className="bg-blue-600 w-full p-3 text-white uppercase font-bold rounded-md
       hover:bg-blue-800 transition-colors cursor-pointer"
        value="Crear Tarea"
      />}

       
      </form>
    </div>
  );
};
