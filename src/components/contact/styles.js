import styled from "styled-components"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import InputLabel from "@material-ui/core/InputLabel"

import { device } from "../../config/variables"

export const Container = styled.div`
  padding: 50px 10%;
  background-color: #f1f1f1;
`

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
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

  .MuiInputLabel-root,
  .MuiOutlinedInput-root,
  .MuiButton-root {
    font-size: 1.5rem;
  }

  .MuiFormHelperText-root {
    font-size: 1.1rem;
  }

  .MuiOutlinedInput-root {
    background-color: #fff;
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
      color: #5a1a78;
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

export const StyledTextField = styled(TextField)`
  margin-bottom: 25px !important;
`

export const StyledInputLabel = styled(InputLabel)`
  color: #000 !important;
  margin-bottom: 10px !important;
`

export const StyledButton = styled(Button)`
  color: #fff !important;
  margin-top: 35px !important;
  background-color: #5a1a78 !important;

  &:disabled {
    background-color: #949494 !important;
  }
`
