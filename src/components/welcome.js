import React from "react"

import styled from "styled-components"

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

const Title = styled.h1`
  font-size: 48px;
`

const Subtitle = styled.p`
  font-size: 26px;
`

const Welcome = () => (
  <Container>
    <Title>Nutrição sem neuras e complicações</Title>
    <Subtitle>Vamos juntos nessa?</Subtitle>
  </Container>
)

export default Welcome
