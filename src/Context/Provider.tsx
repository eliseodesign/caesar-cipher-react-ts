import { useState} from "react"
import Context from "./Context"

interface Props {
  children: JSX.Element | JSX.Element[]
}

const Provider = ({ children }:Props) => {

  const [cipher, setCifrar] = useState<boolean>(true)
  const [input, setInput] = useState<string>("")
  const [move, setMove] = useState<number>(1)

  const toSetCipher = (value:boolean):void => {
    setCifrar(value)
  }
  const toSetInput = (value:string):void =>{
    setInput(value)
  }

  const toSetMove = (value:number):void =>{
    setMove(value)
  }

  return (
    <Context.Provider value={{ input, cipher, toSetCipher, toSetInput, move, toSetMove}}>
      {children}
    </Context.Provider>
  )
}

export default Provider