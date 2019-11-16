import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import Picture from "./profile-picture"

const ProfilePicture = styled(Picture)`
  width: 40%;
  height: auto;
  object-fit: cover;
  max-height: 700px;
  border-radius: 100%;
`

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  margin-bottom: 50px;
`

const TextContainer = styled.div`
  max-width: 45%;
  font-size: 16px;
`

const Title = styled.h2`
  text-transform: none !important;
`

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
          crônicas não transmissíveis (diabetes, hipertensão, colesterol
          elevado), alergias e intolerâncias alimentantes, saúde da mulher
          (Tensão pré menstrual, menopausa, gestantes e nutrizes) e praticantes
          de atividades físicas com foco em hipertrofia.
        </p>
      </Fade>
    </TextContainer>
  </Container>
)

export default About
