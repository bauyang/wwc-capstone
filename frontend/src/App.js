import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
//import Results from "./pages/Results";
import Kaley from "./pages/Kaley";
import Pasha from "./pages/Pasha";
import Zach from "./pages/Zach";
import George from "./pages/George";
import Lionel from "./pages/Lionel";


class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/quiz" exact={true} component={Quiz} />
          {/* <Route path="/results" exact={true} component={Results} /> */}
          
          <Route path="/Kaley" exact={true} component={Kaley} /> 
          <Route path="/Pasha" exact={true} component={Pasha} /> 
          <Route path="/Zach" exact={true} component={Zach} /> 
          <Route path="/George" exact={true} component={George} /> 
          <Route path="/Lionel" exact={true} component={Lionel} /> 

        </Switch>
      </Router>
    );
  }
}
export default App;
