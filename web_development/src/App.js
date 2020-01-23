import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./components/main/Layout";
import Home from "./components/pages/Home";
import FullStack from "./components/pages/FullStack";
import Developer from "./components/pages/Developer";
// import Contact from "./components/pages/Contact";
import Navigationbar from './components/main/Navigationbar';
import Jumbotron from './components/main/Jumbotron';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navigationbar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/fullstack" component={FullStack} />
              <Route exact path="/developers" component={Developer} />
              {/* <Route path="/contact" component={Contact} /> */}
            </Switch>
        </Layout>
        </Router>
      </Fragment>
    )
  }
}

export default App;
