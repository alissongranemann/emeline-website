import React from "react"
import styled from "styled-components"
import { FaWhatsapp } from "react-icons/fa"

import { WHATSAPP_URL } from "../../config/variables"

const GREETING = "Olá! Vim pelo site e gostaria de mais informações."

const Button = styled.a`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  background-color: #25d366;
  color: #fff;
  transition: transform 0.2s;

  svg {
    width: 30px;
    height: 30px;
  }

  &:hover {
    transform: scale(1.08);
  }

  &:focus-visible {
    outline: 3px solid rgba(37, 211, 102, 0.5);
    outline-offset: 3px;
  }
`

const WhatsAppButton = () => (
  <Button
    href={`${WHATSAPP_URL}&text=${encodeURIComponent(GREETING)}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar pelo WhatsApp"
    title="Conversar pelo WhatsApp"
  >
    <FaWhatsapp aria-hidden="true" />
  </Button>
)

export default WhatsAppButton
