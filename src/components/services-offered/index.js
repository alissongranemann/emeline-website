import React from "react"
import {
  FaNotesMedical,
  FaUtensils,
  FaShoppingCart,
  FaRegCaretSquareRight,
} from "react-icons/fa"
import { Fade } from "react-reveal"

import { Container, Title, List, ListItem, Subtitle, Text } from "./styles"

const Services = () => (
  <Container>
    <Fade delay={100}>
      <Title>Serviços</Title>
    </Fade>
    <List>
      <Fade>
        <ListItem>
          <FaNotesMedical />
          <Subtitle>Atendimento individualizado</Subtitle>
          <Text>
            Atendimento personalizado, onde é elaborado um plano alimentar de
            acordo com as necessidades nutricionais individuais, hábitos
            alimentares e objetivos pessoais do paciente.
          </Text>
        </ListItem>
      </Fade>
      <Fade>
        <ListItem>
          <FaUtensils />
          <Subtitle>Personal diet</Subtitle>
          <Text>
            O serviço oferecido no consultório feito em sua casa! O foco do
            personal diet é trazer para quem busca o serviço as adequações e
            adaptações práticas a rotina domiciliar.
          </Text>
        </ListItem>
      </Fade>
      <Fade>
        <ListItem>
          <FaRegCaretSquareRight />
          <Subtitle>Palestras e cursos</Subtitle>
          <Text>
            Um jeito dinâmico e efetivo de levar mais saúde e qualidade de vida
            às pessoas por meio de rodas de conversa, cursos e palestras.
          </Text>
        </ListItem>
      </Fade>
      <Fade>
        <ListItem>
          <FaShoppingCart />
          <Subtitle>Orientações na prática</Subtitle>
          <Text>
            A nutricionista o acompanha durante o processo de compras, como
            supermercados, feiras ou lojas de produtos naturais.
          </Text>
        </ListItem>
      </Fade>
    </List>
  </Container>
)

export default Services
