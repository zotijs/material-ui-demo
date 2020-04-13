import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "components/navbar/";
import Welcome from "components/welcome";
import {
  WithStylesExample,
  ChartsCard,
  ChartsBox,
  ChartsGrid,
} from "components/examples";

const App = ({ isDarkMode, toggleDarkMode, ...restProps }) => {
  return (
    <>
      <BrowserRouter>
        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Switch>
          <Route path={"/"} exact component={Welcome} />
          <Route
            path={"/examples/with-styles"}
            exact
            component={WithStylesExample}
          />
          <Route path={"/examples/card"} exact component={ChartsCard} />
          <Route path={"/examples/flexbox"} exact component={ChartsBox} />
          <Route path={"/examples/css-grid"} exact component={ChartsGrid} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
