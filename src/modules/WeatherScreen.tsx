import { useState } from 'react'
import { WeatherScreenStyle } from './WeatherScreen.style'
import { TbDropletSearch } from 'react-icons/tb'
import axios from 'axios'
import {
    Alert,
} from '@chakra-ui/react'

const API_URL_WITH_KEY =
    'http://api.weatherapi.com/v1/forecast.json?key=ed1b060558fe44599c0234036232910&q='

export default function WeatherScreen() {
    const [value, setValue] = useState('')
    const [doneSearchForecast, setDoneSearchForecast] = useState(false)
    const [dataForecast, setDataForecast] = useState<any>([])
    const [errorOnRequest, setErrorOnRequest] = useState(false)
    const [errorMessageRequest, setErrorMessageReques] = useState('')

    const handleChange = (event: any) => setValue(event.target.value)

    function getForecastData(location: string) {
        axios
            .get(`${API_URL_WITH_KEY}${location}&days=3&aqi=no&alerts=no`)
            .then((response: any) => {
                const { data } = response
                setDataForecast(data)
                console.log('caiu no then', response)
            })
            .catch((response: any) => {
                setErrorOnRequest(true)
                console.log(`${response.response.data.error.code} - ${response.response.data.error.message}`);
                
                setErrorMessageReques(`${response.data.error.code} - ${response.data.error.message}`)
                console.log('caiu no catch', response)
            })
    }

    function renderErrorIfOcurred() {
        if (errorOnRequest && errorMessageRequest.length > 0) {
            return (
                <WeatherScreenStyle.ErrorOcurredContainer>
                    <Alert status="error">
                        {errorMessageRequest}
                    </Alert>
                </WeatherScreenStyle.ErrorOcurredContainer>
            )
        }
    }

    return (
        <WeatherScreenStyle.Container>
            <WeatherScreenStyle.InputField>
                <WeatherScreenStyle.InputStyled
                    value={value}
                    onChange={handleChange}
                    placeholder="Digite uma cidade"
                />
                <WeatherScreenStyle.ButtonContainer
                    onClick={() => getForecastData(value)}
                >
                    <WeatherScreenStyle.ButtonStyled>
                        <TbDropletSearch size={20} />
                    </WeatherScreenStyle.ButtonStyled>
                </WeatherScreenStyle.ButtonContainer>
            </WeatherScreenStyle.InputField>
            {renderErrorIfOcurred()}
            <WeatherScreenStyle.TabsContainer>
                <WeatherScreenStyle.Tabs>YOU DIE</WeatherScreenStyle.Tabs>
                <WeatherScreenStyle.Tabs>YOU DIE</WeatherScreenStyle.Tabs>
                <WeatherScreenStyle.Tabs>YOU DIE</WeatherScreenStyle.Tabs>
            </WeatherScreenStyle.TabsContainer>
        </WeatherScreenStyle.Container>
    )
}
