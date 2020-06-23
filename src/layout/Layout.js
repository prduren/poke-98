import React, { useState } from "react";
import {
  MainWrapper,
  WelcomeDiv,
  ContentWrapper,
  HorizontalLine,
  Header,
  Contact,
  AdImg,
} from "../styles/style";
import "98.css";
import "../styles/reset.css";
import Aside from "../components/Aside";
import windowsPic from "../images/windows.gif";
import yahooPic from "../images/yahoo-1996.jpg";
import iePic from "../images/ie.gif";
import spacePic from "../images/space.gif";

function getRandomImageId() {
  const min = 0;
  const max = 3;
  return Math.floor(Math.random() * (max - min)) + min;
}

const images = [spacePic, iePic, yahooPic, windowsPic];

function Layout({ children }) {
  // state for ad images
  const [advertisement, setAdvertisement] = useState({ current: 0 });

  setInterval(function () {
    setAdvertisement({
      current: getRandomImageId(),
    });
  }, 200000);

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
        <AdImg src={images[advertisement.current]} alt="fake advertisement" />
        <AdImg src={windowsPic} alt="fake advertisement" />
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
