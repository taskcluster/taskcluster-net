import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './Main';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
    </ThemeProvider>
  );
};

export default hot(module)(App);
