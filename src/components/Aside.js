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
          <button onClick={goHome}>
            <li>Home</li>
          </button>

          <li>
            All Pokémon
            <ul>
              <Link to="/normal">
                <li>Normal</li>
              </Link>
              <Link to="/fire">
                <li>Fire</li>
              </Link>
              <Link to="/water">
                <li>Water</li>
              </Link>
              <Link to="/grass">
                <li>Grass</li>
              </Link>
              <Link to="/electric">
                <li>Electric</li>
              </Link>
              <Link to="/ice">
                <li>Ice</li>
              </Link>
              <Link to="/fighting">
                <li>Fighting</li>
              </Link>
              <Link to="/poison">
                <li>Poison</li>
              </Link>
              <Link to="/ground">
                <li>Ground</li>
              </Link>
              <Link to="/flying">
                <li>Flying</li>
              </Link>
              <Link to="/psychic">
                <li>Psychic</li>
              </Link>
              <Link to="/bug">
                <li>Bug</li>
              </Link>
              <Link to="/rock">
                <li>Rock</li>
              </Link>
              <Link to="/ghost">
                <li>Ghost</li>
              </Link>
              <Link to="/dragon">
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
