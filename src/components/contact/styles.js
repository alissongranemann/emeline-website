import styled, { css } from "styled-components"

import SectionTitle from "../common/section-title"
import { buttonStyles } from "../common/button"
import { colors, device } from "../../config/variables"

export const Container = styled.div`
  padding: 50px 10%;
`

export const Title = styled(SectionTitle)`
  text-align: center;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 50px;

  @media ${device.laptop} {
    width: 40%;
    margin-bottom: unset;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  flex-wrap: wrap;
  width: 80%;
  text-align: center;

  svg {
    height: auto;
    width: 2.75rem;
    margin-right: 10px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: unset;
    margin-bottom: 25px;
    font-size: 1.7rem;

    &:hover {
      color: #82427b;
    }
  }

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.laptop} {
    width: 40%;
    flex-direction: column;
    margin-bottom: unset;

    a + a {
      margin-top: 25px;
    }
  }
`

// Form controls follow the Material UI v4 outlined text field the form used
// before, in the brand colours
const fontFamily = "inherit"
const errorColor = "#f44336"
const focusColor = colors.primary

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 25px;
  }
`

export const Label = styled.label`
  margin-bottom: 10px;
  color: #000;
  font-family: ${fontFamily};
  font-size: 1.5rem;
  line-height: 1;
  letter-spacing: 0.00938em;
`

const control = css`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  /* MUI draws the border as an overlay; take it out of the padding */
  padding: 17.5px 13px;
  border: 1px solid
    ${({ $invalid }) => ($invalid ? errorColor : "rgba(0, 0, 0, 0.23)")};
  border-radius: 8px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  font-family: ${fontFamily};
  font-size: 1.5rem;
  line-height: 1.1876;
  letter-spacing: 0.00938em;

  &::placeholder {
    color: currentColor;
    opacity: 0.42;
  }

  &:hover {
    border-color: ${({ $invalid }) =>
      $invalid ? errorColor : "rgba(0, 0, 0, 0.87)"};
  }

  /* 2px focus ring without shifting the layout */
  &:focus {
    outline: none;
    border-color: ${({ $invalid }) => ($invalid ? errorColor : focusColor)};
    box-shadow: inset 0 0 0 1px
      ${({ $invalid }) => ($invalid ? errorColor : focusColor)};
  }
`

export const Input = styled.input`
  ${control}
`

export const TextArea = styled.textarea`
  ${control}
  resize: none;
`

export const HelperText = styled.p`
  margin: 3px 14px 0;
  color: ${errorColor};
  font-family: ${fontFamily};
  font-size: 1.1rem;
  line-height: 1.66;
  letter-spacing: 0.03333em;
`

export const SubmitButton = styled.button`
  ${buttonStyles}
  margin-top: 35px;

  &:disabled {
    box-shadow: none;
    background-color: #949494;
    cursor: default;
  }
`
