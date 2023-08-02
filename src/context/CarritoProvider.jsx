import { useReducer } from "react"
import { CarritoContext } from "./CarritoContext"


const initialState = []

// eslint-disable-next-line react/prop-types
export const CarritoProvider = ({ children }) => {

  const comprasReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case '[CARRITO] Agregar Compra':
        return [...state, action.payload]
      case '[CARRITO] Aumentar Compra':
        return state.map(el => {
          const cant = el.cantidad + 1
          if (el.id === action.payload) return { ...el, cantidad: cant }
          return el
        })
      case '[CARRITO] Disminuir Compra':
        return state.map(el => {
          const cant = el.cantidad - 1
          if (el.id === action.payload && el.cantidad > 1) return { ...el, cantidad: cant }
          return el
        })
      case '[CARRITO] Eliminar Compra':
        return state.filter(el => el.id !== action.payload);
      default:
        return state
    }
  }


  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  const agregarCompra = (compra) => {
    const action = {
      type: '[CARRITO] Agregar Compra',
      payload: compra
    }
    dispatch(action);
  }
  const aumentarCompra = (id) => {
    const action = {
      type: '[CARRITO] Aumentar Compra',
      payload: id
    }
    dispatch(action);
  }
  const disminuirCompra = (id) => {
    const action = {
      type: '[CARRITO] Disminuir Compra',
      payload: id
    }
    dispatch(action);
  }
  const eliminarCompra = (id) => {
    const action = {
      type: '[CARRITO] Eliminar Compra',
      payload: id
    }
    dispatch(action);
  }


  return (
    <CarritoContext.Provider value={{ listaCompras, agregarCompra, aumentarCompra, disminuirCompra, eliminarCompra }}>
      {children}
    </CarritoContext.Provider>
  )
}
