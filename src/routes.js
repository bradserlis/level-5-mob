import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import FFXIV from './containers/FFXIV';

const Router = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/ffxiv' component={FFXIV} />
    </Switch>
    )
}

export default Router; 
