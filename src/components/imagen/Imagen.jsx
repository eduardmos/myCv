import { useContext } from "react";
import { Context } from "../../shared/contexts/Context";
import "./Imagen.scss";
import ojoscerrados from "../../assets/img/ojoscerrados.png"
import ojosabiertos from "../../assets/img/ojosabiertos.png"
const Imagenes = () => {
  const {show}= useContext(Context);
  console.log(ojoscerrados);
  return (
    <div className="imagen">
      <img className="img1" src={show === null ? ojoscerrados : ojosabiertos}  alt="" />
    </div>
  );
};

export default Imagenes;
