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
  display: grid;
  gap: 5rem;
  max-width: 1000px;
  margin: 0 auto;

  @media ${device.laptop} {
    grid-template-columns: 3fr 2fr;
    align-items: start;
  }
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
`

export const Channels = styled.div`
  padding: 3rem;
  border-radius: 15px;
  background-color: #f6f1f5;

  h3 {
    margin-bottom: 1rem;
    font-size: 2.2rem;
  }

  p {
    margin-bottom: 2.5rem;
  }

  ul {
    margin: 0;
    list-style: none;
  }

  li {
    margin: 0;

    & + li {
      margin-top: 1.5rem;
    }
  }

  a {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: inherit;
    text-decoration: none;
    overflow-wrap: anywhere;

    &:hover {
      color: ${colors.primary};
    }
  }

  svg {
    flex-shrink: 0;
    box-sizing: content-box;
    width: 20px;
    height: 20px;
    padding: 10px;
    border-radius: 50%;
    background-color: ${colors.primary};
    color: #fff;
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
  font-size: max(1.5rem, 14px);
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
  /* below 16px iOS zooms the page when a field gets focus */
  font-size: max(1.5rem, 16px);
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
  font-size: max(1.1rem, 12px);
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
