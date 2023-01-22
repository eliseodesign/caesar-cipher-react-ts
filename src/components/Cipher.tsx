import { useEffect, useState } from "react";
import Buttons from "./_Buttons";
import "./style/cipher.css"
import useCipher from "../hook/useCipher";
import {useStore} from "../store/store"

const Cipher = () => {

  // const {input, toSetInput, move, toSetMove} = useContext(Context)
  const [value, setValue] = useState<string>("")

  const {cipher, input, toSetInput, move, toSetMove} = useStore()

  useEffect(() => {
    setValue(useCipher(input,move,cipher))
  }, [input, move, cipher])
  
  function changeMove(e:any){
    
    if((typeof Number(e.target.value)) === "number" ) toSetMove?.(Number(e.target.value))
  }

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
          min="1"
          onChange={(e)=> changeMove(e)}
          value={move}
          type="number" /> 
      </div>

      <p className="resul">{value}</p>

    </div> );
}
 
export default Cipher;