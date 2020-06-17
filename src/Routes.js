import React from "react";
import { Route, Switch } from "react-router-dom";
import NormalPage from "./pages/normal";
import BugPage from "./pages/bug";
import DragonPage from "./pages/dragon";
import ElectricPage from "./pages/electric";
import FightingPage from "./pages/fighting";
import FirePage from "./pages/fire";
import FlyingPage from "./pages/flying";
import GhostPage from "./pages/ghost";
import GrassPage from "./pages/grass";
import GroundPage from "./pages/ground";
import IcePage from "./pages/ice";
import WaterPage from "./pages/water";
import RockPage from "./pages/rock";
import PsychicPage from "./pages/psychic";
import PoisonPage from "./pages/poison";
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
      <Route path="/bug">
        <BugPage />
      </Route>
      <Route path="/dragon">
        <DragonPage />
      </Route>
      <Route path="/ghost">
        <GhostPage />
      </Route>
      <Route path="/fighting">
        <FightingPage />
      </Route>
      <Route path="/electric">
        <ElectricPage />
      </Route>
      <Route path="/fire">
        <FirePage />
      </Route>
      <Route path="/water">
        <WaterPage />
      </Route>
      <Route path="/flying">
        <FlyingPage />
      </Route>
      <Route path="/grass">
        <GrassPage />
      </Route>
      <Route path="/ground">
        <GroundPage />
      </Route>
      <Route path="/ice">
        <IcePage />
      </Route>
      <Route path="/rock">
        <RockPage />
      </Route>
      <Route path="/psychic">
        <PsychicPage />
      </Route>
      <Route path="/poison">
        <PoisonPage />
      </Route>
    </Switch>
  </Layout>
);

export default Routes;
