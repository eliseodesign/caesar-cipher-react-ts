import create from "zustand"

interface storeTypes {
  cipher:boolean;
  toSetCipher: (value:boolean) => void;
  input:string;
  toSetInput: (value:string) => void;
  move:number;
  toSetMove:(value:number) => void

}
export const useStore = create<storeTypes>((set)=>({
  cipher:true,
  toSetCipher:(value:boolean)=> set({cipher:value}),
  input:"",
  toSetInput:(value:string)=> set({input:value}),
  move:1,
  toSetMove:(value:number) => set({move:value})
}))