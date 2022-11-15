import React, { useState } from "react";
import   "./stylegeneral/reset.scss";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Imagenes from "./components/imagen/Imagen";
import InfoSeccion from "./components/infoSeccion/infoSeccion";
import Navbar from "./components/navbar/navbar";
import Nombre from "./components/nombre/Nombre";
import { Context } from "./shared/contexts/Context";
import Fecha from "./components/fecha/Fecha";

function App() {
  const [ show, setShow ] = useState(null)
  return (
    <Context.Provider value={{ show, setShow }}>
      <div className="App">
        <Nombre />
        <div className="mainDiv">
          <Navbar />
          <Imagenes />
          <InfoSeccion />
          <Footer />
        </div>
        <Fecha/>
      </div>
    </Context.Provider>
  );
}

export default App;
