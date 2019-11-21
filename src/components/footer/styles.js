import styled from "styled-components"

import { device } from "../../layouts/variables"

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

export const IconsContainer = styled.div`
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

export const DevelopedBy = styled.div`
  font-size: 0.8rem;
  width: 100%;
  text-align: center;

  @media ${device.laptop} {
    width: auto;
  }
`
