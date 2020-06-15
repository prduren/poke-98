import React from "react";
import { Route, Switch } from "react-router-dom";
import NormalPage from "./pages/normal";
import IndexPage from "./pages";
import Layout from "./layout/Layout";

const Routes = (
  <Layout>
    <Switch>
      <Route path="/" exact>
        <IndexPage />
      </Route>
      <Route path="/normal">
        <NormalPage />
      </Route>
    </Switch>
  </Layout>
);

export default Routes;
