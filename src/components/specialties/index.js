import React from "react"
import { FaRegGrin, FaRegHospital } from "react-icons/fa"
import { GiWeightLiftingUp, GiFemale } from "react-icons/gi"
import Fade from "react-reveal/Fade"

import { Container, Title, List, ListItem, Text } from "./styles"

const Specialties = () => (
  <Container>
    <Fade delay={100}>
      <Title>Especialidades</Title>
    </Fade>
    <List>
      <ListItem>
        <Fade>
          <div>
            <FaRegHospital />
            <h3>
              Nutrição clínica como coadjuvante na melhora de condições de saúde
            </h3>
          </div>
          <Text>
            Tratamento nutricional focado nos diagnósticos apresentados como:
            diabetes, hipertensão, alterações de colesterol e triglicerídeos,
            doenças gástricas, doenças intestinais, doenças tireoidianas,
            intolerâncias e alergias alimentares, anemia e outras deficiências
            vitamínicas e minerais.
          </Text>
        </Fade>
      </ListItem>
      <ListItem>
        <Fade>
          <div>
            <GiWeightLiftingUp />
            <h3>Nutrição para praticantes de atividades físicas</h3>
          </div>
          <Text>
            Tratamento nutricional focado na hipertrofia, definição muscular,
            ganho de peso, perda de peso, redução de percentual de gordura,
            adaptação alimentar adequada aos treinos praticados, melhora de
            disposição e rendimento.
          </Text>
        </Fade>
      </ListItem>
      <ListItem>
        <Fade>
          <div>
            <FaRegGrin />
            <h3>Nutrição e estética</h3>
          </div>
          <Text>
            Tratamento nutricional focado no emagrecimento, nutrição aliada aos
            tratamentos para redução de gordura localizada, celulite e estrias,
            adequação alimentar para períodos pré e pós cirúrgicos, para
            tratamento capilares e de estética facial.
          </Text>
        </Fade>
      </ListItem>
      <ListItem>
        <Fade>
          <div>
            <GiFemale />
            <h3>Nutrição na saúde da mulher</h3>
          </div>
          <Text>
            Tratamento nutricional focado nas alterações hormonais como a tensão
            pré-menstrual, síndrome do ovário policístico e menopausa,
            adaptações alimentares na fase pré-gestacional, gestacional e
            puerpério.
          </Text>
        </Fade>
      </ListItem>
    </List>
  </Container>
)

export default Specialties
