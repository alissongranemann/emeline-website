import React from "react"
import styled from "styled-components"
import {
  FaGrin,
  FaNotesMedical,
  FaMask,
  FaStreetView,
  FaSyringe,
} from "react-icons/fa"

const Container = styled.div`
  text-align: center;
  padding: 35px 0;
`

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 0 150px;
  font-family: Montserrat;
  list-style: none;
`

const ListItem = styled.li`
  margin: 0 75px;

  svg {
    width: 100px;
    height: auto;
    padding: 25px;
    margin-bottom: 15px;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  p {
    max-width: 175px;
  }
`

const Title = styled.h2`
  display: inline-block;
  margin: 0 auto;
  margin-bottom: 75px;
`

const Specialties = () => (
  <Container>
    <Title>Especialidades</Title>
    <List>
      <ListItem>
        <FaGrin />
        <p>Comportamental</p>
      </ListItem>
      <ListItem>
        <FaNotesMedical />
        <p>Clínica</p>
      </ListItem>
      <ListItem>
        <FaMask />
        <p>Estética</p>
      </ListItem>
      <ListItem>
        <FaStreetView />
        <p>Funcional</p>
      </ListItem>
      <ListItem>
        <FaSyringe />
        <p>Doenças Crônicas Não Transmissíveis</p>
      </ListItem>
    </List>
  </Container>
)

export default Specialties
