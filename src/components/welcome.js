import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"

import { device } from "../layouts/variables"

const Container = styled.div`
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

const Title = styled.h1`
  font-size: 40px;
  color: #fff;

  @media ${device.tablet} {
    font-size: 56px;
  }
`

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 300;
  color: #fff;

  @media ${device.tablet} {
    font-size: 28px;
  }
`

const Welcome = () => (
  <Container id="welcome">
    <Fade top>
      <Title>Nutrição sem neuras e complicações</Title>
    </Fade>
    <Fade bottom>
      <Subtitle>Vamos juntos nessa?</Subtitle>
    </Fade>
  </Container>
)

export default Welcome
