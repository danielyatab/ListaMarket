import { Navbar } from "./components/Navbar"
import { Routes, Route, Navigate } from "react-router-dom"
import { ComprasScreen } from "./pages/ComprasScreen"
import { CarritosScreen } from "./pages/CarritosScreen"
import { ProductosProvider } from "./context/ProductosProvider"
import { CarritoProvider } from "./context/CarritoProvider"

export const AppStore = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<ComprasScreen></ComprasScreen>}></Route>
          <Route path="/compras" element={<ComprasScreen></ComprasScreen>}></Route>
          <Route path="/carrito" element={<CarritosScreen></CarritosScreen>}></Route>
          <Route path="/*" element={<Navigate to='/'></Navigate>}></Route>
        </Routes>
      </CarritoProvider>
    </ProductosProvider>
  )
}
