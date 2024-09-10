import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather?q=Bishkek&appid=5deb6268a7ba84dc280092cf814ff89c'
    
    
});