// to do
// fix random number differences
// figure out how to do the second call for the pokemon description
// dangerously set html
// map over and display in card.js, reference old projects
import React from "react";
import "98.css";
import styled from "styled-components";
import "./styles/reset.css";
import Card from "./Card";

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  align-content: center;
`;

const WelcomeDiv = styled.div`
  height: 10rem;
  width: 60rem;
  display: inline-block;
  font-size: 2rem;
  background: #c8c8c8;
`;

const ContentWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

function App() {
  return (
    <MainWrapper>
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
              <p>Welcome to Poke 98!</p>
            </div>
          </WelcomeDiv>
        </header>
        <Card />
      </ContentWrapper>
    </MainWrapper>
  );
}

export default App;
