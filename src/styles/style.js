import styled from "styled-components";

export const AsideWrapper = styled.div`
  ul {
    width: 70%;
    text-align: left;
    font-size: 2rem;
  }
`;

export const MainWrapper = styled.div`
  height: 100%;
  width: 100vw;
  text-align: center;
  align-content: center;
  background: rgb(192, 192, 192);
  aside {
    width: 14%;
    position: fixed;
    top: 0;
    bottom: 0;
    padding: 8px;
    display: flex;
    align-items: stretch;
  }
`;

export const WelcomeDiv = styled.div`
  height: 10rem;
  width: 50%;
  display: inline-block;
  font-size: 2rem;
  background: #c8c8c8;
`;

export const ContentWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const CardWrapper = styled.div`
  background: linear-gradient(#e66465, #9198e5);
  padding: 1rem;
  img {
    width: 30rem;
    height: 30rem;
    border: 10px solid black;
  }
`;

export const TypeCardWrapper = styled.div`
  width: 25%;
  text-align: center;
  display: inline-block;
`;

export const HorizontalLine = styled.hr`
  margin: 3rem auto;
  border: none;
  width: 70rem;
  height: 5px;
  opacity: 0.5;
  background: linear-gradient(
    to right,
    red 20%,
    yellow 20%,
    yellow 36%,
    green 36%,
    green 60%,
    blue 60%,
    blue 100%
  );
`;

export const Header = styled.header`
  text-align: center;
  justify-items: center;
  justify-self: center;
  align-items: center;
  align-self: center;
`;
