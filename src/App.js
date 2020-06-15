// to do
// fix random number differences
// figure out how to do the second call for the pokemon description
// dangerously set html
// map over and display in card.js, reference old projects
import React from "react";
import "98.css";
import "./styles/reset.css";
import Card from "./components/Card";
import Aside from "./components/Aside";
import { MainWrapper, WelcomeDiv, ContentWrapper } from "./styles/style";

function App() {
  return (
    <MainWrapper>
      <Aside />
      <ContentWrapper>
        <header>
          <WelcomeDiv className="window">
            <div className="title-bar">
              <div className="title-bar-text">xoxo</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize"></button>
                <button aria-label="Maximize"></button>
                <button aria-label="Close"></button>
              </div>
            </div>
            <div className="window-body">
              <p>Welcome to Poké-98!</p>
            </div>
          </WelcomeDiv>
        </header>
        <Card />
      </ContentWrapper>
    </MainWrapper>
  );
}

export default App;
