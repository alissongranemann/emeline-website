import React from "react"
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa"

import { StyledFooter, IconContainer, DevelopedBy, CustomLogo } from "./styles"
import { FACEBOOK_URL, INSTAGRAM_URL } from "../../config/variables"

const Footer = () => (
  <StyledFooter>
    <CustomLogo />
    <IconContainer>
      <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
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
    </IconContainer>
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
