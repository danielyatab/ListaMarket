import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const Card = ({nombre, img, precio, handleAgregar, handleQuitar}) => {
  const [agregado, setAgregado] = useState(false);

  const agregar = ()=>{
    handleAgregar()
    setAgregado(true);
  }

  const quitar = ()=>{
    handleQuitar()
    setAgregado(false);
  }

  return (
    <div className="bg-gray-50 p-3 rounded-lg shadow-md flex flex-col justify-between items-center">
      <p className="font-semibold text-center text-sm">{nombre}</p>
      <img src={img} alt={nombre} />
      <span>$ {precio}</span>
      {
        agregado 
          ?<button 
            className="px-4 py-1.5 bg-red-600 hover:bg-red-900 transition-all duration-700 ease rounded-md mt-2 text-white font-semibold"
            onClick={quitar}
          >Eliminar del carrito</button>
          :<button
            className="px-4 py-1.5 bg-green-600 hover:bg-green-900 transition-all duration-700 ease rounded-md mt-2 text-white font-semibold"
            onClick={agregar}
          >Agregar al carrito</button>
      }
    </div>
  )
}
