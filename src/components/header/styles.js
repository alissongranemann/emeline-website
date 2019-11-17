import styled from "styled-components"

export const StyledHeader = styled.header`
  padding: 0 10%;
  background-color: rgba(106, 27, 154, 0.95);
  background-image: linear-gradient(
      to right bottom,
      rgba(49, 18, 49, 1),
      rgba(106, 27, 154, 0.95)
    ),
    url(${props => props.backgroundImg});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80vh);
`

export const Container = styled.div`
  max-width: 70px;
  padding: 5px 0;
  margin: 0 auto;
`
