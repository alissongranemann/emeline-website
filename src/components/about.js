import React from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import Picture from "./profile-picture"
import { device } from "../layouts/variables"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 10%;
  margin-bottom: 50px;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`
const ProfilePicture = styled(Picture)`
  width: 90%;
  height: auto;
  object-fit: cover;
  max-height: 700px;
  border-radius: 100%;
  margin-bottom: 35px;

  @media ${device.laptop} {
    width: 40%;
    margin-bottom: unset;
  }
`

const TextContainer = styled.div`
  max-width: 90%;
  font-size: 16px;

  @media ${device.laptop} {
    width: 40%;
  }
`

const Title = styled.h2`
  text-transform: none !important;
  text-align: center;

  @media ${device.laptop} {
    text-align: left;
  }
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
          crônicas não transmissíveis , alergias e intolerâncias alimentantes,
          saúde da mulher e praticantes de atividades físicas com foco em
          hipertrofia.
        </p>
      </Fade>
    </TextContainer>
  </Container>
)

export default About
