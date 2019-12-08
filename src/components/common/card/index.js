import React from "react"

import StyledCard from "./styles"

const Card = ({ className, children }) => (
  <StyledCard className={className}>{children}</StyledCard>
)

export default Card
