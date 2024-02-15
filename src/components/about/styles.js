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
    max-height: 650px;
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

export const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 90%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
  margin-bottom: 35px;
  
  @media ${device.laptop} {
    width: 30%;
    margin-bottom: unset;
  }
`

export const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  max-height: 600px;
  margin-top: auto;
  margin-bottom: auto;
`
