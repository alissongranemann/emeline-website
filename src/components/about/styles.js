import styled from "styled-components"

import Picture from "./profile-picture"
import { device } from "../../config/variables"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 10%;
  margin-bottom: 50px;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

export const ProfilePicture = styled(Picture)`
  width: 90%;
  max-width: 600px;
  height: auto;
  object-fit: cover;
  max-height: 700px;
  border-radius: 100%;
  margin-bottom: 35px;
  box-shadow: -2px 2px 10px 0px #5a5a5a;

  @media ${device.laptop} {
    width: 35%;
    margin-bottom: unset;
  }
`

export const TextContainer = styled.div`
  max-width: 90%;
  font-size: 1.6rem;
  line-height: 1.5;

  @media ${device.laptop} {
    width: 40%;
  }
`

export const Title = styled.h2`
  text-transform: none !important;
  text-align: center;

  @media ${device.laptop} {
    text-align: left;
  }
`
