import styled, { css } from "styled-components"
import { Link } from "gatsby"

import { colors } from "../../../config/variables"

export const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.2rem 3rem;
  border: 0;
  border-radius: 999px;
  box-shadow: 0 2px 8px rgba(130, 66, 123, 0.3);
  background-color: ${colors.primary};
  color: #fff;
  font-family: inherit;
  font-size: max(1.5rem, 14px);
  font-weight: 700;
  line-height: 1.5;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.2s,
    box-shadow 0.2s;

  svg {
    transition: transform 0.2s;
  }

  &:hover {
    background-color: ${colors.primaryDark};
    box-shadow: 0 4px 14px rgba(130, 66, 123, 0.4);

    svg {
      transform: translateX(3px);
    }
  }

  &:focus-visible {
    outline: 3px solid rgba(130, 66, 123, 0.4);
    outline-offset: 2px;
  }
`

export const ButtonLink = styled(Link)`
  ${buttonStyles}
`
