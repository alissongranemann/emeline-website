import styled from "styled-components"
import { Link } from "gatsby"

export const Container = styled.div`
  padding: 50px 10%;
  text-align: center;
  background-color: #f1f1f1;
`

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 4rem;
  padding: 1.2rem 4rem;
  background: #4b434d;
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: #282628;
  }
`
