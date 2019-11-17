import styled from "styled-components"

import { device } from "../../layouts/variables"
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
  width: 275px;
  height: 375px;
  margin: 5px;
  padding: 30px 25px;
  border: 1px solid #e1e1e1;
  border-radius: 25px;
  box-shadow: -2px 2px 5px 0px #4c4c4c;
  font-size: 22px;
  background-color: rgba(255, 255, 255, 0.65);
  color: #000;

  svg {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    color: #671d93;
  }

  @media ${device.mobileL} {
    margin: 15px;
  }
`

export const Subtitle = styled.h3`
  font-size: 22px;
`

export const Text = styled.p`
  font-size: 15px;
  overflow-wrap: break-word;
`