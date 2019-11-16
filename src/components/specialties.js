import React from "react"
import styled from "styled-components"
import { FaRegGrin, FaRegHospital } from "react-icons/fa"
import { GiWeightLiftingUp, GiFemale } from "react-icons/gi"
import Fade from "react-reveal/Fade"

const Container = styled.div`
  text-align: center;
  padding: 35px 8%;
  background-color: #f1f1f1;
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
  margin: unset;
  font-family: Montserrat;
  list-style: none;
`

const ListItem = styled.li`
  width: 500px;
  margin: 25px;
  text-align: left;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  svg {
    min-width: 35px;
    height: 35px;
    margin-right: 20px;
    color: #5a187c;
  }
`

const Subtitle = styled.h3`
  font-size: 20px;
`

const Text = styled.p`
  font-size: 14px;
`

const Specialties = () => (
  <Container>
    <Fade delay={100}>
      <Title>Especialidades</Title>
    </Fade>
    <List>
      <Fade>
        <ListItem>
          <div>
            <FaRegHospital />
            <Subtitle>
              Nutrição clínica como coadjuvante na melhora de condições de saúde
            </Subtitle>
          </div>
          <Text>
            Tratamento nutricional focado nos diagnósticos apresentados como:
            diabetes, hipertensão, alterações de colesterol e triglicerídeos,
            doenças gástricas, doenças intestinais, doenças tireoidianas,
            intolerâncias e alergias alimentares, anemia e outras deficiências
            vitamínicas e minerais.
          </Text>
        </ListItem>
        <ListItem>
          <div>
            <GiWeightLiftingUp />
            <Subtitle>Nutrição para praticantes de atividades físicas</Subtitle>
          </div>
          <Text>
            Tratamento nutricional focado na Hipertrofia, definição muscular,
            ganho de peso, perda de peso, redução de percentual de gordura,
            adaptação alimentar adequada aos treinos praticados, melhora de
            disposição e rendimento.
          </Text>
        </ListItem>
        <ListItem>
          <div>
            <FaRegGrin />
            <Subtitle>Nutrição e estética</Subtitle>
          </div>
          <Text>
            Tratamento nutricional focado no emagrecimento, nutrição aliada aos
            tratamentos para redução de gordura localizada, celulite e estrias,
            adequação alimentar para períodos pré e pós cirúrgicos, para
            tratamento capilares e de estética facial.
          </Text>
        </ListItem>
        <ListItem>
          <div>
            <GiFemale />
            <Subtitle>Nutrição na saúde da mulher</Subtitle>
          </div>
          <Text>
            Tratamento nutricional focado nas alterações hormonais como a tensão
            pré-menstrual, síndrome do ovário policístico e menopausa,
            adaptações alimentares na fase pré-gestacional, gestacional e
            puerpério.
          </Text>
        </ListItem>
      </Fade>
    </List>
  </Container>
)

export default Specialties
