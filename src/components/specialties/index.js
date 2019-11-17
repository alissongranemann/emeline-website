import React from "react"
import { FaRegGrin, FaRegHospital } from "react-icons/fa"
import { GiWeightLiftingUp, GiFemale } from "react-icons/gi"
import Fade from "react-reveal/Fade"

import { Container, Title, List, ListItem, Subtitle, Text } from "./styles"

const Specialties = () => (
  <Container>
    <Fade delay={100}>
      <Title>Especialidades</Title>
    </Fade>
    <Fade>
      <List>
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
            Tratamento nutricional focado na hipertrofia, definição muscular,
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
      </List>
    </Fade>
  </Container>
)

export default Specialties
