import React from "react"
import { FaRegGrin, FaRegHospital } from "react-icons/fa"
import { GiWeightLiftingUp, GiFemale } from "react-icons/gi"
import Fade from "react-reveal/Fade"

import { Container, Title, List, ListItem, Text } from "./styles"

const SPECIALTIES = [
  {
    title: "Nutrição clínica como coadjuvante na melhora de condições de saúde",
    icon: <FaRegHospital />,
    text:
      "Tratamento nutricional focado nos diagnósticos apresentados como: diabetes, hipertensão, alterações de colesterol e triglicerídeos, doenças gástricas, doenças intestinais, doenças tireoidianas, intolerâncias e alergias alimentares, anemia e outras deficiências vitamínicas e minerais.",
  },
  {
    title: "Nutrição para praticantes de atividades físicas",
    icon: <GiWeightLiftingUp />,
    text:
      "Tratamento nutricional focado na hipertrofia, definição muscular, ganho de peso, perda de peso, redução de percentual de gordura, adaptação alimentar adequada aos treinos praticados, melhora de disposição e rendimento.",
  },
  {
    title: "Nutrição e estética",
    icon: <FaRegGrin />,
    text:
      "Tratamento nutricional focado no emagrecimento, nutrição aliada aos tratamentos para redução de gordura localizada, celulite e estrias, adequação alimentar para períodos pré e pós cirúrgicos, para tratamento capilares e de estética facial.",
  },
  {
    title: "Nutrição na saúde da mulher",
    icon: <GiFemale />,
    text:
      "Tratamento nutricional focado nas alterações hormonais como a tensão pré-menstrual, síndrome do ovário policístico e menopausa, adaptações alimentares na fase pré-gestacional, gestacional e puerpério.",
  },
]

const Specialties = () => (
  <Container>
    <Fade delay={100}>
      <Title>Especialidades</Title>
    </Fade>
    <Fade cascade>
      <List>
        {SPECIALTIES.map(specialty => (
          <ListItem>
            <div>
              {specialty.icon}
              <h3>{specialty.title}</h3>
            </div>
            <Text>{specialty.text}</Text>
          </ListItem>
        ))}
      </List>
    </Fade>
  </Container>
)

export default Specialties
