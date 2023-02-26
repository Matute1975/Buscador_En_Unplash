import { useState } from 'react'
import './App.css'
import { Header } from './componets/Header/Header'
import { Random } from './componets/Random/Random'
import { Search } from './componets/Search/Search'

const App =()=> {

  
  const [input,setInput]=useState('')
  const [buscar,setBuscar]=useState('')
    
  const capturaBusqueda = () => { 
       //setBusca('')
       setBuscar(input)
       setInput('')
  } 

  return (
    <div className="App">
      
      <Header capturaBusqueda={capturaBusqueda} setInput={setInput} input={input}/>
      <Search buscar={buscar}/>  
      <Random />
      
    </div>
  )
}

export default App
