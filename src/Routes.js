import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './layout/Layout';
import IndexPage from './pages';
import PokemonTypeList from './pages/type';

const Routes = (
  <Layout>
    <Switch>
      <Route path="/" exact>
        <IndexPage />
      </Route>

      <Route path="/type/:type">
        <PokemonTypeList />
      </Route>
    </Switch>
  </Layout>
);

export default Routes;
