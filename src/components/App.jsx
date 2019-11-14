import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import FlexPage from './FlexPage';
import ForumPage from './ForumPage';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={FlexPage} />
        <Route path='/forum' component={ForumPage} />
      </Switch>
    </div>
  );
}

export default App;