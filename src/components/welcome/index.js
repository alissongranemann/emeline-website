import React from "react"
import Fade from "react-reveal/Fade"

import { Container, Title, Subtitle } from "./styles"

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
