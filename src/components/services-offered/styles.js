import styled from "styled-components"

import { device } from "../../config/variables"

export const Container = styled.div`
  padding: 50px 10%;
  color: white;
  text-align: center;
  background-color: #7d8c67;
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

  > div {
    margin-bottom: 5rem;
  }
`

export const ListItem = styled.li`
  width: 30rem;
  height: 34rem;
  margin: unset;
  padding: 3rem 2.5rem;
  background-color: rgba(255, 255, 255, 0.65);
  color: #000;

  svg {
    width: 30px;
    height: 30px;
    margin-bottom: 25px;
    color: #000;
  }

  @media ${device.mobileL} {
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
