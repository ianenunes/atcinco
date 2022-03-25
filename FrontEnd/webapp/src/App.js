import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Clientes from "./views/Clientes";
import ClientesCreate from "./views/Clientes/Create";
import Destinos from "./views/Destinos";
import DestinosCreate from "./views/Destinos/Create";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import "./assets/style.css";

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Clientes-Create" element={<ClientesCreate />} />
        <Route path="/Clientes-Update/:id" element={<ClientesCreate />} />
        <Route path="/Destinos" element={<Destinos />} />
        <Route path="/Destinos-Create" element={<DestinosCreate />} />
        <Route path="/Destinos-Update/:id" element={<DestinosCreate />} />

      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
