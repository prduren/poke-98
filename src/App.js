import React from "react";
import "98.css";
import styled from "styled-components";
import "./styles/reset.css";

const MainWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

const WelcomeDiv = styled.div`
  height: 10;
  width: 40rem;
  display: inline-block;
  font-size: 1.2rem;
  background: #c8c8c8;
`;

function App() {
  return (
    <MainWrapper>
      <WelcomeDiv className="window">
        <div class="title-bar">
          <div class="title-bar-text">xoxo</div>
          <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body">
          <p>Welcome to Poke 98!</p>
        </div>
      </WelcomeDiv>
    </MainWrapper>
  );
}

export default App;
