import React from "react";
import "98.css";
import Link from "./Link";
import { useHistory } from "react-router-dom";
import { AsideWrapper } from "../styles/style";

function Aside() {
  const history = useHistory();

  function goHome() {
    history.push("/");
  }
  return (
    <AsideWrapper>
      <aside>
        <ul className="tree-view">
          <li>Table of Contents</li>
          <button className="homeButton" onClick={goHome}>
            Home
          </button>

          <li>
            All Pokémon
            <ul className="typeList">
              <Link to="/type/normal">
                <li>Normal</li>
              </Link>
              <Link to="/type/fire">
                <li>Fire</li>
              </Link>
              <Link to="/type/water">
                <li>Water</li>
              </Link>
              <Link to="/type/grass">
                <li>Grass</li>
              </Link>
              <Link to="/type/electric">
                <li>Electric</li>
              </Link>
              <Link to="/type/ice">
                <li>Ice</li>
              </Link>
              <Link to="/type/fighting">
                <li>Fighting</li>
              </Link>
              <Link to="/type/poison">
                <li>Poison</li>
              </Link>
              <Link to="/type/ground">
                <li>Ground</li>
              </Link>
              <Link to="/type/psychic">
                <li>Psychic</li>
              </Link>
              <Link to="/type/bug">
                <li>Bug</li>
              </Link>
              <Link to="/type/rock">
                <li>Rock</li>
              </Link>
              <Link to="/type/ghost">
                <li>Ghost</li>
              </Link>
              <Link to="/type/dragon">
                <li>Dragon</li>
              </Link>
            </ul>
          </li>
        </ul>
      </aside>
    </AsideWrapper>
  );
}

export default Aside;
