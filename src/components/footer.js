import React from "react"
import styled from "styled-components"
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa"

import FullLogo from "../images/full-logo.png"
import { device } from "../layouts/variables"

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5%;
  background-color: #311231;
  color: #fff;

  a {
    text-decoration: none;
    color: unset;

    &:hover {
      color: #ff86f0;
    }
  }
`

const Image = styled.img`
  max-width: 150px;
  height: auto;
  object-fit: contain;
  margin: 10px 0;

  @media ${device.laptop} {
    max-width: 300px;
  }
`

const IconsContainer = styled.div`
  svg {
    height: auto;
    width: 15px;
  }

  a + a {
    margin-left: 20px;
  }

  @media ${device.laptop} {
    svg {
      width: 25px;
    }

    a + a {
      margin-left: 35px;
    }
  }
`

const DevelopedBy = styled.div`
  font-size: 6px;
  width: 100%;
  text-align: center;

  @media ${device.laptop} {
    font-size: 12px;
    width: auto;
  }
`

const Footer = () => (
  <StyledFooter>
    <IconsContainer>
      <a
        href="www.facebook.com/emeline.abreu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook />
      </a>
      <a
        href="http://www.instagram.com/emelineabreunutri"
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
    <Image src={FullLogo} />
    <DevelopedBy>
      {new Date().getFullYear()}
      {` `}© desenvolvido por
      {` `}
      <strong>
        <a href="https://www.linkedin.com/in/alisson-granemann-abreu-820b9a90/">
          Alisson
        </a>
      </strong>
    </DevelopedBy>
  </StyledFooter>
)

export default Footer
