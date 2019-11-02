import React from "react"
import styled from "styled-components"

import Picture from "../images/profile-picture.jpg"

const Image = styled.img`
  max-width: 45%;
  height: auto;
  object-fit: cover;
  max-height: 700px;
  border-radius: 100%;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TextContainer = styled.div`
  max-width: 45%;
`

const About = () => (
  <Container>
    <Image src={Picture} />
    <TextContainer>
      <h2>Sobre mim</h2>
      <p>
        Sou formada em Nutrição pela Universidade Federal de Santa Catarina
        (UFSC), Pós graduada em Nutrição Clínica Funcional pelo Centro de
        Nutrição Funcional (VP) e atualmente mestranda em Nutrição do Programa
        de Pós Graduação em Nutrição da Universidade Federal de Santa Catarina
        (UFSC). Além disso busco constantemente atualizações por meio de cursos,
        palestras e congressos para aperfeiçoar o meu trabalho e a qualidade dos
        atendimentos.
      </p>
      <p>
        Experiência em atendimentos clínicos nutricionais em adultos, gestantes
        e idosos, com foco em reeducação alimentar, emagrecimento, procedimentos
        estéticos, orientações para cirurgia bariátrica, doenças crônicas não
        transmissíveis (diabetes, hipertensão, colesterol elevado), alergias e
        intolerâncias alimentantes, saúde da mulher (Tensão pré menstrual,
        menopausa, gestantes e nutrizes) e praticantes de atividades físicas com
        foco em hipertrofia.
      </p>
    </TextContainer>
  </Container>
)

export default About
