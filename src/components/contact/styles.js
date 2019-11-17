import styled from "styled-components"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

import { device } from "../../layouts/variables"

export const Container = styled.div`
  margin-bottom: 50px;
  padding: 0 10%;
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
    width: 30px;
    margin-right: 10px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: unset;
    margin-bottom: 25px;

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

export const StyledButton = styled(Button)`
  color: #fff !important;
  margin-top: 35px !important;
  background-color: #5a1a78 !important;

  &:disabled {
    background-color: #949494 !important;
  }
`
