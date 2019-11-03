import React from "react"
import styled from "styled-components"

const Container = styled.div`
  text-align: center;
`

const List = styled.ul`
  list-style: none;
`

const Services = () => (
  <Container>
    <h2>Serviços</h2>
    <List>
      <li>Personal diet</li>
      <li>Consultas Nutricionais</li>
      <li>Cardápios</li>
    </List>
  </Container>
)

export default Services
