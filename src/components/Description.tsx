import Github from "./_Github";
import "./style/description.css"

const Description = () => {
  return ( 
    <div className=" flex-col text-gray-300">
      <h1 className="text-4xl  font-extrabold">
        CODIFICADOR DE <br />
        <span className="text-green-300">
          CIFRADO CÉSAR
        </span>
      </h1>

      <p className="text-lg p">
        Ingresa el texto a codificar, y el número de posiciones de desplazo. El resultado cambiará automaticamente.

        <br /> <br />

        <a className="by" href="https://github.com/eliseodesign">Creador por  <Github /> <b>eliseodesign</b> </a>
      </p>

     


    </div> 
    )
}
 
export default Description;