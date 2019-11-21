import React from "react"
import Fade from "react-reveal/Fade"

import { Container, Title, ProfilePicture, TextContainer } from "./styles"

const About = () => (
  <Container>
    <ProfilePicture />
    <TextContainer>
      <Fade>
        <Title>Sobre mim</Title>
        <p>
          Sou formada em Nutrição pela Universidade Federal de Santa Catarina
          (UFSC), Pós graduada em Nutrição Clínica Funcional pelo Centro de
          Nutrição Funcional (VP) e atualmente mestranda em Nutrição do Programa
          de Pós Graduação em Nutrição da Universidade Federal de Santa Catarina
          (UFSC). Além disso busco constantemente atualizações por meio de
          cursos, palestras e congressos para aperfeiçoar o meu trabalho e a
          qualidade dos atendimentos.
        </p>
        <p>
          Experiência em atendimentos clínicos nutricionais em adultos,
          gestantes e idosos, com foco em reeducação alimentar, emagrecimento,
          procedimentos estéticos, orientações para cirurgia bariátrica, doenças
          crônicas não transmissíveis, alergias e intolerâncias alimentantes,
          saúde da mulher e praticantes de atividades físicas com foco em
          hipertrofia.
        </p>
      </Fade>
    </TextContainer>
  </Container>
)

export default About
