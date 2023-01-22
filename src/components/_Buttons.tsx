import { useContext } from "react";
import "./style/buttons.css"
import Context from "../Context/Context";
const Buttons = () => {


  const { cipher, toSetCipher } = useContext(Context)

  
  console.log(toSetCipher)
  return (
    <div className="container-buttons">
      <button
        className={cipher ? "active" : ""}
        onClick={()=> toSetCipher?.(true) }
      >Cifrar</button>
      <button
        className={!cipher ? "active" : ""}
        onClick={()=> toSetCipher?.(false) }
      >Descidrar</button>
    </div>
  );
}

export default Buttons;