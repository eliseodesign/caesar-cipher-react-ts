import { createContext } from "react";

interface ContextTypes {
  cipher:boolean;
  toSetCipher?: (value:boolean) => void;
  input:string;
  toSetInput?: (value:string) => void;
  move:number;
  toSetMove?:(value:number) => void

}

const Context = createContext<ContextTypes>({
  cipher:true,
  input:"",
  move:1
  
})

export default Context