import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { ButtonLink } from "../components/common/button"

const Container = styled.div`
  min-height: 60vh;
  padding: 8rem 10%;
  text-align: center;

  p {
    margin-bottom: 4rem;
  }
`

const NotFoundPage = () => (
  <Layout>
    <Container>
      <h1>Página não encontrada</h1>
      <p>O endereço que você acessou não existe ou mudou de lugar.</p>
      <ButtonLink to="/">Voltar para o início</ButtonLink>
    </Container>
  </Layout>
)

export default NotFoundPage

export const Head = ({ location }) => (
  <Seo title="Página não encontrada" pathname={location.pathname} noindex />
)
