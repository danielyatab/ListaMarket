import { useEffect, useState } from "react";
import { ProductosContext } from "./ProductosContext"

// eslint-disable-next-line react/prop-types
export const ProductosProvider = ({children}) => {
  const [productos, setProductos] = useState([]);
  const getFetch= async()=>{
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      if (!response.ok || data.length === 0) throw { status: response.status, statusText: response.statusText };
      setProductos(data);
    } catch (error) {
      alert(`Ocurrio un error: ${error}`);
    }
  }

  useEffect(() => {
    getFetch();
  }, [])
  

  return (
    <ProductosContext.Provider value={{productos}}>
      {children}
    </ProductosContext.Provider>
  )
}
