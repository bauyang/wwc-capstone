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

import ZachLionel from "./pages/ZachLionel";
import ZachGeorge from "./pages/ZachGeorge";
import ZachKaley from "./pages/ZachKaley";
import ZachPasha from "./pages/ZachPasha";
import GeorgeKaley from "./pages/GeorgeKaley";
import GeorgeLionel from "./pages/GeorgeLionel";
import GeorgePasha from "./pages/GeorgePasha";
import KaleyLionel from "./pages/KaleyLionel";
import KaleyPasha from "./pages/KaleyPasha";
import PashaLionel from "./pages/PashaLionel";

import UserComponent from "./components/UserComponent";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/quiz" exact={true} component={Quiz} />
          {/* <Route path="/results" exact={true} component={Results} /> */}
          <Route path="/" exact={true} component={UserComponent} />
          <Route path="/Kaley" exact={true} component={Kaley} />
          <Route path="/Pasha" exact={true} component={Pasha} />
          <Route path="/Zach" exact={true} component={Zach} />
          <Route path="/George" exact={true} component={George} />
          <Route path="/Lionel" exact={true} component={Lionel} />

          <Route path="/ZachLionel" exact={true} component={ZachLionel} />
          <Route path="/ZachGerorge" exact={true} component={ZachGeorge} />
          <Route path="/ZachKaley" exact={true} component={ZachKaley} />
          <Route path="/ZachPasha" exact={true} component={ZachPasha} />
          <Route path="/GeorgeKaley" exact={true} component={GeorgeKaley} />
          <Route path="/GeorgePasha" exact={true} component={GeorgePasha} />
          <Route path="/GeorgeLionel" exact={true} component={GeorgeLionel} />
          <Route path="/KaleyLionel" exact={true} component={KaleyLionel} />
          <Route path="/KaleyPasha" exact={true} component={KaleyPasha} />
          <Route path="/PashaLionel" exact={true} component={PashaLionel} />
        </Switch>
      </Router>
    );
  }
}
export default App;
