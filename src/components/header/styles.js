import styled from "styled-components"

import Logo from "./logo"

export const Header = styled.header`
  background-color: #311231;
  padding: 10px 7.5rem;
  display: flex;
  justify-content: space-between;
`

export const CustomLogo = styled(Logo)`
  width: 25rem;
`

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;

  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;

    & + a {
      margin-left: 30px;
    }

    &:hover {
      color: #ff86f0;
    }
  }
`
