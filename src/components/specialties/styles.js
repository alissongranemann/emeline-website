import styled from "styled-components"

import { device } from "../../config/variables"

export const Container = styled.div`
  text-align: center;
  padding: 35px 10%;
  background-color: #f1f1f1;
`
export const Title = styled.h2`
  display: inline-block;
  margin: 0 auto;
  margin-bottom: 7.5rem;
`

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: unset;
  list-style: none;
`

export const ListItem = styled.li`
  width: 70vw;
  margin: 0 15px 25px;
  text-align: left;

  @media ${device.tablet} {
    width: 50vw;
  }

  @media ${device.laptop} {
    width: 30vw;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  svg {
    min-width: 35px;
    height: 35px;
    margin-right: 20px;
    color: #7d8c67;
  }
`
export const Text = styled.p`
  line-height: 1.75;
`
