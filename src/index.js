import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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
    secondary: {
      main: '#121212',
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
