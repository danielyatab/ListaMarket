import { useContext } from "react";
import { Card } from "../components/card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasScreen = () => {
  const {productos} = useContext(ProductosContext);
  const {agregarCompra,  eliminarCompra } = useContext(CarritoContext);


  const handleAgregar = (compra)=>{
    compra.cantidad = 1;
    agregarCompra(compra)
  }

  const handleQuitar = (id)=>{
    eliminarCompra(id)
  }

  return (
    <div className="container w-11/12 mx-auto">
      <h2 className="text-2xl mt-4 font-semibold">Productos</h2>
      <hr/>
      <section className="mt-4 grid grid-flow-row gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {
          productos.length < 0 
            ?<p>No hay productos</p>
            :productos.map(el=>(<Card 
              key={el.id} 
              nombre={el.title} 
              precio={el.price} 
              img={el.image}
              handleAgregar={()=>handleAgregar(el)}
              handleQuitar={()=>handleQuitar(el.id)}
              ></Card>))
        }
      </section>
    </div>
  )
}
