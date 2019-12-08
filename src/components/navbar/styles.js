import Scrollspy from "react-scrollspy"
import styled from "styled-components"

import { device } from "../../config/variables"

export const StyledScrollSpy = styled(Scrollspy)`
  margin: unset;
  list-style: none;

  .active {
    svg {
      color: #ff86f0;
    }

    span {
      visibility: visible;
    }
  }
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
    width: 20px;
    height: auto;
    font-size: 1.5rem;
    color: #d8d8d8;
  }
`

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;

  span {
    position: absolute;
    z-index: 1;
    top: -1.75rem;
    left: 1.1rem;
    visibility: hidden;
    /* width: 8rem; */
    padding: 0.75rem;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 0.8rem;
    text-align: center;

    &::after {
      content: " ";
      position: absolute;
      top: 50%;
      right: 100%; /* To the left of the tooltip */
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent rgba(0, 0, 0, 0.7) transparent transparent;
    }
  }
`
