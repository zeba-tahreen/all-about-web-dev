import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/main/Layout";
import Home from "./components/pages/Home";
import FullStack from "./components/pages/FullStack";
import Developer from "./components/pages/Developer";
import Navigationbar from './components/main/Navigationbar';
import Jumbo from './components/main/Jumbo';
import Wrapper from "./components/main/Wrapper";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navigationbar />
          <Jumbo />
          <Layout>
            <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/fullstack" component={FullStack} />
              <Route exact path="/developers" component={Developer} />
            </Switch>
            </Wrapper>
        </Layout>
        </Router>
      </Fragment>
    )
  }
}

export default App;
