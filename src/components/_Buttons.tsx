
import "./style/buttons.css"
import { useStore } from "../store/store";
const Buttons = () => {


  const { cipher, toSetCipher } = useStore()

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
      >Descifrar</button>
    </div>
  );
}

export default Buttons;