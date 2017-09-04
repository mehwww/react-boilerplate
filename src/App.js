import React, { Component } from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import { Provider, observer } from 'mobx-react';

import Home from '@/pages/home';
import RootStore from '@/store';

const store = new RootStore();

@observer
class App extends Component {
  render() {
    return (
      <Provider {...store} >
        <Router history={hashHistory}>
          <Route path="/" component={Home} />
        </Router>
      </Provider>
    );
  }
}

export default App;
