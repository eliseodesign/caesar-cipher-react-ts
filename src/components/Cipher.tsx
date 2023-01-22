import { useContext, useEffect, useState } from "react";
import Buttons from "./_Buttons";
import "./style/cipher.css"
import Context from "../Context/Context";
import useCipher from "../hook/useCipher";

const Cipher = () => {

  const {input, toSetInput, move, toSetMove, cipher} = useContext(Context)

  const [value, setValue] = useState<string>("")

  
  useEffect(() => {
    setValue(useCipher(input,move,cipher))
  }, [input, move])
  

  return ( 
    <div className="cipher">

      <Buttons />

      <div className="input i1">
        <label>Ingrese Texto:</label>
        <input 
          onChange={(e)=> toSetInput?.(e.target.value)}
          value={input}
          type="text" /> 
      </div>

      <div className="input i2">
        <label>Movimiento:</label>
        <input 
          onChange={(e)=> toSetMove?.(Number(e.target.value))}
          value={move}
          type="number" /> 
      </div>

      <p className="resul">{value}</p>

    </div> );
}
 
export default Cipher;