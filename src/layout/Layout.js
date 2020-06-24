import "98.css";
import React, { useState } from "react";
import Aside from "../components/Aside";
import iePic from "../images/ie.gif";
import spacePic from "../images/space.gif";
import windowsPic from "../images/windows.gif";
import yahooPic from "../images/yahoo-1996.jpg";
import "../styles/reset.css";
import {
  AdImg,
  Contact,
  ContentWrapper,
  Header,
  HorizontalLine,
  MainWrapper,
  WelcomeDiv,
} from "../styles/style";

const calculateTimeLeft = () => {
  const difference = +new Date("2020-01-01") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};
function Layout({ children }) {
  // state for ad images
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [ads, setAds] = useState([windowsPic, yahooPic, iePic, spacePic]);

  React.useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
      setAds((current) => current.sort(() => Math.random() - 0.5));
    }, 5000);
  });

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
        {new Array(2).fill(null).map((_, index) => (
          <AdImg key={`ad-${index}`} src={ads[index]} />
        ))}
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
