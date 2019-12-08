import React from "react"
import {
  FaNotesMedical,
  FaUtensils,
  FaShoppingCart,
  FaRegCaretSquareRight,
} from "react-icons/fa"
import { Fade } from "react-reveal"

import Card from "../common/card"
import { Container, Title, List, ListItem, Subtitle, Text } from "./styles"

const SERVICES = [
  {
    title: "Atendimento individualizado",
    icon: <FaNotesMedical />,
    text:
      "Atendimento personalizado, onde é elaborado um plano alimentar de acordo com as necessidades nutricionais individuais, hábitos alimentares e objetivos pessoais do paciente.",
  },
  {
    title: "Personal diet",
    icon: <FaUtensils />,
    text:
      "O serviço oferecido no consultório feito em sua casa! O foco do personal diet é trazer para quem busca o serviço as adequações e adaptações práticas a rotina domiciliar.",
  },
  {
    title: "Palestras e cursos",
    icon: <FaRegCaretSquareRight />,
    text:
      "Um jeito dinâmico e efetivo de levar mais saúde e qualidade de vida às pessoas por meio de rodas de conversa, cursos e palestras.",
  },
  {
    title: "Orientações na prática",
    icon: <FaShoppingCart />,
    text:
      "A nutricionista o acompanha durante o processo de compras, como supermercados, feiras ou lojas de produtos naturais.",
  },
]

const Services = () => (
  <Container>
    <Fade cascade>
      <Title>Serviços</Title>
      <List>
        {SERVICES.map(service => (
          <Card>
            <ListItem>
              {service.icon}
              <Subtitle>{service.title}</Subtitle>
              <Text>{service.text}</Text>
            </ListItem>
          </Card>
        ))}
      </List>
    </Fade>
  </Container>
)

export default Services
