import styled from "styled-components"

import Logo from "./logo"
import { device } from "../../config/variables"

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 7.5rem;
  background-color: #2A1628;
  font-size: 1.25rem;
  font-weight: bold;

  a {
    display: inline-block;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: #9fb583;
    }
  }

  @media ${device.tablet} {
    justify-content: space-between;
  }
`

export const CustomLogo = styled(Logo)`
  width: 25rem;
  margin: 1rem 0;
`

export const NavBar = styled.nav`
  display: none;
  align-items: center;

  ul {
    display: flex;
    margin: unset;
    list-style: none;

    li {
      margin: unset;

      & + li {
        margin-left: 30px;
      }
    }
  }

  @media ${device.tablet} {
    display: block;
  }
`

export const MobileNavBar = styled.nav`
  position: absolute;
  right: 2rem;
  z-index: 1;

  ul {
    position: absolute;
    top: -5rem;
    right: -2rem;
    height: 100vh;
    width: 15rem;
    margin: auto;
    padding: 2rem;
    padding-top: 125px;
    background-color: #432543;
    list-style-type: none;
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  li {
    margin-bottom: 2.5rem;
    text-align: center;
  }

  > input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    opacity: 0;
    z-index: 2;

    &:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(1px, 2px);

      &:nth-last-child(3) {
        opacity: 0;
        transform: rotate(0deg) scale(0.2, 0.2);
      }

      &:nth-last-child(2) {
        transform: rotate(-45deg) translate(0, -1px);
      }
    }

    &:checked ~ ul {
      transform: none;
    }
  }

  > span {
    position: relative;
    display: block;
    width: 3rem;
    height: 0.4rem;
    margin-bottom: 5px;
    background: #fff;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

    &:first-child {
      transform-origin: 0% 0%;
    }
    &:nth-last-child(2) {
      transform-origin: 0% 100%;
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`
