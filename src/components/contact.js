import React from "react"
import styled from "styled-components"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa"

const Title = styled.h2`
  text-align: center;
  margin-bottom: 40px;
`

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-bottom: unset;

  input,
  textarea {
    margin-bottom: 25px;
  }

  textarea {
    min-height: 100px;
  }

  label {
    margin-bottom: 5px;
  }
`

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  svg {
    height: auto;
    width: 30px;
    margin-right: 10px;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: unset;
  }

  a + a {
    margin-top: 50px;
  }
`

const Contact = () => (
  <div>
    <Title>Contato</Title>
    <ContentContainer>
      <Formik
        initialValues={{ email: "", name: "", phone: "" }}
        validate={values => {
          const errors = {}
          if (!values.name) {
            errors.name = "Obrigatório"
          }
          if (!values.email) {
            errors.email = "Obrigatório"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email inválido."
          }
          if (!values.message) {
            errors.message = "Obrigatório"
          } else if (values.message.length < 10) {
            errors.message = "A mensagem deve conter no mínimo 10 caracteres."
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({ isSubmitting }) => (
          <StyledForm>
            <label htmlFor="name">Nome *</label>
            <ErrorMessage name="name" component="div" />
            <Field name="name" />
            <label htmlFor="email">Email *</label>
            <ErrorMessage name="email" component="div" />
            <Field type="email" name="email" />
            <label htmlFor="phone">Telefone</label>
            <ErrorMessage name="phone" component="div" />
            <Field name="phone" />
            <label htmlFor="message">Mensagem *</label>
            <ErrorMessage name="message" component="div" />
            <Field name="message" as="textarea" />
            <button type="submit" disabled={isSubmitting}>
              Enviar
            </button>
          </StyledForm>
        )}
      </Formik>
      <IconsContainer>
        <a href="www.facebook.com/emeline.abreu">
          <FaFacebook />
          Emeline Abreu
        </a>
        <a href="http://www.instagram.com/emelineabreunutri">
          <FaInstagram />
          Emeline Abreu
        </a>
        <a href="mailto:emeline.ntr@gmail.com">
          <FaEnvelope />
          emeline.ntr@gmail.com
        </a>{" "}
        <a href="https://api.whatsapp.com/send?phone=5548996229104">
          <FaWhatsapp />
          (48) 99622 - 9104
        </a>
      </IconsContainer>
    </ContentContainer>
  </div>
)

export default Contact
