import { useEffect } from 'react'
import axios from 'axios'

const Main = ({weather}) => {
 
  useEffect(() => {
    const getData = async() => {
      let {data} = await axios('https://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=5deb6268a7ba84dc280092cf814ff89c')
        console.log(data);
  }
  getData()
}, [weather])

  console.log(weth?.weather && weth?.weather[0].icon);
  return (
    <div> 
      <p>
      { 
        Math.round(weth?.main?.temp - 273)
      
      }
      </p>
      <p>
        День {weth?.main?.temp.max}
      </p>
      <p>
        Ночь {weth?.main?.temp.min}
      </p>
      <img src={`https://openweathermap.org/img/wn/${weth?.weather && weth?.weather[0].icon}@2x.png`} alt=" "/>
      <p>
      "speed": 1.7,
      </p>
{
    weather
}


    </div>
  )
}

export default Main