import React from "react"

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
  font-weight: 500;
  color: #fff;
`

const Subtitle = styled.p`
  font-size: 32px;
  font-weight: 300;
  color: #fff;
`

const Welcome = () => (
  <Container id="welcome">
    <Title>Nutrição sem neuras e complicações</Title>
    <Subtitle>Vamos juntos nessa?</Subtitle>
  </Container>
)

export default Welcome
