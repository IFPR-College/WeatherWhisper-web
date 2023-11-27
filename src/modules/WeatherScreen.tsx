import { useEffect, useState } from 'react'
import { WeatherScreenStyle } from './WeatherScreen.style'
import { TbDropletSearch } from 'react-icons/tb'
import axios from 'axios'
import { Alert } from '@chakra-ui/react'
import moment from 'moment'
import Select, { StylesConfig } from 'react-select'
import { languages, placeholderTranslations } from '../utils/constants'
import { FaTemperatureArrowUp, FaTemperatureArrowDown } from 'react-icons/fa6'
import { Flex } from '../components/Flex/Flex'
import { WiRaindrops } from 'react-icons/wi'
import { BsCloudSnow } from 'react-icons/bs'
import { FaTemperatureHalf } from 'react-icons/fa6'

const API_URL_WITH_KEY =
    'http://api.weatherapi.com/v1/forecast.json?key=ed1b060558fe44599c0234036232910&q='

export default function WeatherScreen() {
    const [value, setValue] = useState('')
    const [dataForecast, setDataForecast] = useState<any>([])
    const [locationForecast, setLocationForecast] = useState<any>()
    const [errorOnRequest, setErrorOnRequest] = useState(false)
    const [errorMessageRequest, setErrorMessageRequest] = useState('')
    const [indexSelected, setIndexSelected] = useState(0)
    const [languageSelected, setLanguageSelected] = useState({
        label: '🇵🇹',
        value: 'pt',
    })

    useEffect(() => {
        setDataForecast([])
        setLocationForecast([])
    }, [languageSelected])

    const handleChange = (event: any, state: any) => state(event.target.value)

    const customStyles: StylesConfig = {
        container: (provided: any) => ({
            ...provided,
            width: '90px',
            marginTop: '15px',
            marginLeft: '5px',
            height: '40px',
        }),
        option: (provided: any) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }),
    }

    function getForecastData(location: string) {
        axios
            .get(
                `${API_URL_WITH_KEY}${location}&days=4&aqi=no&alerts=no&lang=${languageSelected.value}`
            )
            .then((response: any) => {
                const { data } = response
                // const forecastFiltered = data.forecast.forecastday.filter((item:any, index:number) => index != 0)
                setDataForecast(data.forecast.forecastday)
                console.log(data)
                setIndexSelected(0)
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
                <WeatherScreenStyle.SelectContainer>
                    <Select
                        value={languageSelected}
                        onChange={(obj: any) => setLanguageSelected(obj)}
                        options={languages}
                        styles={customStyles}
                    />
                </WeatherScreenStyle.SelectContainer>
                <WeatherScreenStyle.InputField>
                    <WeatherScreenStyle.InputStyled
                        value={value}
                        onChange={(e: any) => handleChange(e, setValue)}
                        placeholder={
                            placeholderTranslations[languageSelected.value]
                        }
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

            {dataForecast.length > 0 ? (
                <WeatherScreenStyle.CurrentWeatherContainer>
                    <Flex width="30%" height="100%" direction="column">
                        <Flex grow={1}>
                            <Flex
                                grow={1}
                                direction="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <WeatherScreenStyle.TabBody>
                                    <img
                                        src={
                                            dataForecast[indexSelected].day
                                                .condition.icon
                                        }
                                    />
                                    {
                                        dataForecast[indexSelected].day
                                            .condition.text
                                    }
                                </WeatherScreenStyle.TabBody>
                                <Flex
                                    grow={1}
                                    width="100%"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Flex
                                        justifyContent="center"
                                        alignItems="center"
                                        margin="0px 30px"
                                    >
                                        <WiRaindrops
                                            size={50}
                                            color={'#919191'}
                                        />
                                        {
                                            dataForecast[indexSelected].day
                                                .avghumidity
                                        }
                                        %
                                    </Flex>
                                    <Flex
                                        justifyContent="center"
                                        alignItems="center"
                                        margin="0px 30px"
                                        padding="0px 10px 0px 0px"
                                    >
                                        <BsCloudSnow
                                            size={30}
                                            color={'#919191'}
                                        />
                                        <Flex padding="0px 0px 0px 10px">
                                            {
                                                dataForecast[indexSelected].day
                                                    .daily_chance_of_snow
                                            }
                                            %
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex grow={1} color={'#f92'} direction="column">
                            <Flex
                                justifyContent="space-between"
                                grow={1}
                                padding="0px 10px 0px 10px"
                            >
                                <Flex
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Flex padding="0px 5px 0px 0px">
                                        {
                                            dataForecast[indexSelected].day
                                                .maxtemp_c
                                        }
                                        º C
                                    </Flex>
                                    <FaTemperatureArrowUp size={25} />
                                </Flex>
                                <Flex
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Flex padding="0px 5px 0px 0px">
                                        {
                                            dataForecast[indexSelected].day
                                                .avgtemp_c
                                        }
                                        º C
                                    </Flex>
                                    <FaTemperatureHalf />
                                </Flex>
                                <Flex
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Flex padding="0px 5px 0px 0px">
                                        {
                                            dataForecast[indexSelected].day
                                                .mintemp_c
                                        }
                                    </Flex>
                                    <FaTemperatureArrowDown size={25} />
                                </Flex>
                            </Flex>
                            <Flex grow={1} justifyContent="space-between">
                                <Flex>
                                    {
                                        dataForecast[indexSelected].day
                                            .maxwind_kph
                                    }
                                </Flex>
                                <Flex>
                                    {dataForecast[indexSelected].day.mintemp_c}
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </WeatherScreenStyle.CurrentWeatherContainer>
            ) : null}

            <WeatherScreenStyle.TabsContainer>
                {dataForecast?.map((item: any, index: number) => {
                    return (
                        <WeatherScreenStyle.Tabs
                            key={`item-${index}`}
                            onClick={() => setIndexSelected(index)}
                            selected={index === indexSelected}
                        >
                            <WeatherScreenStyle.TabHeader>
                                <WeatherScreenStyle.TabNameLocation>
                                    {locationForecast?.name} -{' '}
                                    {locationForecast?.region}
                                </WeatherScreenStyle.TabNameLocation>
                                <WeatherScreenStyle.TabDate>
                                    {languageSelected.value == 'pt'
                                        ? moment(item?.date).format(
                                              'DD/MM/YYYY'
                                          )
                                        : moment(item?.date).format(
                                              'MM/DD/YYYY'
                                          )}
                                </WeatherScreenStyle.TabDate>
                            </WeatherScreenStyle.TabHeader>
                            <WeatherScreenStyle.TabBody>
                                <img src={item?.day?.condition?.icon} />
                                {item?.day?.condition?.text}
                            </WeatherScreenStyle.TabBody>
                            <WeatherScreenStyle.TabFooter>
                                <WeatherScreenStyle.TempContainer>
                                    <div style={{ paddingRight: '10px' }}>
                                        {' '}
                                        {item?.day?.maxtemp_c}º C
                                    </div>
                                    <FaTemperatureArrowUp size={32} />
                                </WeatherScreenStyle.TempContainer>
                                <WeatherScreenStyle.TempContainer>
                                    <div style={{ paddingRight: '10px' }}>
                                        {' '}
                                        {item?.day?.mintemp_c}º C
                                    </div>
                                    <FaTemperatureArrowDown size={32} />
                                </WeatherScreenStyle.TempContainer>
                            </WeatherScreenStyle.TabFooter>
                        </WeatherScreenStyle.Tabs>
                    )
                })}
            </WeatherScreenStyle.TabsContainer>
        </WeatherScreenStyle.Container>
    )
}
