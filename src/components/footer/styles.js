import styled from "styled-components"

import { device } from "../../config/variables"
import Logo from "./logo"

export const StyledFooter = styled.footer`
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

export const Image = styled.img`
  max-width: 150px;
  height: auto;
  object-fit: contain;
  margin: 10px 0;

  @media ${device.laptop} {
    max-width: 300px;
  }
`

export const CustomLogo = styled(Logo)`
  width: 5rem;
  margin-right: 5rem;
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.75rem 0;

  svg {
    height: auto;
    width: 2.2rem;
  }

  a + a {
    margin-left: 3.5rem;
  }
`

export const DevelopedBy = styled.div`
  font-size: 1rem;
  width: 100%;
  text-align: center;

  @media ${device.laptop} {
    width: auto;
  }
`
