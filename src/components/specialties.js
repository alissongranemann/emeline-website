import React from "react"
import styled from "styled-components"

const Container = styled.div`
  text-align: center;
`

const List = styled.ul`
  list-style: none;
`

const Specialties = () => (
  <Container>
    <h2>Especialidades</h2>
    <List>
      <li>Comportamental</li>
      <li>Clínica</li>
      <li>Estética</li>
      <li>Funcional</li>
      <li>Doenças Crônicas Não Transmissíveis</li>
    </List>
  </Container>
)

export default Specialties
