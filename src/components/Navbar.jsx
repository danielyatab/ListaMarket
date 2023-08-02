import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { NavLink } from "react-router-dom"
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const Navbar = () => {

  const {listaCompras} = useContext(CarritoContext);

  return (
    <>
    <div className="sticky dark:bg-gray-700 py-4 text-white  text-2xl font-semibold text-center sm:hidden">
      <span>Store Market</span>
    </div>
    <div className="fixed bottom-0  z-50 w-full h-16 sm:h-12 flex py-1 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600 font-semibold sm:sticky sm:top-0 sm:flex  sm:items-center text-md sm:px-6">
      <div className="w-full flex items-center justify-around sm:justify-start">
        <NavLink to='/' className="text-white  hidden w-52  text-2xl sm:block pointer">Store Market</NavLink>
        <NavLink to='/'  type="button" className=" mx-1 px-5 py-1.5 hover:rounded-md hover:bg-gray-50  dark:hover:bg-gray-800 group">
          <span className="flex flex-col justify-center items-center sm:flex-row text-gray-500 dark:text-gray-400  group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-all duration-700 ease"><HomeIcon/>Home</span>
        </NavLink>
        <NavLink to='/compras' type="button" className="mx-1 px-5 py-1.5 hover:rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 group transition-all duration-700 ease">
          <span  className="flex flex-col justify-center items-center sm:flex-row text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-all duration-700 ease"><StorefrontIcon/>Compras</span>
        </NavLink>
        <NavLink to='/carrito' className="mx-1 px-5 py-1.5 hover:rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 group transition-all duration-700 ease">
          <span  className="flex flex-col justify-center items-center sm:flex-row text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"><LocalGroceryStoreIcon/>Carrito</span>
        </NavLink>
        
      </div>
      <NavLink to='/carrito' className="fixed right-3.5 bottom-16 bg-blue-500 p-4 rounded-full sm:p-1 sm:static transition-all duration-700 ease hover:bg-blue-300">
        <Badge badgeContent={listaCompras.length} color="error">
          <ShoppingCart color="action" />
        </Badge>
      </NavLink>
    </div>
    </>
  )
}
