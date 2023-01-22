import Cipher from "./components/Cipher"
import Description from "./components/Description"
import Header from "./components/Header"

function App() {

  return (
    <div className=" bg-slate-800 min-h-screen">
      <Header />
      <div className="App-Cipher">
        <Description />
        <Cipher />
      </div>
    </div>
    
  )
}

export default App
