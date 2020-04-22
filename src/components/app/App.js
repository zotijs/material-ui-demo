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
  NivoBox,
  CountriesTable,
  CountriesAutocomplete,
  Dashboard,
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
          <Route path={"/examples/table"} exact component={CountriesTable} />
          <Route
            path={"/examples/autocomplete"}
            exact
            component={CountriesAutocomplete}
          />
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
          <Route path={"/examples/dashboard"} exact component={Dashboard} />
          <Route path={"/examples/dygraphs"} exact component={DyBox} />
          <Route path={"/examples/nivo"} exact component={NivoBox} />
          <Route path={"/examples/simple-map"} exact component={SimpleMap} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
