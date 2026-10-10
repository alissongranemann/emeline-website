import React from "react"
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa"

import { StyledFooter, IconContainer, DevelopedBy, CustomLogo } from "./styles"
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WHATSAPP_URL,
  EMAIL,
} from "../../config/variables"

const Footer = () => (
  <StyledFooter>
    <CustomLogo />
    <IconContainer>
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <FaInstagram />
      </a>{" "}
      <a
        href={`mailto:${EMAIL}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="E-mail"
      >
        <FaEnvelope />
      </a>{" "}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
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
