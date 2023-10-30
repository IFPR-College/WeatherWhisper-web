import styled from 'styled-components'
import { ThemesColors } from '../styles/GlobalStyles';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${ThemesColors.grayPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'OptimusPrinceps', sans-serif;
    font-size: 25px;
`

const Content = styled.div`
    height:calc(100vh - 10%);
    width:calc(100vw - 70%);
    background-color: ${ThemesColors.whitePrimary};
    border-radius: 15px;
    margin-right: 15px;
`

export const WeatherScreenStyle = {
    Container,
    Content,
}
