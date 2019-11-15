import React from "react"
import styled from "styled-components"
import {
  FaRegGrin,
  FaRegHospital,
  FaMask,
  FaStreetView,
  FaSyringe,
} from "react-icons/fa"

const Container = styled.div`
  text-align: center;
  padding: 35px 0;
  background-color: #f1f1f1;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-width: 155px;
  padding: 8px 0;
  margin: 25px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  box-shadow: -1px 1px 2px 0px #b1b1b1;
  background-color: #fff;
  border-radius: 3px;

  svg {
    width: 80px;
    height: auto;
    padding: 25px;
    margin-bottom: 5px;
    border-radius: 100%;
    overflow: visible;
    color: #fff;
  }

  p {
    max-width: 125px;
  }
`

const Title = styled.h2`
  display: inline-block;
  margin: 0 auto;
  margin-bottom: 50px;
`

const ComportamentalIcon = styled(FaRegGrin)`
  background-color: #ffa000;
`

const MedicalIcon = styled(FaRegHospital)`
  background-color: #3949ab;
`

const MaskIcon = styled(FaMask)`
  background-color: #d81b60;
`

const FunctionalIcon = styled(FaStreetView)`
  background-color: #00796b;
`

const SyringeIcon = styled(FaSyringe)`
  background-color: #bf360c;
`

const Specialties = () => (
  <Container>
    <Title>Especialidades</Title>
    <List>
      <ListItem>
        <ComportamentalIcon />
        <p>Comportamental</p>
      </ListItem>
      <ListItem>
        <MedicalIcon />
        <p>Clínica</p>
      </ListItem>
      <ListItem>
        <MaskIcon />
        <p>Estética</p>
      </ListItem>
      <ListItem>
        <FunctionalIcon />
        <p>Funcional</p>
      </ListItem>
      <ListItem>
        <SyringeIcon />
        <p>Doenças Crônicas Não Transmissíveis</p>
      </ListItem>
    </List>
  </Container>
)

export default Specialties
