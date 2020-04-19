import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "components/navbar/";
import Welcome from "components/welcome";
import {
  WithStylesExample,
  ChartsCard,
  ChartsBox,
  ChartsGrid,
  RechartsGrid,
  SimpleMap,
  DyBox,
  ResponsiveRechart,
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
          <Route
            path={"/examples/recharts-grid"}
            exact
            component={RechartsGrid}
          />
          <Route
            path={"/examples/recharts-responsive"}
            exact
            component={ResponsiveRechart}
          />
          <Route path={"/examples/simple-map"} exact component={SimpleMap} />
          <Route path={"/examples/dygraphs"} exact component={DyBox} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
