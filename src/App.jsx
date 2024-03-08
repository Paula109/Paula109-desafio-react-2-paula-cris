import './App.css'
import { useState } from 'react'
import Registro from './components/Registro'

const App = () =>{
  const [alert, setAlert] = useState({ msg: '', color: '' })
  
  return (
    <Registro alert = {alert} setAlert = {setAlert}/>
  )
}

export default App
