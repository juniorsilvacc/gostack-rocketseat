import React from 'react';
import GlobalStyle from './styles/global';

import {BrowserRouter as Router} from 'react-router-dom' 

import Routes from './routes';

import AppProvider from './hooks/index';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes/>
      </AppProvider>

      <GlobalStyle/>
    </Router>
  );
}

export default App;
