import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import IndexPage from "./pages";
import PokemonTypeList from "./pages/type";
import PokemonDetailsPage from "./pages/details";

const Routes = (
  <Layout>
    <Switch>
      <Route path="/" exact>
        <IndexPage />
      </Route>

      <Route path="/type/:type" exact>
        <PokemonTypeList />
      </Route>

      <Route path="/type/:type/:id">
        <PokemonDetailsPage />
      </Route>
    </Switch>
  </Layout>
);

export default Routes;
