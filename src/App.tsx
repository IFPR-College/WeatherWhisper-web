import { useState } from 'react'
import axios from 'axios'
import WeatherScreen from './modules/WeatherScreen'
import { ThemeProvider } from 'styled-components'
import './App.css'
import { GlobalStyles } from './styles/GlobalStyles'
const API_URL_WITH_KEY =
    'http://api.weatherapi.com/v1/current.json?key=ed1b060558fe44599c0234036232910&q=//vai a cidade aqui//'

export default function App() {

    function getForecastData(location: string) {
        axios
            .get(`${API_URL_WITH_KEY}${location}&aqi=yes`)
            .then((response:any) => {
                console.log('caiu no then', response)
            })
            .catch((response:any) => {
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
