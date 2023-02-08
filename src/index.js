import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import amber from '@mui/material/colors/amber';
import deepOrange from '@mui/material/colors/deepOrange';
import grey from '@mui/material/colors/grey';

//const getDesignTokens = (mode) => ({
//  palette: {
//    mode,
//    ...(mode === 'light'
//      ? {
//          // palette values for light mode
//          primary: amber,
//          divider: amber[200],
//          text: {
//            primary: grey[900],
//            secondary: grey[800],
//          },
//        }
//      : {
//          // palette values for dark mode
//          primary: deepOrange,
//          divider: deepOrange[700],
//          background: {
//            default: '#121212',
//            paper: deepOrange[900],
//          },
//          text: {
//            primary: '#fff',
//            secondary: grey[500],
//          },
//        }),
//  },
//});
//const darkThemeTEST = createTheme(getDesignTokens('dark'));

const cLightBlue = {
  50: '#e2fbff',
  100: '#b6f5fe',
  200: '#83eeff',
  300: '#4ee6fd',
  400: '#27dffa',
  500: '#11d8f7',
  600: '#0ac7e3',
  700: '#02b1c7',
  800: '#019dae',
  900: '#007880',
}


const _cViolet = {
  50: '#efe6fd',
  100: '#d4c2f9',
  200: '#b799f6',
  300: '#986ef3',
  400: '#7e4bf0',
  500: '#632ae5',
  600: '#5725df',
  700: '#441cd6',
  800: '#3016cd',
  900: '#0007bf',
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: cLightBlue[200],
    },
    background: {
      default: '#121212',
      paper: cLightBlue[200],
    },
  },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
