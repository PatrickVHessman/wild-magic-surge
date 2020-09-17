import React from "react";
import "./styles.css";
import { Route, Switch, Link } from "react-router-dom";
import WildMagicTable from "./components/WildMagicTable";
import Generator from "./components/Generator";
import Footer from "./components/Footer";

import { AnimatedSwitch } from 'react-router-transition';

import wildMagic from "./data/wildMagic";

export default function App() {
  const wildMagicItems = wildMagic.wildMagic;

  return (
    <div className="App">
      <h1>D&D 5E Wild Magic Surge Generator</h1>
      <div className="pageNav">
        <Link to="/">Random Surge</Link> |{" "}
        <Link to="/table">Wild Magic Surge List</Link>
      </div>
      <div className="mainBody">
        <Switch>
          <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
<Route
            path="/"
            component={() => <Generator items={wildMagicItems} />}
            exact
          />
          <Route
            path="/table"
            component={() => <WildMagicTable items={wildMagicItems} />}
          />

    </AnimatedSwitch>
          
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
