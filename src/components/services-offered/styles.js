import styled from "styled-components"

import SectionTitle from "../common/section-title"
import { colors } from "../../config/variables"

export const Container = styled.div`
  padding: 50px 10%;
  color: white;
  text-align: center;
  background-color: #7d8c67;
`

export const Title = styled(SectionTitle).attrs({
  $accent: "rgba(255, 255, 255, 0.8)",
})``

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  list-style: none;

  > div {
    height: 100%;
  }
`

export const ListItem = styled.li`
  height: 100%;
  margin: unset;
  padding: 3.5rem 2.5rem;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);

  svg {
    box-sizing: content-box;
    width: 28px;
    height: 28px;
    margin-bottom: 2rem;
    padding: 16px;
    border-radius: 50%;
    background-color: rgba(125, 140, 103, 0.15);
    color: ${colors.green};
  }
`

export const Subtitle = styled.h3`
  font-size: 2.25rem;
`

export const Text = styled.p`
  margin-bottom: 0;
  line-height: 1.6;
  overflow-wrap: break-word;
`
