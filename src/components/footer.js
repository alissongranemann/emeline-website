import React from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa"

import FullLogo from "../images/full-logo.png"

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1500px;
  margin: 0 auto;
`

const Image = styled.img`
  max-width: 350px;
  height: auto;
  object-fit: contain;
`

const IconsContainer = styled.div`
  svg {
    height: auto;
    width: 30px;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  a + a {
    margin-left: 35px;
  }
`

const Footer = () => (
  <StyledFooter>
    <IconsContainer>
      <a href="www.facebook.com/emeline.abreu">
        <FaFacebook />
      </a>
      <a href="http://www.instagram.com/emelineabreunutri">
        <FaInstagram />
      </a>{" "}
      <a href="mailto:emeline.ntr@gmail.com">
        <FaEnvelope />
      </a>{" "}
      <a href="https://api.whatsapp.com/send?phone=5548996229104">
        <FaWhatsapp />
      </a>
    </IconsContainer>
    <Image src={FullLogo} />
    <div>
      {new Date().getFullYear()}
      {` `}© desenvolvido por
      {` `}
      <a href="https://github.com/alissongranemann">Alisson</a>
    </div>
  </StyledFooter>
)

export default Footer
