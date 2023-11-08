import styled from 'styled-components'
import { ThemesColors } from '../styles/GlobalStyles'
import { Button, Input } from '@chakra-ui/react'

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${ThemesColors.grayPrimary};
    display: flex;
    flex-direction: column;
    font-family: 'OptimusPrinceps', sans-serif;
    font-size: 25px;
    overflow: auto;
`

const InputStyled = styled(Input)`
    height: 40px;
    width: 100%;
    font-family: 'OptimusPrinceps', sans-serif;
    font-size: 20px;
    font-weight: 500;
    max-width: 50%;
    margin: 15px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: ${ThemesColors.whitePrimary};
`

const ButtonContainer = styled.div`
    display: flex;
    width: 'auto';

    cursor: pointer;

    border-radius: 15px;
    :hover {
        background-color: ${ThemesColors.orangePrimaryHover};
    }

    :active {
        background-color: ${ThemesColors.orangePrimaryClick};
    }
`

const ButtonStyled = styled(Button)`
    height: 40px;
    display: flex;
    width: 40px;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 15px;
    cursor: pointer;
    background-color: ${ThemesColors.orangePrimary};
`

const InputField = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const TabsContainer = styled.div`
    display: flex;
    flex-grow: 1;  
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const Tabs = styled.div<any>`
    height: 100%;
    width: 100%;
    max-height: 300px;
    max-width: 300px;
    background-color: ${ThemesColors.whitePrimary};
    background-color: ${(props:any) => props.selected ? '#739072' : ThemesColors.whitePrimary};
    border-radius: 15px;
    margin: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: #739072;
    };
`

const ErrorOcurredContainer = styled.div`
    height: 50px;
    width: 100%;
    margin: 5px 0px 5px 0px;
    display: flex;
    justify-content: center;
    color: #fff;
`

const TabNameLocation = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
`

const TabDate = styled(TabNameLocation)`
    padding-top: 10px;
`

const TabHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    font-size: 22px;
`

const TabBody = styled.div`
    display: flex;
    width: 100%;
    flex-grow: 2;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 22px;
    text-align: center;
`

const TabFooter = styled.div`
    display: flex;
    width: 100%;
    background-color: #113946;
    justify-content: center;
    align-items: center;
    color: #fff;
    min-height: 40px;
    font-size: 22px;
    border-radius: 10px;
`

const SelectContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`

const Header = styled.div`
    display: flex;
    width: 100%;
`

const TempContainer = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`

const CurrentWeatherContainer = styled.div`
    width: calc(100% - 60px);
    height: 50%;
    min-height:350px;
    background-color: ${ThemesColors.whitePrimary};
    margin-right: 30px;
    margin-left: 30px;
    border-radius: 15px;
`

export const WeatherScreenStyle = {
    Container,
    InputField,
    TabsContainer,
    Tabs,
    InputStyled,
    ButtonStyled,
    ButtonContainer,
    ErrorOcurredContainer,
    TabNameLocation,
    TabHeader,
    TabBody,
    TabFooter,
    TabDate,
    SelectContainer,
    Header,
    TempContainer,
    CurrentWeatherContainer,
}
