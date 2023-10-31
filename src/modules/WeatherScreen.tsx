import { useState } from 'react'
import { WeatherScreenStyle } from './WeatherScreen.style'
import { Input } from '@chakra-ui/react'
import { TbDropletSearch } from 'react-icons/tb'
import axios from 'axios'


const API_URL_WITH_KEY =
    'http://api.weatherapi.com/v1/current.json?key=ed1b060558fe44599c0234036232910&q='

export default function WeatherScreen() {
    const [value, setValue] = useState('')

    const handleChange = (event: any) => setValue(event.target.value)

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
        <WeatherScreenStyle.Container>
            <WeatherScreenStyle.InputField>
                <WeatherScreenStyle.InputStyled
                    value={value}
                    onChange={handleChange}
                    placeholder="Digite uma cidade"
                />
                <WeatherScreenStyle.ButtonContainer onClick={() => getForecastData(value)}>
                    <WeatherScreenStyle.ButtonStyled>
                        <TbDropletSearch size={20} />
                    </WeatherScreenStyle.ButtonStyled>
                </WeatherScreenStyle.ButtonContainer>
            </WeatherScreenStyle.InputField>
            <WeatherScreenStyle.TabsContainer>
                <WeatherScreenStyle.Tabs>YOU DIE</WeatherScreenStyle.Tabs>
                <WeatherScreenStyle.Tabs>YOU DIE</WeatherScreenStyle.Tabs>
                <WeatherScreenStyle.Tabs>YOU DIE</WeatherScreenStyle.Tabs>
            </WeatherScreenStyle.TabsContainer>
        </WeatherScreenStyle.Container>
    )
}
