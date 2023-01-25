import React, { useEffect, useState, KeyboardEvent} from "react";
import Buttons from "./_Buttons";
import "./style/cipher.css"
import useCipher from "../hook/useCipher";
import {useStore} from "../store/store"
import Input from "./_Input";

const Cipher = () => {
  const [value, setValue] = useState<string>("")
  const {cipher, input, toSetInput, move, toSetMove} = useStore()

  useEffect(() => {
    setValue(useCipher(input,move,cipher))
  }, [input, move, cipher])
  
  function changeMove(e:React.ChangeEvent<HTMLInputElement>){
    if((typeof Number(e.target.value)) === "number" ) toSetMove(Number(e.target.value))
  }

  function changeInput(e:React.ChangeEvent<HTMLInputElement>){
    toSetInput((e.target as HTMLInputElement).value)
}

  return ( 
    <div className="cipher">

      <Buttons />
      <Input 
        value={input} 
        func={changeInput} 
        message="Ingrese Texto" 
        type={1}/>
      <Input 
        value={move} 
        func={changeMove} 
        message="Movimiento" 
        type={2}/>
      
      <p className="resul">{value}</p>

    </div> );
}
 
export default Cipher;