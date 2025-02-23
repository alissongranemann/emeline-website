import React, { useState } from "react"
import { Formik } from "formik"
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa"
import TextField from "@material-ui/core/TextField"
import Fade from "react-reveal/Fade"
import emailjs from "emailjs-com"

import Snackbar from "../snackbar"
import {
  Container,
  Title,
  ContentContainer,
  StyledForm,
  IconsContainer,
  StyledTextField,
  StyledButton,
  StyledInputLabel,
} from "./styles"
import { FACEBOOK_URL, INSTAGRAM_URL } from "../../config/variables"

const EMAIL_TEMPLATE_ID = "emeline_abreu_contact"
const USER_ID = process.env.GATSBY_EMAIL_JS_USER_ID

const validateForm = values => {
  const errors = {}
  if (!values.name) {
    errors.name = "Obrigatório"
  }
  if (!values.email) {
    errors.email = "Obrigatório"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email inválido."
  }
  if (!values.message) {
    errors.message = "Obrigatório"
  } else if (values.message.length < 10) {
    errors.message = "A mensagem deve conter no mínimo 10 caracteres."
  }
  return errors
}

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false)

  return (
    <Fade>
      <Container>
        <Title>Contato</Title>
        <ContentContainer>
          <Formik
            initialValues={{ email: "", name: "", phone: "", message: "" }}
            validate={validateForm}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setSubmitting(true)
              const { name, email, phone, message } = values
              const variables = {
                from_name: name,
                from_email: email,
                from_phone: phone,
                message: message,
              }
              emailjs
                .send("sendgrid", EMAIL_TEMPLATE_ID, variables, USER_ID)
                .then(res => {
                  setEmailSent(true)
                  setSubmitting(false)
                  resetForm({})
                })
                .catch(err => {
                  setSubmitting(false)
                })
            }}
          >
            {({
              handleSubmit,
              handleBlur,
              handleChange,
              touched,
              errors,
              values,
              isSubmitting,
              isValid,
            }) => (
              <StyledForm onSubmit={handleSubmit}>
                <StyledInputLabel htmlFor="name">Nome *</StyledInputLabel>
                <StyledTextField
                  id="name"
                  name="name"
                  placeholder="João Silva"
                  error={touched.name && Boolean(errors.name)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  helperText={touched.name && errors.name}
                  value={values.name || ""}
                  variant="outlined"
                />
                <StyledInputLabel htmlFor="email">Email *</StyledInputLabel>
                <StyledTextField
                  id="email"
                  name="email"
                  placeholder="email@gmail.com"
                  error={touched.email && Boolean(errors.email)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  helperText={touched.email && errors.email}
                  value={values.email || ""}
                  variant="outlined"
                />
                <StyledInputLabel htmlFor="phone">Telefone</StyledInputLabel>
                <StyledTextField
                  id="phone"
                  name="phone"
                  placeholder="48999998888"
                  error={touched.phone && Boolean(errors.phone)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  helperText={touched.phone && errors.phone}
                  value={values.phone || ""}
                  variant="outlined"
                />
                <StyledInputLabel htmlFor="message">
                  Mensagem *
                </StyledInputLabel>
                <TextField
                  id="message"
                  name="message"
                  placeholder="Digite sua mensagem aqui"
                  multiline
                  rows={3}
                  variant="outlined"
                  error={touched.message && Boolean(errors.message)}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  helperText={touched.message && errors.message}
                  value={values.message || ""}
                />
                <StyledButton
                  disabled={isSubmitting || !isValid}
                  type="submit"
                  variant="contained"
                >
                  Enviar
                </StyledButton>
              </StyledForm>
            )}
          </Formik>
          <IconsContainer>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
              Emeline Abreu
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
              Emeline Abreu
            </a>
            <a
              href="mailto:emeline.ntr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
              emeline.ntr@gmail.com
            </a>{" "}
            <a
              href="https://api.whatsapp.com/send?phone=5548998025867"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              (48) 99802-5867
            </a>
          </IconsContainer>
          <Snackbar
            isOpen={emailSent}
            message="Mensagem enviada!"
            onClose={() => setEmailSent(false)}
          />
        </ContentContainer>
      </Container>
    </Fade>
  )
}

export default Contact
