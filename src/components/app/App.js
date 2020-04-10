import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "components/navbar/";
import { Welcome } from "components/welcome";
import { WithStylesExample } from "components/examples";

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
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
