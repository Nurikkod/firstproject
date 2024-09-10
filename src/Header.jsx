import React, { useState } from 'react'

const Header = ({setWeather}) => {
  const [city, setCity] = useState("")
    const handleInput = (e) => {
        setCity(e.target.value);  
    
       }

    const handleKeyDown = (e) => {
      if (e.key === "Enter"){
        setWeather(city)
      }
    }

    return (
    <div>
      <input onInput={handleInput}  onKeyDown={handleKeyDown} type="text" placeholder='type your city' /> 
    </div>
  )
}

export default Header