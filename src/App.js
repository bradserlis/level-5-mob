import React from 'react';
import './App.css';

import Home from './containers/Home';
import LayoutContainer from './containers/Layout';

const App = () => {
  return (
    <div className="App">
    <LayoutContainer {...this.props} />
    </div>
  )
}

export default App;
