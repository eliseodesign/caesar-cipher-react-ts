
interface input {
   message:string,
   func:(e:React.ChangeEvent<HTMLInputElement>)=> void,
   value: number | string, 
   type:number
}

const Input = ({message, func, value, type}:input) => {
  return ( 
  <div className={`input ${type}`}>
    <label>{message}:</label>
    <input 
      min="1"
      onChange={(e)=> func(e)}
      value={value}
      type={typeof value} /> 
  </div> 
)
}
 
export default Input;