import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import FFXIV from './containers/FFXIV';
import Contacts from './containers/Contacts';

const Router = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/ffxiv' component={FFXIV} />
      <Route path='/contacts' component={Contacts} />
    </Switch>
    )
}

export default Router; 
