import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import LayoutContainer from './containers/Layout';
import Router from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <LayoutContainer>
        <Router />
      </LayoutContainer>
    </BrowserRouter>
  )
}

export default App;
