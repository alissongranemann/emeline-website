import React from "react"
import {
  FaNotesMedical,
  FaUtensils,
  FaShoppingCart,
  FaRegCaretSquareRight,
} from "react-icons/fa"
import styled from "styled-components"
import { Zoom, Fade } from "react-reveal"

import Background from "../images/services-background.jpg"

const Container = styled.div`
  margin-bottom: 50px;
  padding: 50px 10%;
  color: white;
  background-image: linear-gradient(
      to right bottom,
      rgba(182, 82, 240, 0.95) 0%,
      rgba(99, 0, 179, 0.95) 100%
    ),
    url(${props => props.backgroundImg});
  background-size: cover;
  background-position: center;
  text-align: center;
`

const Title = styled.h2`
  display: inline-block;
  margin: 0 auto;
  margin-bottom: 50px;
`

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style: none;
  margin: unset;
`

const ListItem = styled.li`
  width: 275px;
  height: 390px;
  margin: 15px;
  padding: 30px 25px;
  border: 1px solid #e1e1e1;
  border-radius: 25px;
  box-shadow: -2px 2px 5px 0px #4c4c4c;
  font-size: 22px;
  background-color: rgba(255, 255, 255, 0.65);
  color: #000;

  svg {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    color: #671d93;
  }
`

const Subtitle = styled.h3`
  font-size: 22px;
`

const Text = styled.p`
  font-family: Montserrat;
  font-size: 15px;
  overflow-wrap: break-word;
`

const Services = () => (
  <Container backgroundImg={Background}>
    <Fade delay={100}>
      <Title>Serviços</Title>
    </Fade>
    <List>
      <Zoom duration={750}>
        <ListItem>
          <FaNotesMedical />
          <Subtitle>Atendimento individualizado</Subtitle>
          <Text>
            Um atendimento personalizado, em que é elaborado um plano
            alimentar de acordo com as necessidades nutricionais individuais,
            hábitos alimentares e objetivos pessoais do paciente.
          </Text>
        </ListItem>
        <ListItem>
          <FaUtensils />
          <Subtitle>Personal diet</Subtitle>
          <Text>
            O serviço oferecido no consultório feito em sua casa! O foco do
            personal diet é trazer para quem busca o serviço as adequações e
            adaptações práticas a rotina domiciliar.
          </Text>
        </ListItem>
        <ListItem>
          <FaRegCaretSquareRight />
          <Subtitle>Palestras e cursos</Subtitle>
          <Text>
            Um jeito dinâmico e efetivo de levar mais saúde e qualidade de vida
            às pessoas por meio de rodas de conversa, cursos e palestras.
          </Text>
        </ListItem>
        <ListItem>
          <FaShoppingCart />
          <Subtitle>Orientações na prática</Subtitle>
          <Text>
            A nutricionista o acompanha durante o processo de compras, como
            supermercados, feiras ou lojas de produtos naturais.
          </Text>
        </ListItem>
      </Zoom>
    </List>
  </Container>
)

export default Services
