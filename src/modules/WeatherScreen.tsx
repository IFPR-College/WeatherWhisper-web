import { useState } from 'react'
import { WeatherScreenStyle } from './WeatherScreen.style'
import { TbDropletSearch } from 'react-icons/tb'
import axios from 'axios'
import { Alert } from '@chakra-ui/react'
import moment from 'moment'
import Select from 'react-select'
import { languages, placeholderTranslations } from '../utils/constants'
const API_URL_WITH_KEY =
    'http://api.weatherapi.com/v1/forecast.json?key=ed1b060558fe44599c0234036232910&q='

export default function WeatherScreen() {
    const [value, setValue] = useState('')
    const [dataForecast, setDataForecast] = useState<any>([])
    const [locationForecast, setLocationForecast] = useState<any>()
    const [errorOnRequest, setErrorOnRequest] = useState(false)
    const [errorMessageRequest, setErrorMessageRequest] = useState('')
    // const [languageSelected, setLanguageSelected] = useState({
    //     label: '🇵🇹',
    //     value: 'pt',
    // })

    const handleChange = (event: any, state: any) => state(event.target.value)

    // const customStyles = {
    //     container: (provided: any) => ({
    //         ...provided,
    //         width: '90px',
    //         marginTop: '15px',
    //         marginLeft: '5px'
    //     }),
    // }

    function getForecastData(location: string) {
        axios
            .get(
                `${API_URL_WITH_KEY}${location}&days=3&aqi=no&alerts=no&lang=pt`
            )
            .then((response: any) => {
                const { data } = response
                setDataForecast(data.forecast)
                console.log(data)

                setLocationForecast(data.location)
                setErrorOnRequest(false)
                setErrorMessageRequest('')
            })
            .catch((response: any) => {
                setErrorOnRequest(true)
                setErrorMessageRequest(
                    `Status code: ${response.response.status} - ${response.message}`
                )
                setDataForecast([])
            })
    }

    function renderErrorIfOcurred() {
        if (errorOnRequest && errorMessageRequest.length > 0) {
            return (
                <WeatherScreenStyle.ErrorOcurredContainer>
                    <Alert
                        status="error"
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        {errorMessageRequest}
                    </Alert>
                </WeatherScreenStyle.ErrorOcurredContainer>
            )
        }
    }

    function handleKeyUp(e: any) {
        if (e.code == 'Enter' || e.code == 'NumpadEnter') {
            getForecastData(value)
        }
    }

    return (
        <WeatherScreenStyle.Container>
            <WeatherScreenStyle.Header>
                {/* <WeatherScreenStyle.SelectContainer>
                    <Select
                        value={languageSelected}
                        onChange={(obj: any) => setLanguageSelected(obj)}
                        options={languages}
                        styles={customStyles}
                    />
                </WeatherScreenStyle.SelectContainer> */}
                <WeatherScreenStyle.InputField>
                    <WeatherScreenStyle.InputStyled
                        value={value}
                        onChange={(e: any) => handleChange(e, setValue)}
                        placeholder="Digite uma cidade"
                        onKeyUp={(e: any) => handleKeyUp(e)}
                    />
                    <WeatherScreenStyle.ButtonContainer
                        onClick={() => getForecastData(value)}
                    >
                        <WeatherScreenStyle.ButtonStyled>
                            <TbDropletSearch size={20} />
                        </WeatherScreenStyle.ButtonStyled>
                    </WeatherScreenStyle.ButtonContainer>
                </WeatherScreenStyle.InputField>
            </WeatherScreenStyle.Header>

            {renderErrorIfOcurred()}
            <WeatherScreenStyle.TabsContainer>
                {dataForecast?.forecastday?.map((item: any, index: number) => {
                    return (
                        <WeatherScreenStyle.Tabs key={`item-${index}`}>
                            <WeatherScreenStyle.TabHeader>
                                <WeatherScreenStyle.TabNameLocation>
                                    {locationForecast?.name} -{' '}
                                    {locationForecast?.region}
                                </WeatherScreenStyle.TabNameLocation>
                                <WeatherScreenStyle.TabDate>
                                    {moment(item?.date).format('DD/MM/YYYY')}
                                </WeatherScreenStyle.TabDate>
                            </WeatherScreenStyle.TabHeader>
                            <WeatherScreenStyle.TabBody>
                                <img src={item?.day?.condition?.icon} />
                                {item?.day?.condition?.text}
                            </WeatherScreenStyle.TabBody>
                            <WeatherScreenStyle.TabFooter>
                                
                            </WeatherScreenStyle.TabFooter>
                        </WeatherScreenStyle.Tabs>
                    )
                })}
            </WeatherScreenStyle.TabsContainer>
        </WeatherScreenStyle.Container>
    )
}
