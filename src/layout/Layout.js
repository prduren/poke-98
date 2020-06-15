import React from "react";
import { MainWrapper, WelcomeDiv, ContentWrapper } from "../styles/style";
import "98.css";
import "../styles/reset.css";
import Aside from "../components/Aside";

function Layout({ children }) {
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
              <p>Poké-98!</p>
            </div>
          </WelcomeDiv>
        </header>
        {children}
      </ContentWrapper>
    </MainWrapper>
  );
}

export default Layout;
