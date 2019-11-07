import React from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa"

import FullLogo from "../images/full-logo.png"

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12%;
  background-color: #311231;
  color: #fff;
  font-size: 14px;

  a {
    text-decoration: none;
    color: unset;
  }
`

const Image = styled.img`
  max-width: 300px;
  height: auto;
  object-fit: contain;
  margin: 10px 0;
`

const IconsContainer = styled.div`
  svg {
    height: auto;
    width: 25px;
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
      <strong>
        <a href="https://www.linkedin.com/in/alisson-granemann-abreu-820b9a90/">
          Alisson
        </a>
      </strong>
    </div>
  </StyledFooter>
)

export default Footer
