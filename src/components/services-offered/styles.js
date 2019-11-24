import styled from "styled-components"

import { device } from "../../config/variables"
import Background from "./background"

export const Container = styled(Background)`
  margin-bottom: 50px;
  padding: 50px 10%;
  color: white;
  text-align: center;
`

export const Title = styled.h2`
  display: inline-block;
  margin: 0 auto;
  margin-bottom: 50px;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style: none;
  margin: unset;
`

export const ListItem = styled.li`
  width: 30rem;
  height: 34rem;
  margin: 5px;
  padding: 3rem 2.5rem;
  border: 1px solid #e1e1e1;
  border-radius: 25px;
  box-shadow: -2px 2px 5px 0px #4c4c4c;
  background-color: rgba(255, 255, 255, 0.65);
  color: #000;

  svg {
    width: 30px;
    height: 30px;
    margin-bottom: 25px;
    color: #671d93;
  }

  @media ${device.mobileL} {
    margin: 15px;
    width: 27.5rem;
    height: 35rem;
  }
`

export const Subtitle = styled.h3`
  font-size: 2.25rem;
`

export const Text = styled.p`
  line-height: 2.25rem;
  overflow-wrap: break-word;
`
