import Scrollspy from "react-scrollspy"
import styled from "styled-components"

import { device } from "../../layouts/variables"

export const StyledScrollSpy = styled(Scrollspy)`
  margin: unset;
  list-style: none;
`

export const Nav = styled.nav`
  display: none;
  position: fixed;
  top: 35%;
  left: 3%;
  padding: 12px 8px;
  border-radius: 25px;
  box-shadow: -1px 0px 5px 0px;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  animation: fadein 1s;

  @media ${device.tablet} {
    display: block;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const ListItem = styled.li`
  margin: unset;

  & + & {
    margin-top: 25px;
  }
`

export const Link = styled.a`
  display: inline-flex;
  color: unset;

  svg {
    width: 25px;
    height: auto;
    font-size: 1.75rem;
    color: #d8d8d8;
  }
`
