import React from "react"
import {
  FaNotesMedical,
  FaUtensils,
  FaShoppingCart,
  FaRegCaretSquareRight,
} from "react-icons/fa"
import styled from "styled-components"

const Container = styled.div`
  margin: 50px 150px;
  padding: 50px;
  border-radius: 25px;
  color: white;
  background: linear-gradient(
    to right bottom,
    rgba(182, 82, 240, 1) 0%,
    rgba(99, 0, 179, 0.9) 100%
  );
  text-align: center;
`

const Title = styled.h2`
  margin: 0 auto;
  margin-bottom: 50px;
`

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style: none;
`

const ListItem = styled.li`
  width: 275px;
  height: 350px;
  margin: 15px;
  padding: 30px 25px;
  border: 1px solid #e1e1e1;
  border-radius: 25px;
  box-shadow: -2px 2px 5px 0px #4c4c4c;
  font-size: 22px;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  color: rgb(74, 11, 125);

  svg {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
  }
`

const Text = styled.p`
  font-family: Lato;
  font-size: 15px;
  overflow-wrap: break-word;
  color: #571f80;
`

const Services = () => (
  <Container>
    <Title>Serviços</Title>
    <List>
      {/* <ListItem
        style={{
          background:
            "linear-gradient(to right bottom, #ce9ffc 0%, #7367f0 100%)",
        }}
      > */}
      <ListItem>
        <FaNotesMedical />
        <h3>Atendimento individualizado</h3>
        <Text>
          Um atendimento personalizado, em que é elaborado um plano alimentar de
          acordo com as necessidades nutricionais individuais, hábitos
          alimentares e objetivos pessoais do paciente.
        </Text>
      </ListItem>
      {/* <ListItem
        style={{
          background:
            "linear-gradient(to right bottom, #f97794 0%, #623aa2 100%)",
        }}
      > */}
      <ListItem>
        <FaUtensils />
        <h3>Personal diet</h3>
        <Text>
          O serviço oferecido no consultório feito em sua casa! O foco do
          personal diet é trazer para quem busca o serviço as adequações e
          adaptações práticas a rotina domiciliar.
        </Text>
      </ListItem>
      {/* <ListItem
        style={{
          background:
            "linear-gradient(to right bottom, #52e5e7 0%, #130cb7 100%)",
        }}
      > */}
      <ListItem>
        <FaShoppingCart />
        <h3>Orientações na prática</h3>
        <Text>
          A nutricionista o acompanha durante o processo de compras, como
          supermercados, feiras ou lojas de produtos naturais.
        </Text>
      </ListItem>
      {/* <ListItem
        style={{
          background:
            "linear-gradient(to right bottom, #f05f57 0%, #360940 100%)",
        }}
      > */}
      <ListItem>
        <FaRegCaretSquareRight />
        <h3>Palestras e cursos</h3>
        <Text>
          Um jeito dinâmico e efetivo de levar mais saúde e qualidade de vida às
          pessoas por meio de rodas de conversa, cursos e palestras.
        </Text>
      </ListItem>
    </List>
  </Container>
)

export default Services
