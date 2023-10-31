import WeatherScreen from './modules/WeatherScreen'
import { ThemeProvider } from 'styled-components'
import './App.css'
import { GlobalStyles } from './styles/GlobalStyles'

export default function App() {
    return (
        <div className="root-fake">
            <ThemeProvider theme={{}}>
                <GlobalStyles />
                <WeatherScreen />
            </ThemeProvider>
        </div>
    )
}
