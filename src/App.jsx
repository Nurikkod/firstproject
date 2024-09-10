import Header from "./Header"
import Main from "./Main"
import { useState } from 'react'
import './App.css'

function App () {
  const [weather, setWeather] = useState("")
  

  return (
    <>
    <Header setWeather = {setWeather} />
    <Main weather = {weather} /> 
    </>
  )
}

export default App