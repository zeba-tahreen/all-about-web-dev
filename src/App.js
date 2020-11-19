import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import FullStack from './components/pages/FullStack';
import Developer from './components/pages/Developer';
import Navigationbar from './components/main/Navigationbar';
import Jumbo from './components/main/Jumbo';
import NoMatch from './components/pages/NoMatch';
import JavaScript from './components/pages/JavaScript/Intro';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navigationbar />
          <Jumbo />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/fullstack' component={FullStack} />
                <Route exact path='/developers' component={Developer} />
                <Route exact path='/javascript' component={JavaScript}/>
                <Route component={NoMatch} />
              </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
