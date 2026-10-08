import styled from "styled-components"

import { colors, device } from "../../config/variables"

export const Nav = styled.nav`
  display: none;
  position: fixed;
  top: 50%;
  left: 24px;
  z-index: 100;
  transform: translateY(-50%);
  animation: fadein 1s;

  /* on narrower screens the dots would sit on top of the content */
  @media ${device.laptop} {
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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  margin: unset;
  list-style: none;
`

export const ListItem = styled.li`
  margin: unset;
`

export const Label = styled.span`
  position: absolute;
  top: 50%;
  left: calc(100% + 12px);
  padding: 0.4rem 1rem;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 1.3rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transform: translate(-4px, -50%);
  transition:
    opacity 0.2s,
    transform 0.2s;
`

// a dot per section; the current one stretches into a brand-colored pill.
// The white ring keeps the dots visible on the green and photo sections.
export const Link = styled.a`
  position: relative;
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.3);
  transition:
    height 0.25s,
    background-color 0.25s;

  &[aria-current] {
    height: 26px;
    background-color: ${colors.primary};
  }

  &:hover,
  &:focus-visible {
    background-color: ${colors.primary};

    ${Label} {
      opacity: 1;
      transform: translate(0, -50%);
    }
  }
`
