import styled from "styled-components"

const Card = styled.div`
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 15px;
  overflow: hidden;
  transition:
    transform 0.25s ease-out,
    box-shadow 0.25s ease-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`

export default Card
