import styled from "styled-components"

const Card = styled.div`
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  overflow: hidden;

  &:hover {
    transition: all 0.2s ease-out;
    transform: scale(1.02, 1.02);
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.9);
  }
`

export default Card
