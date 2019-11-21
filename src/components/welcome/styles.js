import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 50px;
  height: 75vh;
  max-width: 75vw;
  text-align: center;
  word-break: keep-all;
  overflow-wrap: normal;
`

export const Title = styled.h1`
  color: #fff;
  animation: moveInTop 1s;

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
  font-size: 2.8rem;
  font-weight: 300;
  color: #fff;
  margin-bottom: 5rem;
  animation: moveInBottom 1s;

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
