import styled from "styled-components"

import { device } from "../../layouts/variables"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 75vh;
  max-width: 75vw;
  text-align: center;
  word-break: keep-all;
  overflow-wrap: normal;
`

export const Title = styled.h1`
  font-size: 40px;
  color: #fff;
  animation: moveInTop 1s;

  @media ${device.tablet} {
    font-size: 56px;
  }

  @keyframes moveInTop {
    0% {
      opacity: 0;
      transform: translateY(-3rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #fff;
  animation: moveInBottom 1s;

  @media ${device.tablet} {
    font-size: 28px;
  }

  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(3rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`
