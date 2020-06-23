import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100%;
  width: 100vw;
  text-align: center;
  align-content: center;
  background: rgb(192, 192, 192);
  @media only screen and (max-width: 800px) {
  }
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
  margin-top: 3rem;
`;

export const ContentWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

export const CardWrapper = styled.div`
  @media only screen and (max-width: 800px) {
    width: 28rem;
    margin-left: 4rem;
  }
  background: linear-gradient(#e66465, #9198e5);
  padding: 1rem;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff,
    inset -2px -2px #808080, inset 2px 2px #dfdfdf;
  img {
    width: 28rem;
    height: 28rem;
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff,
      inset -2px -2px #808080, inset 2px 2px #dfdfdf;
  }
`;

export const TypeCardWrapper = styled.div`
  width: 100%;
  text-align: center;
  display: inline-block;
  .card {
    margin: 2rem;
    display: inline-block;
    background: white;
    /* this is the css shadow for the 98 css style div */
    box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff,
      inset -2px -2px #808080, inset 2px 2px #dfdfdf;
  }
  .name {
    margin: 0.5rem;
    text-decoration: underline;
  }
  .weight {
    margin-bottom: 0.5rem;
  }
`;

export const HorizontalLine = styled.hr`
  margin: 3rem auto;
  border: none;
  width: 70rem;
  height: 5px;
  opacity: 0.5;
  @media only screen and (max-width: 800px) {
    width: 20rem;
  }
  background: linear-gradient(
    to right,
    red 20%,
    yellow 20%,
    yellow 36%,
    green 36%,
    green 60%,
    blue 60%,
    blue 80%,
    orange 80%
  );
`;

export const Header = styled.header`
  text-align: center;
  justify-items: center;
  justify-self: center;
  align-items: center;
  align-self: center;
`;

export const Contact = styled.div`
  position: fixed;
  bottom: 5;
  right: 5;
`;

export const AdImg = styled.img`
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #ffffff,
    inset -2px -2px #808080, inset 2px 2px #dfdfdf;
  margin: 2rem;
  @media only screen and (max-width: 800px) {
    width: 28rem;
  }
`;

export const AsideWrapper = styled.div`
  height: 100%;
  @media only screen and (max-width: 800px) {
    .homeButton {
      transform: translateX(-10px);
    }
  }
  ul {
    height: 70%;
    width: 70%;
    text-align: left;
    font-size: 2rem;
    @media only screen and (max-width: 800px) {
      font-size: 1rem;
      width: 100%;
      li {
        margin: 1.5rem 0;
      }
    }
  }
`;
