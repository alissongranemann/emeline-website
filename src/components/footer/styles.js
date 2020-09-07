import styled from "styled-components"

import Logo from "./logo"

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
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

export const CustomLogo = styled(Logo)`
  width: 10rem;
  margin-right: 5rem;
  margin: 0.75rem 0;
`

export const IconContainer = styled.div`
  display: flex;
  margin: 0 3.5rem;
  flex-grow: 1;

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
  text-align: center;
`
