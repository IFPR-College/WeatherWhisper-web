import { useState } from 'react'
import axios from 'axios'
import WeatherScreen from './modules/WeatherScreen'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import './App.css'
const API_URL_WITH_KEY =
    'http://api.weatherapi.com/v1/current.json?key=ed1b060558fe44599c0234036232910&q='

export default function App() {
    const [count, setCount] = useState(0)

    function getForecastData(location: string) {
        axios
            .get(`${API_URL_WITH_KEY}${location}&aqi=yes`)
            .then((response) => {
                console.log('caiu no then', response)
            })
            .catch((response) => {
                console.log('caiu no catch', response)
            })
    }

    return (
        <div className='root-fake'>
            <ThemeProvider theme={{}}>
            <GlobalStyles />
            <WeatherScreen />
        </ThemeProvider>
        </div>
    )
}
