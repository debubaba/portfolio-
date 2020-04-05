import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import ScrollToTop from './ScrollToTop.js'
import Home from './components/index.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume.js'
import Portfolio from './components/Portfolio.js'
import Contact from './components/Contact.js'
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles';

const Poppins = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Poppins'),
    local('Poppins-Regular'),
    url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:ital,wght@1,200&display=swap') format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins, Montserrat',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Poppins],
      },
    },
  },
});


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <ScrollToTop />
      <Route exact path={process.env.PUBLIC_URL+'/'} component={Home} />
      <Route exact path={process.env.PUBLIC_URL+'/resume'} component={Resume} />
      <Route exact path={process.env.PUBLIC_URL+'/portfolio'} component={Portfolio} />
      <Route exact path={process.env.PUBLIC_URL+'/contact'} component={Contact} />
    </ThemeProvider>
    </>
  );
}

export default App;
