import React from "react";
import {
  MainWrapper,
  WelcomeDiv,
  ContentWrapper,
  HorizontalLine,
  Header,
  Contact,
} from "../styles/style";
import "98.css";
import "../styles/reset.css";
import Aside from "../components/Aside";
import windowsPic from "../images/windows.gif";
import yahooPic from "../images/yahoo-1996.jpg";

function Layout({ children }) {
  return (
    <MainWrapper>
      <Aside />
      <ContentWrapper>
        <Header>
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
          <HorizontalLine></HorizontalLine>
        </Header>
        {children}
        <img
          style={{ margin: "2rem", border: "2px solid black" }}
          src={yahooPic}
          alt="yahoo ad"
        />
        <img
          style={{ margin: "2rem", border: "2px solid black" }}
          src={windowsPic}
          alt="windows ad"
        />
        <Contact style={{ position: "fixed", bottom: "0", right: "0" }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/prduren/poke-98"
          >
            <button>github</button>
          </a>
        </Contact>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default Layout;
