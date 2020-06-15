import React from "react";
import "98.css";
import Link from "./Link";
import { useHistory } from "react-router-dom";

function Aside() {
  const history = useHistory();

  function goHome() {
    history.push("/");
  }
  return (
    <div>
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
              <li>Fire</li>
              <li>Water</li>
              <li>Grass</li>
              <li>Electric</li>
              <li>Ice</li>
              <li>Fighting</li>
              <li>Poison</li>
              <li>Ground</li>
              <li>Flying</li>
              <li>Psychic</li>
              <li>Bug</li>
              <li>Rock</li>
              <li>Ghost</li>
              <li>Dragon</li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Aside;
