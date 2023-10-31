import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'OptimusPrinceps';
    font-style: normal;
    font-weight: normal;
    src: local('OptimusPrinceps'), url('OptimusPrinceps.woff') format('woff');
    }
    

    @font-face {
    font-family: 'OptimusPrincepsSemiBold';
    font-style: normal;
    font-weight: normal;
    src: local('OptimusPrincepsSemiBold'), url('OptimusPrincepsSemiBold.woff') format('woff');
    }
`;

export const ThemesColors = {
  orangePrimary: '#FF6000',
  orangePrimaryHover : '#FF9300',
  orangePrimaryClick : '#E64B0B',
  grayPrimary: '#403D38',
  whitePrimary: '#F8F7F3'
}