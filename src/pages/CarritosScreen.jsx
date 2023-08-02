import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritosScreen = () => {
  const { listaCompras, aumentarCompra, disminuirCompra, eliminarCompra } = useContext(CarritoContext);

  const calcularTotal = () => {
    return listaCompras.reduce((total, el) => total + el.cantidad * el.price, 0).toFixed(2);
  }
  const imprimir = () => {
    print();
  }

  return (
    <>
      <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg height-table w-11/12 mt-4 mx-auto">
        <table className="w-full text-left text-gray-500 dark:text-gray-400 ">
          <thead className="sticky top-0 text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-300 dark:text-gray-800">
            <tr>
              <th scope="col" className="px-2 py-3">
                Producto
              </th>
              <th scope="col" className="px-2 py-3">
                Precio
              </th>
              <th scope="col" className="px-2 py-3">
                Cantidad
              </th>
              <th scope="col" className="px-2 py-3 text-center">
                <span>Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              listaCompras.map(el => (
                <tr key={el.id} className="bg-white border-b dark:bg-gray-100 text-left">
                  <th scope="row" className="px-2 font-medium  text-black">
                    {el.title}
                  </th>
                  <td className="px-1 py-4">
                    {el.price}$
                  </td>
                  <td className="px-1 py-4 flex flex-col sm:flex-row items-center">
                    <button className="order-3 sm:order-1 bg-gray-500 p-1 rounded-full text-white font-bold h-auto w-5 text-center mx-1 hover:bg-gray-600 transition-all duration-500 ease"
                      onClick={() => disminuirCompra(el.id)}
                    >-</button>
                    <span className="order-2">{el.cantidad}</span>
                    <button className="order-1 sm:order-3 bg-gray-500 p-1 rounded-full text-white font-bold h-auto w-5 text-center mx-1 hover:bg-gray-600 transition-all duration-500 ease"
                      onClick={() => aumentarCompra(el.id)}
                    >+</button>
                  </td>
                  <td className="px-1 py-4 text-center">
                    <button href="#" className="bg-red-500 px-2 py-1 font-medium rounded-lg text-white dark:text-white-500 hover:underline"
                      onClick={() => { eliminarCompra(el.id) }}
                    >Delete</button>
                  </td>
                </tr>

              ))
            }
            <tr className="sticky bottom-0 bg-white h-12">
              <th><b className="text-black">Total:</b></th>
              <td></td>
              <td></td>
              <td className="text-center font-bold text-black">${calcularTotal()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-11/12 mx-auto">
        <button className="bg-blue-500 w-full mt-4 px-1 py-2 text-white rounded-lg font-medium text-lg hover:bg-blue-700"
          onClick={() => { imprimir() }}
        >Comprar</button>
      </div>
    </>
  )
}
