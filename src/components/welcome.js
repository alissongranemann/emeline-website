import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  height: 75vh;
  max-width: 75vw;
  text-align: center;
`

const Title = styled.h1`
  font-size: 56px;
  font-weight: 600;
  color: #fff;
`

const Subtitle = styled.p`
  font-size: 28px;
  font-weight: 300;
  color: #fff;
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
