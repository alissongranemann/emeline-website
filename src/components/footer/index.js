import React from "react"
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa"

import FullLogo from "../../images/full-logo.png"
import { StyledFooter, Image, IconsContainer, DevelopedBy } from "./styles"

const Footer = () => (
  <StyledFooter>
    <IconsContainer>
      <a
        href="https://www.facebook.com/emeline.abreu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/emelineabreunutri"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>{" "}
      <a
        href="mailto:emeline.ntr@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaEnvelope />
      </a>{" "}
      <a
        href="https://api.whatsapp.com/send?phone=5548996229104"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </IconsContainer>
    <Image src={FullLogo} alt="Logo da Emeline Abreu" />
    <DevelopedBy>
      {new Date().getFullYear()}
      {` `}© desenvolvido por
      {` `}
      <strong>
        <a href="https://linkedin.com/in/alisson-granemann-abreu-820b9a90/">
          Alisson
        </a>
      </strong>
    </DevelopedBy>
  </StyledFooter>
)

export default Footer
